import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  Code2,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
} from "lucide-react";
import { C_PROBLEMS } from "../data/cProblemsData";
import { sfx } from "../utils/sound";

export default function CLearnPage({ onBack, user, onUpdateUser }) {
  const [filter, setFilter] = useState("All"); // All | Easy | Medium | Hard
  const [search, setSearch] = useState("");
  const [activeProblem, setActiveProblem] = useState(C_PROBLEMS[0]);
  const [solvedList, setSolvedList] = useState([]);
  const [copied, setCopied] = useState(false);

  const filteredProblems = C_PROBLEMS.filter((p) => {
    const matchesFilter = filter === "All" || p.difficulty === filter;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClaimProblem = (prob) => {
    if (solvedList.includes(prob.id)) return;
    sfx.playClaim();
    setSolvedList([...solvedList, prob.id]);

    onUpdateUser({
      ...user,
      currentXP: (user?.currentXP || 0) + prob.xp,
      stats: {
        ...user?.stats,
        intellect: (user?.stats?.intellect || 51) + 1,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white pb-16">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Dashboard
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-bold">
              50 C Hunter Trials
            </span>
            <span className="text-xs font-mono text-slate-400">
              Solved: {solvedList.length} / 50
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Filter & Problem List (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Search & Filter Controls */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search problem title or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
              />
            </div>

            {/* Difficulty Tabs */}
            <div className="grid grid-cols-4 gap-1.5">
              {["All", "Easy", "Medium", "Hard"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setFilter(lvl)}
                  className={`py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                    filter === lvl
                      ? "bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/20"
                      : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* List of Problems */}
          <div className="space-y-2 max-h-[72vh] overflow-y-auto pr-1">
            {filteredProblems.map((prob) => {
              const isSelected = activeProblem.id === prob.id;
              const isSolved = solvedList.includes(prob.id);

              return (
                <div
                  key={prob.id}
                  onClick={() => setActiveProblem(prob)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] uppercase font-mono px-2 py-0.5 rounded border font-bold ${
                          prob.difficulty === "Easy"
                            ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
                            : prob.difficulty === "Medium"
                              ? "bg-amber-950/40 border-amber-500/30 text-amber-400"
                              : "bg-rose-950/40 border-rose-500/30 text-rose-400"
                        }`}
                      >
                        {prob.difficulty}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {prob.category}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-wide">
                      {prob.title}
                    </h4>
                  </div>

                  <div className="text-right flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      +{prob.xp} XP
                    </span>
                    {isSolved && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Problem Details & Solution Viewer (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-black">
                  {activeProblem.difficulty} ARCHIVE • {activeProblem.category}
                </span>
                <h2 className="text-xl font-black text-white mt-2">
                  {activeProblem.title}
                </h2>
              </div>

              <button
                onClick={() => handleClaimProblem(activeProblem)}
                disabled={solvedList.includes(activeProblem.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  solvedList.includes(activeProblem.id)
                    ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {solvedList.includes(activeProblem.id)
                  ? "Inscribed (+XP)"
                  : "Mark Inscribed"}
              </button>
            </div>

            {/* Description */}
            <div>
              <h5 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-1">
                Trial Objective
              </h5>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeProblem.desc}
              </p>
            </div>

            {/* Sample I/O */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                  Sample Input
                </span>
                <code className="text-xs font-mono text-cyan-300">
                  {activeProblem.sampleInput}
                </code>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                  Sample Output
                </span>
                <code className="text-xs font-mono text-amber-300">
                  {activeProblem.sampleOutput}
                </code>
              </div>
            </div>

            {/* Solution Code Frame */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                <span className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  solution.c
                </span>
                <button
                  onClick={() => handleCopy(activeProblem.solution)}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Code
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 text-xs font-mono text-emerald-300/90 leading-relaxed overflow-x-auto selection:bg-cyan-500/30">
                <code>{activeProblem.solution}</code>
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
