import React from "react";
import { Award, Flame, Swords, Brain, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function PlayerCard({ user }) {
  const maxXP = Math.floor(100 * Math.pow(user.level, 1.5));
  const progressPercent = Math.min((user.currentXP / maxXP) * 100, 100);

  const statIcons = {
    strength: <Swords className="w-3.5 h-3.5 text-rose-400" />,
    intellect: <Brain className="w-3.5 h-3.5 text-cyan-400" />,
    vitality: <Heart className="w-3.5 h-3.5 text-emerald-400" />,
    agility: <Zap className="w-3.5 h-3.5 text-amber-400" />,
  };

  return (
    <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-10 w-48 h-48 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-2xl text-slate-950 shadow-lg shadow-cyan-500/20">
              {user.username?.[0]?.toUpperCase()}
            </div>
            <span className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2 py-0.5 rounded-full border border-slate-900 shadow-sm">
              LVL {user.level}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              {user.username}
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-800/40 uppercase">
                {user.equippedTitle || "HUNTER"}
              </span>
            </h2>
            <div className="flex items-center gap-3 mt-1 text-xs">
              <span className="flex items-center gap-1 text-amber-400 font-bold bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/40">
                <Award className="w-3.5 h-3.5" /> {user.gold} Gold
              </span>
              <span className="flex items-center gap-1 text-orange-400 font-bold bg-orange-950/30 px-2 py-0.5 rounded border border-orange-800/40">
                <Flame className="w-3.5 h-3.5" /> {user.streak} Days
              </span>
            </div>
          </div>
        </div>

        {/* Attribute Mastery Badges */}
        <div className="grid grid-cols-4 gap-2.5 w-full md:w-auto">
          {Object.entries(user.stats || {}).map(([stat, val]) => (
            <div
              key={stat}
              className="bg-slate-950/70 border border-slate-800 px-3 py-2 rounded-xl text-center flex flex-col items-center justify-center min-w-[65px]"
            >
              <div className="mb-0.5">{statIcons[stat]}</div>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                {stat}
              </span>
              <span className="text-xs font-extrabold text-slate-200">
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Non-linear XP Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-[11px] font-bold tracking-wider mb-1.5 text-slate-400">
          <span>PROGRESSION TO NEXT RANK</span>
          <span className="text-cyan-400">
            {user.currentXP} / {maxXP} XP
          </span>
        </div>
        <div className="h-3.5 w-full bg-slate-950 rounded-full p-0.5 border border-slate-800/80 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
