import React, { useState } from "react";
import {
  Sparkles,
  Trophy,
  Shield,
  Swords,
  Brain,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

const REWARDS_POOL = [
  {
    title: "Shadow Monarch's Crest",
    type: "Legendary Relic",
    desc: "+20% Quest XP Gain permanently",
    glow: "from-purple-500/20 via-indigo-500/10 to-transparent border-purple-500/40 text-purple-400",
  },
  {
    title: "Crown of the Conqueror",
    type: "Mythic Artifact",
    desc: "+50 Bonus Gold on every hard quest completed",
    glow: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40 text-amber-400",
  },
  {
    title: "Aegis Core",
    type: "Ancient Rune",
    desc: "Increases Daily Streak resilience",
    glow: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40 text-cyan-400",
  },
];

export default function AwakeningVault({ level, user, onUpdateUser, onClose }) {
  const [points, setPoints] = useState(5);
  const [allocated, setAllocated] = useState({
    strength: 0,
    intellect: 0,
    vitality: 0,
    agility: 0,
  });

  // Random reward select based on level
  const reward = REWARDS_POOL[(level || 1) % REWARDS_POOL.length];

  const handleAddPoint = (stat) => {
    if (points <= 0) return;
    setPoints(points - 1);
    setAllocated((prev) => ({ ...prev, [stat]: prev[stat] + 1 }));
  };

  const handleClaimAll = () => {
    confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 } });

    // Update player's stats permanently
    const currentStats = user?.stats || {
      strength: 10,
      intellect: 20,
      vitality: 10,
      agility: 10,
    };
    const updatedUser = {
      ...user,
      gold: (user?.gold || 0) + 150, // Awakening gold bonus
      stats: {
        strength: currentStats.strength + allocated.strength,
        intellect: currentStats.intellect + allocated.intellect,
        vitality: currentStats.vitality + allocated.vitality,
        agility: currentStats.agility + allocated.agility,
      },
    };

    onUpdateUser(updatedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl w-full bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.25)] space-y-6">
        {/* Top Header Badge */}
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />{" "}
            Awakening Vault Unlocked
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-300 tracking-wide">
            TREASURY OF THE AWAKENED
          </h2>
          <p className="text-xs text-slate-400">
            For reaching{" "}
            <span className="text-cyan-400 font-bold">Level {level}</span>, the
            Hunter Guild grants you ancient relics & attribute points.
          </p>
        </div>

        {/* Section 1: Special Relic Award */}
        <div
          className={`p-5 rounded-2xl border bg-gradient-to-r ${reward.glow} relative overflow-hidden`}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-white/10">
                {reward.type}
              </span>
              <h3 className="text-lg font-black text-white mt-1.5 tracking-wide flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" /> {reward.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">{reward.desc}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-amber-400 font-bold block">
                +150 Bonus Gold
              </span>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-md mt-1 inline-block">
                Auto-Equipped
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Stat Points Allocator (+5 Points) */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-300">
                Allocate Awakening Points
              </h4>
              <p className="text-[11px] text-slate-500">
                Distribute your 5 power shards to upgrade core stats
              </p>
            </div>
            <span className="px-3 py-1 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-black">
              {points} Points Left
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                id: "strength",
                label: "Strength",
                icon: Swords,
                color: "text-rose-400 border-rose-500/20",
              },
              {
                id: "intellect",
                label: "Intellect",
                icon: Brain,
                color: "text-cyan-400 border-cyan-500/20",
              },
              {
                id: "vitality",
                label: "Vitality",
                icon: Shield,
                color: "text-emerald-400 border-emerald-500/20",
              },
              {
                id: "agility",
                label: "Agility",
                icon: Zap,
                color: "text-amber-400 border-amber-500/20",
              },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`p-3 rounded-xl border bg-slate-900 flex flex-col items-center justify-between gap-2 ${stat.color}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    {stat.label}
                  </span>
                  <span className="text-sm font-black text-white font-mono">
                    + {allocated[stat.id]}
                  </span>
                  <button
                    onClick={() => handleAddPoint(stat.id)}
                    disabled={points <= 0}
                    className={`w-full py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      points > 0
                        ? "bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white"
                        : "bg-slate-950 text-slate-600 cursor-not-allowed"
                    }`}
                  >
                    +1
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Claim & Finalize Button */}
        <button
          onClick={handleClaimAll}
          className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2 cursor-pointer"
        >
          Confirm Attributes & Enter Sanctuary{" "}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
