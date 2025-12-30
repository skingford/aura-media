import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-purple-500/30">
      {/* Navbar Placeholder */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
            Aura Media
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-white/70 md:flex">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-white/80">Log in</Link>
            <Link href="/signup" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
          <div className="container relative mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl space-y-8">
              <h1 className="bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
                Unleash Your Creative Potential with AI
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/60 sm:text-xl leading-relaxed">
                The all-in-one platform for intelligent writing, multimedia generation, and one-click publishing. 
                Powered by advanced Multi-Agent systems.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/create"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-purple-500/40"
                >
                  Start Creating Now
                </Link>
                <Link
                  href="#demo"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10"
                >
                  <span>Watch Demo</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
            
            {/* Abstract UI Mockup */}
            <div className="mx-auto mt-20 max-w-5xl rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm lg:mt-32">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/50 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
                    Interactive Dashboard Preview
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 border-t border-white/5 bg-zinc-950">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Capabilities</h2>
              <p className="mt-4 text-white/60">Everything you need to build your media empire.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Smart Writing Agents",
                  desc: "Multi-agent collaboration for novels and copywriting. Character logic, plot visualization, and style adaptation.",
                  icon: "✍️"
                },
                {
                  title: "Multimedia Generation",
                  desc: "Transform text to video, generate anime characters, and produce short dramas with consistent characters.",
                  icon: "🎬"
                },
                {
                  title: "One-Click Publishing",
                  desc: "Analyze trends and publish to TikTok, YouTube, Instagram, and more with a single click.",
                  icon: "🚀"
                }
              ].map((feature, i) => (
                <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-white/20">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-white/10 py-12 text-center text-sm text-white/40">
        <p>© 2025 Aura Media. All rights reserved.</p>
      </footer>
    </div>
  );
}
