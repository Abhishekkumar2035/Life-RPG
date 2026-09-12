import React from "react";
import { CheckCircle2, Swords, Brain, Heart, Zap, Trash2 } from "lucide-react";
import confetti from "canvas-confetti";

const categoryIcons = {
  Strength: <Swords className="w-4 h-4 text-rose-400" />,
  Intellect: <Brain className="w-4 h-4 text-cyan-400" />,
  Vitality: <Heart className="w-4 h-4 text-emerald-400" />,
  Agility: <Zap className="w-4 h-4 text-amber-400" />,
};

export default function QuestCard({ quest, onComplete, onDelete }) {
  const triggerCompletion = (e) => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.75 },
      colors: ["#06b6d4", "#6366f1", "#f59e0b"],
    });
    onComplete(quest._id);
  };

  return (
    <div
      className={`border rounded-xl p-4 flex items-center justify-between transition-all ${
        quest.isCompleted
          ? "bg-slate-950/40 border-slate-800/40 opacity-50"
          : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
          {categoryIcons[quest.category]}
        </div>
        <div>
          <h4
            className={`text-sm font-semibold tracking-wide ${quest.isCompleted ? "line-through text-slate-500" : "text-slate-100"}`}
          >
            {quest.title}
          </h4>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
            <span className="font-medium text-slate-400">
              {quest.difficulty}
            </span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">
              +{quest.xpReward} XP
            </span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">
              +{quest.goldReward} Gold
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!quest.isCompleted ? (
          <button
            onClick={triggerCompletion}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> Claim
          </button>
        ) : (
          <span className="text-[11px] font-bold text-emerald-400 px-2 py-1 bg-emerald-950/40 rounded border border-emerald-900/40">
            Claimed
          </span>
        )}
        <button
          onClick={() => onDelete(quest._id)}
          className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
          title="Abandon Quest"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
