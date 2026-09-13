import React, { useState } from "react";
import { X, Sparkles, Swords, Brain, Shield, Zap, Flame } from "lucide-react";

const STATS = [
  {
    id: "intellect",
    label: "Intellect",
    icon: Brain,
    color:
      "text-cyan-400 border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/20",
  },
  {
    id: "strength",
    label: "Strength",
    icon: Swords,
    color:
      "text-rose-400 border-rose-500/30 hover:border-rose-400 bg-rose-950/20",
  },
  {
    id: "vitality",
    label: "Vitality",
    icon: Shield,
    color:
      "text-emerald-400 border-emerald-500/30 hover:border-emerald-400 bg-emerald-950/20",
  },
  {
    id: "agility",
    label: "Agility",
    icon: Zap,
    color:
      "text-amber-400 border-amber-500/30 hover:border-amber-400 bg-amber-950/20",
  },
];

const DIFFICULTY_CONFIG = {
  Easy: {
    xp: 40,
    gold: 15,
    border: "border-emerald-500/40 text-emerald-400 bg-emerald-950/30",
  },
  Medium: {
    xp: 80,
    gold: 30,
    border: "border-amber-500/40 text-amber-400 bg-amber-950/30",
  },
  Hard: {
    xp: 120,
    gold: 50,
    border: "border-rose-500/40 text-rose-400 bg-rose-950/30",
  },
};

export default function QuestModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [statCategory, setStatCategory] = useState("intellect");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const reward = DIFFICULTY_CONFIG[difficulty];
    onCreate({
      title,
      difficulty,
      statCategory,
      xpReward: reward.xp,
      goldReward: reward.gold,
    });

    setTitle("");
    setDifficulty("Medium");
    setStatCategory("intellect");
    onClose();
  };

  const currentReward = DIFFICULTY_CONFIG[difficulty];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white tracking-wide">
                Forge Bounty Contract
              </h3>
              <p className="text-xs text-slate-400">
                Create a new trial to build real-life attributes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Quest Objective
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Read 20 pages of System Design / 50 Pushups"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-600"
            />
          </div>

          {/* Stat Category Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Attribute Discipline
            </label>
            <div className="grid grid-cols-2 gap-2">
              {STATS.map((s) => {
                const Icon = s.icon;
                const isSelected = statCategory === s.id;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setStatCategory(s.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? `${s.color} ring-1 ring-white/20 scale-[1.02]`
                        : "border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty Rank Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Rank Difficulty
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Easy", "Medium", "Hard"].map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setDifficulty(lvl)}
                  className={`py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    difficulty === lvl
                      ? DIFFICULTY_CONFIG[lvl].border
                      : "border border-slate-800 bg-slate-950 text-slate-500 hover:text-slate-400"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Reward Preview Card */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
            <span className="text-xs font-semibold text-slate-400">
              Bounty Yield:
            </span>
            <div className="flex items-center gap-3 font-mono text-xs font-bold">
              <span className="text-cyan-400">+{currentReward.xp} XP</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400">+{currentReward.gold} Gold</span>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer active:scale-98"
          >
            Inscribe Quest Bounty
          </button>
        </form>
      </div>
    </div>
  );
}
