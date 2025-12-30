import Link from "next/link";

export default function CreatePage() {
  const tools = [
    {
      title: "Novel Writer",
      description: "Create immersive stories with AI assistants.",
      href: "/create/novel",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Marketing Copy",
      description: "Generate high-conversion ad copy.",
      href: "/create/copywriting",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Video Studio",
      description: "Turn scripts into video or anime.",
      href: "/multimedia",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black p-8 text-white">
      <header className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Creative Studio</h1>
        <div className="flex gap-4">
          <Link href="/" className="text-sm text-zinc-400 hover:text-white">Back to Home</Link>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="group relative overflow-hidden rounded-xl bg-zinc-900 p-8 transition-all hover:scale-[1.02] hover:bg-zinc-800"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 transition-opacity group-hover:opacity-10`} />
            <h2 className="mb-2 text-2xl font-bold">{tool.title}</h2>
            <p className="text-zinc-400">{tool.description}</p>
            <div className="mt-4 flex items-center gap-2 font-medium text-white/80 group-hover:text-white">
              Launch <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
