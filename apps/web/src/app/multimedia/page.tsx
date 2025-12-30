export default function MultimediaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-6 bg-black">
        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Aura Video Studio</h1>
        <div className="text-sm text-zinc-400">0 Credits Used</div>
      </header>

      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Left: Script & Settings */}
        <div className="w-full lg:w-1/3 border-r border-zinc-800 p-6 space-y-8 overflow-y-auto bg-zinc-950">
           <div>
             <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">Input Source</h2>
             <div className="flex gap-2 mb-4">
                <button className="flex-1 rounded bg-zinc-800 py-2 text-sm hover:bg-zinc-700 data-[active=true]:bg-orange-600 data-[active=true]:text-white" data-active="true">Text to Video</button>
                <button className="flex-1 rounded bg-zinc-800 py-2 text-sm hover:bg-zinc-700">Image to Video</button>
             </div>
             <textarea 
               className="w-full h-32 rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-sm focus:border-orange-500 focus:outline-none"
               placeholder="Describe your scene in detail. e.g. A cyberpunk city street at night, neon lights reflecting on wet pavement..."
             ></textarea>
           </div>

           <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">Style & Model</h2>
              <div className="grid grid-cols-2 gap-3">
                 <div className="aspect-square rounded-lg border border-orange-500/50 bg-zinc-900 p-2 cursor-pointer relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-sm font-bold">Realistic</span>
                 </div>
                 <div className="aspect-square rounded-lg border border-zinc-800 bg-zinc-900 p-2 cursor-pointer hover:border-zinc-600">
                    <span className="text-sm font-medium">Anime</span>
                 </div>
                 <div className="aspect-square rounded-lg border border-zinc-800 bg-zinc-900 p-2 cursor-pointer hover:border-zinc-600">
                     <span className="text-sm font-medium">3D Render</span>
                 </div>
                 <div className="aspect-square rounded-lg border border-zinc-800 bg-zinc-900 p-2 cursor-pointer hover:border-zinc-600">
                     <span className="text-sm font-medium">Oil Painting</span>
                 </div>
              </div>
           </div>

           <button className="w-full rounded-full bg-gradient-to-r from-orange-600 to-red-600 py-3 font-bold shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] transition-all">
             Generate Video (5s)
           </button>
        </div>

        {/* Right: Preview & Timeline */}
        <div className="flex-1 bg-zinc-900/50 p-8 flex flex-col items-center justify-center">
           <div className="w-full max-w-4xl aspect-video bg-black rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="text-zinc-600 flex flex-col items-center gap-2">
                 <div className="text-4xl">🎬</div>
                 <p>Preview Area</p>
              </div>
              
              {/* Fake Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-orange-600 w-1/3"></div>
           </div>
           
           <div className="mt-8 w-full max-w-4xl h-24 bg-zinc-950 border border-zinc-800 rounded-lg p-2 flex gap-1">
              {/* Timeline Track */}
              <div className="h-full w-24 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">Scene 1</div>
               <div className="h-full w-24 bg-zinc-800/50 rounded border border-zinc-700/50 border-dashed flex items-center justify-center text-xs text-zinc-500">+</div>
           </div>
        </div>
      </main>
    </div>
  );
}
