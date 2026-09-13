import React from "react";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Play,
  Sparkles,
  Terminal,
  CheckCircle2,
} from "lucide-react";

const LANGUAGE_CARDS = [
  {
    id: "c",
    name: "C Language",
    badge: "Foundation Tier",
    tagline: "The Mother of Modern Programming",
    desc: "Master direct memory control, raw pointers, bitwise architecture, and low-level system design.",
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    border: "border-cyan-500/40 hover:border-cyan-400",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30",
    stats: "C Tutorial!",
  },
  {
    id: "cpp",
    name: "C++",
    badge: "Elite System Tier",
    tagline: "High Performance & Modern STL",
    desc: "Harness modern OOP, templates, standard template library algorithms, and game engine concurrency.",
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
    border: "border-indigo-500/40 hover:border-indigo-400",
    badgeColor: "bg-indigo-950/60 text-indigo-300 border-indigo-500/30",
    stats: "C++ Tutorial!",
  },
  {
    id: "python",
    name: "Python",
    badge: "Arcane Tier",
    tagline: "Rapid Scripting & Machine Learning",
    desc: "Wield high-speed automation, list comprehension spells, deep decorators, and data sorcery.",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    border: "border-amber-500/40 hover:border-amber-400",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-500/30",
    stats: "Python Tutorial!",
  },
  {
    id: "java",
    name: "Java",
    badge: "Guardian Tier",
    tagline: "Enterprise Grade & Platform Independence",
    desc: "Conquer JVM memory, multithreading executor pools, modern Streams pipelines, and robust OOP.",
    color: "from-orange-500/20 via-rose-500/10 to-transparent",
    border: "border-orange-500/40 hover:border-orange-400",
    badgeColor: "bg-orange-950/60 text-orange-300 border-orange-500/30",
    stats: "Java Tutorial!",
  },
];

export default function LearnLanguagePage({ onBack, onSelectLanguage }) {
  return (
    <div className="min-h-screen bg-[#080c14] text-white pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Sanctuary
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Grand Language
              Archives
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 mt-10 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono font-bold text-cyan-400">
            <Terminal className="w-3.5 h-3.5" /> CODE ACADEMY COVENANT
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Choose Your Sacred Language
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Step into structured coding roadmaps, inspect real-world trial
            algorithms, and launch interactive compiler chambers to level up
            your Intellect stats.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LANGUAGE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${card.color} bg-slate-900/90 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.01] ${card.border}`}
            >
              {/* Card Header & Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-inner">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">
                        {card.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {card.tagline}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md border ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Row: Stats on Left & Coding Tutorial Button on Down Right */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{card.stats}</span>
                </div>

                {/* Down Right Button */}
                <button
                  onClick={() => onSelectLanguage(card.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Learn</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
