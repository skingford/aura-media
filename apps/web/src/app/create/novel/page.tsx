import { Suspense } from "react";
// In a real app, we would import Shadcn components here (Button, Input, etc.)

export default function NovelWriterPage() {
  return (
    <div className="flex h-screen w-full flex-col bg-zinc-950 text-white overflow-hidden">
      {/* Horizontal Toolbar */}
      <header className="flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4">
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Aura Novel</span>
          <span className="text-zinc-500">/</span>
          <span className="text-sm font-medium">Untitled Project</span>
        </div>
        <div className="flex items-center gap-2">
           {/* Actions */}
           <button className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm hover:bg-zinc-700">Save</button>
           <button className="rounded-md bg-purple-600 px-3 py-1.5 text-sm font-medium hover:bg-purple-500">Export</button>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Context & Settings */}
        <aside className="w-80 flex-shrink-0 border-r border-zinc-800 bg-zinc-950/50 p-4 overflow-y-auto">
          <div className="space-y-6">
            <div>
               <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Project Context</h3>
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm text-zinc-400 mb-1">Genre</label>
                   <select className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none">
                     <option>Fantasy</option>
                     <option>Sci-Fi</option>
                     <option>Mystery</option>
                     <option>Romance</option>
                   </select>
                 </div>
                 <div>
                    <label className="block text-sm text-zinc-400 mb-1">Background</label>
                    <textarea 
                      className="w-full h-24 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none resize-none"
                      placeholder="Describe the world, era, and key conflicts..."
                    />
                 </div>
               </div>
            </div>
            
            <div>
               <div className="flex items-center justify-between mb-2">
                 <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Characters</h3>
                 <button className="text-xs text-purple-400 hover:text-purple-300">+ Add</button>
               </div>
               <div className="space-y-2">
                  {/* Character Card Mockup */}
                  <div className="rounded border border-zinc-800 bg-zinc-900 p-2 text-sm hover:border-zinc-700 cursor-pointer">
                     <div className="font-medium text-zinc-200">Protagonist</div>
                     <div className="text-xs text-zinc-500">Heroic, Young, Naive</div>
                  </div>
                  <div className="rounded border border-zinc-800 bg-zinc-900 p-2 text-sm hover:border-zinc-700 cursor-pointer">
                     <div className="font-medium text-zinc-200">Antagonist</div>
                     <div className="text-xs text-zinc-500">Dark Lord, Powerful</div>
                  </div>
               </div>
            </div>
          </div>
        </aside>
        
        {/* Main Center: Editor */}
        <main className="flex-1 bg-zinc-900/30 relative">
           <div className="absolute inset-0 overflow-y-auto p-12">
              <div className="mx-auto max-w-3xl min-h-full rounded-lg bg-zinc-950 p-12 shadow-sm shadow-black border border-zinc-800/50">
                 {/* This would be the TipTap Editor */}
                 <h1 className="text-4xl font-bold text-zinc-100 mb-8 outline-none" contentEditable suppressContentEditableWarning={true}>Chapter 1: The Beginning</h1>
                 <div className="text-lg leading-relaxed text-zinc-300 outline-none space-y-4" contentEditable suppressContentEditableWarning={true}>
                    <p>The sky was the color of television, tuned to a dead channel.</p>
                    <p className="text-zinc-500 italic">[Start writing here or ask the AI to generate...]</p>
                 </div>
              </div>
           </div>
           
           {/* Floating AI Action Button */}
           <div className="absolute bottom-8 right-8">
              <button className="flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold shadow-lg hover:bg-purple-500 transition-all hover:scale-105 active:scale-95">
                 ✨ Generate Chapter
              </button>
           </div>
        </main>
        
        {/* Right Sidebar: AI Assistants */}
        <aside className="w-80 flex-shrink-0 border-l border-zinc-800 bg-zinc-950/50 flex flex-col">
           <div className="border-b border-zinc-800 p-4">
              <h3 className="text-sm font-semibold">AI Assistant</h3>
           </div>
           <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Chat Message Mockup */}
              <div className="flex gap-3">
                 <div className="h-8 w-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">A</div>
                 <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 text-sm text-zinc-300">
                    I've analyzed your outline. Would you like me to draft the opening scene focusing on the "Dark Lord" introduction?
                 </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                 <div className="bg-purple-600/20 text-purple-200 rounded-lg rounded-tr-none p-3 text-sm">
                    Yes, make it ominous.
                 </div>
              </div>
           </div>
           <div className="p-4 border-t border-zinc-800">
              <div className="relative">
                 <input 
                   type="text" 
                   className="w-full rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none pr-10"
                   placeholder="Ask AI..."
                 />
                 <button className="absolute right-2 top-1.5 text-zinc-400 hover:text-white">
                    ↑
                 </button>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
