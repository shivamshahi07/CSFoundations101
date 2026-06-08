import { Code2, Compass, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-16 px-6 bg-slate-950 text-slate-300">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
          About CS Foundations
        </h1>
        <p className="text-lg md:text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Our mission is to bridge the gap between absolute beginners and production-ready full-stack developers by providing clear, curated, and interactive resources.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-900 transition-colors">
            <Compass className="w-12 h-12 text-sky-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Curated Paths</h3>
            <p className="text-slate-400">
              Stop wandering through endless tutorials. We provide a structured roadmap starting from the terminal up to AI integration.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-900 transition-colors">
            <Code2 className="w-12 h-12 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Interactive Learning</h3>
            <p className="text-slate-400">
              Read the theory, then immediately test your knowledge with our built-in interactive knowledge checks and quizzes.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-900 transition-colors">
            <Layers className="w-12 h-12 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Modern Stack</h3>
            <p className="text-slate-400">
              Learn the tools that the industry actually uses today, including Next.js, Tailwind, Git, and cutting-edge LLMs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
