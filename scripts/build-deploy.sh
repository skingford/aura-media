#!/bin/bash
set -e

# Define paths
APP_NAME="web"
APP_DIR="apps/$APP_NAME"
DIST_DIR="dist"

echo "🧹 Cleaning up previous build..."
rm -rf $DIST_DIR

echo "🏗️  Building project..."
pnpm run build --filter $APP_NAME

echo "📦 Deploying dependencies and source..."
# Use pnpm deploy to get a clean, self-contained node_modules
# --legacy is required for pnpm v10+ with shared lockfile
pnpm --filter $APP_NAME --prod deploy $DIST_DIR --legacy

echo "📦 Copying build artifacts..."
# Copy standalone server
cp $APP_DIR/.next/standalone/apps/$APP_NAME/server.js $DIST_DIR/

# Copy .next folder from standalone
# We need to merge this with static assets
cp -R $APP_DIR/.next/standalone/apps/$APP_NAME/.next $DIST_DIR/

# Copy static assets (Next.js standalone doesn't include these by default)
# Ensure .next/static exists
mkdir -p $DIST_DIR/.next/static
cp -R $APP_DIR/.next/static/* $DIST_DIR/.next/static/

# Copy public assets (pnpm deploy might have copied source public, but we ensure build public is used)
cp -R $APP_DIR/public/* $DIST_DIR/public/

# Remove source files not needed for production
rm -rf $DIST_DIR/src $DIST_DIR/tsconfig.json $DIST_DIR/next.config.ts

# Create ecosystem.config.js for production
cat > $DIST_DIR/ecosystem.config.js << EOL
module.exports = {
  apps: [
    {
      name: "$APP_NAME",
      script: "./server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
}
EOL

echo "✅ Deployment package created in '$DIST_DIR' directory."
echo "👉 You can upload the '$DIST_DIR' directory to your server."
echo "   Then run: pm2 start ecosystem.config.js"
