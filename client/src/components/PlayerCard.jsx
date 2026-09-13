import React from "react";
import {
  Swords,
  Brain,
  Shield,
  Zap,
  Flame,
  Coins,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function PlayerCard({ user, onTriggerLevelUp }) {
  const currentXP = user?.currentXP || user?.xp || 0;
  const maxXP = user?.maxXP || 519;
  const isReadyToLevelUp = currentXP >= maxXP;
  const progressPercent = Math.min(100, Math.round((currentXP / maxXP) * 100));

  const stats = [
    {
      label: "STRENGTH",
      val: user?.stats?.strength || 10,
      icon: Swords,
      color: "text-rose-400 border-rose-500/20 bg-rose-950/20",
    },
    {
      label: "INTELLECT",
      val: user?.stats?.intellect || 51,
      icon: Brain,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
    },
    {
      label: "VITALITY",
      val: user?.stats?.vitality || 10,
      icon: Shield,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
    },
    {
      label: "AGILITY",
      val: user?.stats?.agility || 10,
      icon: Zap,
      color: "text-amber-400 border-amber-500/20 bg-amber-950/20",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-2xl backdrop-blur-md">
      <div className="absolute top-0 right-1/4 -z-10 h-32 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Top Details */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400/40">
              {user?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <span className="absolute -bottom-2 -right-1 px-2 py-0.5 text-[10px] font-black tracking-wider uppercase bg-amber-500 text-slate-950 rounded-md shadow-md ring-2 ring-slate-950">
              LVL {user?.level || 4}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-white tracking-wide">
                {user?.username || "Hunter"}
              </h2>
              <span className="text-[10px] uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300">
                {user?.title || "Grandmaster"}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-2 text-xs font-semibold">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-300">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                <span>{user?.gold || 550} Gold</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-950/30 border border-orange-500/30 text-orange-400">
                <Flame className="w-3.5 h-3.5" />
                <span>{user?.streak || 1} Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats */}
        <div className="grid grid-cols-4 gap-2 w-full md:w-auto">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border min-w-[70px] ${s.color}`}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span className="text-[9px] font-bold tracking-wider text-slate-400">
                  {s.label}
                </span>
                <span className="text-sm font-black text-white">{s.val}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar & Level Up Trigger */}
      <div className="mt-6 pt-5 border-t border-slate-800/80">
        <div className="flex justify-between items-center text-xs font-bold mb-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 tracking-wider text-[11px] uppercase">
              Progression to Next Rank
            </span>
            {isReadyToLevelUp && (
              <span className="px-2 py-0.5 text-[10px] font-black uppercase rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                Awakening Ready
              </span>
            )}
          </div>
          <span className="text-cyan-400 font-mono tracking-wide">
            {currentXP} <span className="text-slate-500">/</span> {maxXP} XP (
            {progressPercent}%)
          </span>
        </div>

        <div className="w-full h-3 rounded-full bg-slate-950 border border-slate-800/80 p-0.5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Special 100% Claim Action Bar */}
        {isReadyToLevelUp && (
          <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cyan-950/60 via-indigo-950/40 to-slate-900 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Max threshold surpassed! Awakening protocol active.</span>
            </div>
            <button
              onClick={onTriggerLevelUp}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all"
            >
              Awaken Rank {(user?.level || 4) + 1}{" "}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
