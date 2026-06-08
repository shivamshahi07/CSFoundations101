import Link from "next/link";
import { Terminal, GitBranch, Globe, Bot, ArrowRight } from "lucide-react";

const NOTES = [
  {
    id: "terminal",
    title: "Terminal & Command Line",
    description: "Learn how to navigate your system and manipulate files like a pro.",
    icon: Terminal,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    id: "git",
    title: "Git & GitHub",
    description: "Master version control, branches, commits, and open-source collaboration.",
    icon: GitBranch,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    id: "web",
    title: "Web Development",
    description: "Understand HTML, CSS, JavaScript, and modern frameworks like Next.js.",
    icon: Globe,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Get up to speed with LLMs, prompt temperatures, and autonomous coding agents.",
    icon: Bot,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
];

export default function NotesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-16 px-6 bg-slate-950 text-slate-300">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
          Knowledge Base
        </h1>
        <p className="text-lg md:text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Access all of our theory modules and knowledge files below.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {NOTES.map((note) => {
            const Icon = note.icon;
            return (
              <Link 
                key={note.id} 
                href={`/course/${note.id}`}
                className="group flex flex-col p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 hover:border-slate-700 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${note.bg}`}>
                  <Icon className={`w-7 h-7 ${note.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {note.title}
                </h2>
                <p className="text-slate-400 mb-8 flex-grow">
                  {note.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-sky-500 group-hover:text-sky-400 transition-colors mt-auto">
                  Read Notes
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
