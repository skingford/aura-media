#!/bin/bash
set -e

# Define paths
APP_NAME="web"
APP_DIR="apps/$APP_NAME"
DIST_DIR="dist"

# Ensure we're in the project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
cd "$PROJECT_ROOT"

echo "🧹 Cleaning up previous build..."
rm -rf "$DIST_DIR"

echo "🏗️  Building project..."
pnpm run build --filter $APP_NAME

echo "📦 Deploying dependencies and source..."
# Use pnpm deploy to get a clean, self-contained node_modules
# --legacy is required for pnpm v10+ with shared lockfile
pnpm --filter $APP_NAME --prod deploy "$DIST_DIR" --legacy

echo "📦 Copying build artifacts..."
# Copy standalone server
if [ -f "$APP_DIR/.next/standalone/apps/$APP_NAME/server.js" ]; then
  cp "$APP_DIR/.next/standalone/apps/$APP_NAME/server.js" "$DIST_DIR/"
else
  echo "❌ Error: server.js not found in standalone build"
  exit 1
fi

# Copy .next folder from standalone
if [ -d "$APP_DIR/.next/standalone/apps/$APP_NAME/.next" ]; then
  cp -R "$APP_DIR/.next/standalone/apps/$APP_NAME/.next" "$DIST_DIR/"
else
  echo "❌ Error: .next folder not found in standalone build"
  exit 1
fi

# Copy static assets (Next.js standalone doesn't include these by default)
if [ -d "$APP_DIR/.next/static" ]; then
  echo "📁 Copying static assets..."
  mkdir -p "$DIST_DIR/.next/static"
  cp -R "$APP_DIR/.next/static"/* "$DIST_DIR/.next/static/"
fi

# Copy public folder if it exists
if [ -d "$APP_DIR/public" ]; then
  echo "📁 Copying public assets..."
  mkdir -p "$DIST_DIR/public"
  cp -R "$APP_DIR/public"/* "$DIST_DIR/public/" 2>/dev/null || true
fi

# Remove source files and dev configs not needed for production
echo "🧹 Removing dev files..."
rm -rf "$DIST_DIR/src" \
       "$DIST_DIR/tsconfig.json" \
       "$DIST_DIR/next.config.ts" \
       "$DIST_DIR/eslint.config.mjs" \
       "$DIST_DIR/postcss.config.mjs" \
       "$DIST_DIR/README.md"

# Create ecosystem.config.js for production
cat > "$DIST_DIR/ecosystem.config.js" << EOL
module.exports = {
  apps: [
    {
      name: "$APP_NAME",
      script: "./server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      instances: 1,
      exec_mode: "cluster",
      watch: false
    }
  ]
}
EOL

# Calculate and display package size
DIST_SIZE=$(du -sh "$DIST_DIR" | cut -f1)
echo ""
echo "✅ Deployment package created in '$DIST_DIR' directory."
echo "📦 Package size: $DIST_SIZE"
echo ""
echo "👉 To deploy to production:"
echo "   1. Upload the '$DIST_DIR' directory to your server"
echo "   2. On the server, run: pm2 start ecosystem.config.js"
echo "   3. Check logs with: pm2 logs $APP_NAME"
echo ""
