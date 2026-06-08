import { Button } from "@/components/ui/button";
import { MoveRight, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-sky-400" />
          <span>The Ultimate Developer Foundation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white max-w-5xl">
          Learn Full-Stack Development from scratch with
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-teal-400 pb-2">
            CS Foundations 101
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-2xl font-medium text-slate-400 max-w-2xl leading-relaxed">
          Master the terminal, conquer Git, build stunning web apps, and integrate Artificial Intelligence—all in one place.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto">
          <Button 
            asChild 
            className="group relative overflow-hidden rounded-full text-lg px-8 py-6 w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 hover:text-slate-950 transition-all shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] hover:-translate-y-1"
          >
            <Link href="/course/terminal">
              <span className="relative z-10 flex items-center font-semibold">
                Start Learning Now
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="rounded-full text-lg px-8 py-6 w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-md transition-all hover:-translate-y-1"
          >
            <Link href="/about">
              <Code2 className="mr-2 h-5 w-5 text-slate-400" />
              Explore Curriculum
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

    </main>
  );
}
