export default function CopywritingPage() {
  return (
    <div className="flex h-screen w-full flex-col bg-zinc-950 text-white">
      <header className="flex h-16 items-center border-b border-zinc-800 px-6">
        <h1 className="text-xl font-bold">Marketing Copy Generator</h1>
      </header>

      <div className="grid flex-1 grid-cols-1 overflow-hidden md:grid-cols-2">
        {/* Input Section */}
        <div className="border-r border-zinc-800 p-8 overflow-y-auto">
          <div className="mx-auto max-w-lg space-y-8">
            <div>
              <label className="block text-sm font-medium text-zinc-400">Product / Service Name</label>
              <input type="text" className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-white focus:border-green-500 focus:outline-none" placeholder="e.g. Aura Energy Drink" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-400">Target Audience</label>
              <input type="text" className="mt-2 w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-white focus:border-green-500 focus:outline-none" placeholder="e.g. Gamers, night owls" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400">Platform</label>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Email', 'Blog Post'].map(p => (
                   <button key={p} className="rounded-md border border-zinc-700 bg-zinc-800 py-2 text-sm hover:border-green-500 hover:text-green-400 transition-all">
                     {p}
                   </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400">Key Features / Keywords</label>
              <textarea className="mt-2 h-32 w-full resize-none rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-white focus:border-green-500 focus:outline-none" placeholder="Zero sugar, high caffeine, no crash..." />
            </div>

            <button className="w-full rounded-md bg-gradient-to-r from-green-600 to-emerald-600 py-3 font-bold text-white shadow-lg shadow-green-900/20 hover:from-green-500 hover:to-emerald-500">
              Generate Copy
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-zinc-900 p-8 overflow-y-auto">
          <div className="mx-auto max-w-lg">
             <h2 className="mb-6 text-lg font-semibold text-zinc-300">Generated Results</h2>
             
             <div className="space-y-6">
                {/* Result Card */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg border border-zinc-700 bg-zinc-950 p-6 shadow-sm transition-all hover:border-zinc-500">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-green-400 uppercase tracking-widest">Option {i}</span>
                      <div className="flex gap-2">
                        <button className="text-xs text-zinc-500 hover:text-white">Copy</button>
                        <button className="text-xs text-zinc-500 hover:text-white">Save</button>
                      </div>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      "Unleash your potential with Aura Energy! zero crash, all power. ⚡️ #GameOn #NoSleep"
                    </p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
