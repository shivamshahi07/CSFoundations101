import Link from "next/link";
import { BookOpen, Terminal, GitBranch, Globe, Bot, CheckCircle } from "lucide-react";

const MODULES = [
  { id: "terminal", name: "Terminal", icon: Terminal },
  { id: "git", name: "Git & GitHub", icon: GitBranch },
  { id: "web", name: "Web Development", icon: Globe },
  { id: "ai", name: "Artificial Intelligence", icon: Bot },
];

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-slate-50 dark:bg-slate-950">
      <aside className="w-full md:w-64 border-r bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shrink-0">
        <div className="p-6">
          <Link href="/" className="font-bold text-xl flex items-center gap-2 text-sky-600 dark:text-sky-400">
            <BookOpen className="h-6 w-6" />
            CS Foundations
          </Link>
        </div>
        <nav className="px-4 pb-6 space-y-8">
          <div>
            <h3 className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Modules</h3>
            <ul className="space-y-1">
              {MODULES.map((mod) => {
                const Icon = mod.icon;
                return (
                  <li key={mod.id}>
                    <div className="flex flex-col mb-2">
                      <Link
                        href={`/course/${mod.id}`}
                        className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {mod.name}
                      </Link>
                      <Link
                        href={`/course/${mod.id}/quiz`}
                        className="flex items-center gap-3 pl-9 pr-2 py-1.5 text-xs font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                      >
                        <CheckCircle className="h-3 w-3" />
                        Knowledge Check
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6 md:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
