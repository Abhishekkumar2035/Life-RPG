import React, { useState } from "react";
import { Brain, Swords, Shield, Zap, Trash2, CheckCircle2 } from "lucide-react";
import { sfx } from "../utils/sound";

const STAT_ICONS = {
  strength: Swords,
  intellect: Brain,
  vitality: Shield,
  agility: Zap,
};

const DIFFICULTY_STYLES = {
  Easy: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
  Medium: "border-amber-500/30 text-amber-400 bg-amber-950/20",
  Hard: "border-rose-500/30 text-rose-400 bg-rose-950/20",
};

export default function QuestCard({ quest, onComplete, onDelete }) {
  // Click hote hi instant update ke liye local state
  const [isLocallyClaimed, setIsLocallyClaimed] = useState(false);
  const [floatingText, setFloatingText] = useState(null);

  // Backend property fallbacks check
  const isClaimed =
    isLocallyClaimed ||
    Boolean(quest.completed) ||
    Boolean(quest.isCompleted) ||
    quest.status === "completed";

  const Icon = STAT_ICONS[quest.statCategory?.toLowerCase()] || Brain;

  const handleClaim = () => {
    if (isClaimed) return;

    // 1. Instant color change aur state update
    setIsLocallyClaimed(true);

    // 2. Play 8-bit sound
    try {
      sfx.playClaim();
    } catch (e) {
      console.error(e);
    }

    // 3. Floating XP animation
    setFloatingText(`+${quest.xpReward || 120} XP`);
    setTimeout(() => setFloatingText(null), 1200);

    // 4. Backend API trigger
    onComplete(quest._id);
  };

  return (
    <div
      className={`relative group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
        isClaimed
          ? "bg-slate-950/40 border-slate-900 opacity-60"
          : "bg-slate-900/90 border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
      }`}
    >
      {/* Floating XP Animation */}
      {floatingText && (
        <span className="absolute right-32 -top-2 text-sm font-black text-cyan-400 animate-bounce pointer-events-none drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
          {floatingText}
        </span>
      )}

      {/* Left: Icon & Details */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
            isClaimed
              ? "bg-slate-950 border-slate-800 text-slate-600"
              : "bg-slate-950 border-cyan-500/30 text-cyan-400 shadow-inner group-hover:border-cyan-400"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div>
          <h4
            className={`font-bold text-sm tracking-wide ${
              isClaimed ? "line-through text-slate-500" : "text-white"
            }`}
          >
            {quest.title || quest.name}
          </h4>

          <div className="flex items-center gap-2 mt-1.5 text-xs font-semibold">
            <span
              className={`px-2 py-0.5 rounded-md border text-[10px] uppercase font-bold tracking-wider ${
                DIFFICULTY_STYLES[quest.difficulty] || DIFFICULTY_STYLES.Hard
              }`}
            >
              {quest.difficulty || "Hard"}
            </span>
            <span className="text-cyan-400 font-mono">
              +{quest.xpReward || quest.xp || 120} XP
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400 font-mono">
              +{quest.goldReward || quest.gold || 50} Gold
            </span>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {isClaimed ? (
          /* Claimed Button: Dark slate background, muted border, green text */
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-emerald-500/30 bg-slate-950 text-emerald-400 text-xs font-black uppercase tracking-wider select-none">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Claimed
          </span>
        ) : (
          /* Active Button: Glowing Green / Teal */
          <button
            onClick={handleClaim}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Claim
          </button>
        )}

        <button
          onClick={() => onDelete(quest._id)}
          className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-all cursor-pointer"
          title="Delete Quest"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
