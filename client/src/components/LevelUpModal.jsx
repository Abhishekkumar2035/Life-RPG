import React, { useEffect } from "react";
import { Sparkles, Trophy, ArrowRight } from "lucide-react";
import { sfx } from "../utils/sound";

export default function LevelUpModal({
  show,
  level,
  onClose,
  onClaimAwakening,
}) {
  useEffect(() => {
    if (show) {
      sfx.playLevelUp?.();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-sm w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-center">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 ring-4 ring-cyan-400/20 animate-bounce">
          <Trophy className="w-10 h-10 text-slate-950" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-black uppercase tracking-widest mt-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Rank Awakened
        </div>

        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-indigo-300 mt-2 tracking-wide">
          LEVEL {level || 2}
        </h2>

        <p className="text-xs text-slate-400 mt-2">
          Your potential expands. All core attributes and energy reserves have
          been increased.
        </p>

        <div className="grid grid-cols-2 gap-2 my-5">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">
              HP / Energy
            </span>
            <span className="text-sm font-black text-emerald-400 font-mono">
              +150 Max
            </span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">
              Stat Points
            </span>
            <span className="text-sm font-black text-cyan-400 font-mono">
              +5 Unallocated
            </span>
          </div>
        </div>

        {/* Click karne par direct Naya Awakening Reward Page khulega */}
        <button
          onClick={() => {
            onClose();
            onClaimAwakening();
          }}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
        >
          Claim Awakening <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
