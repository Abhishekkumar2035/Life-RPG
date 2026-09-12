import React from "react";
import QuestCard from "./QuestCard";

export default function QuestList({ quests, onComplete, onDelete }) {
  if (quests.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-slate-800/80 rounded-2xl">
        <p className="text-sm text-slate-500">
          No active bounties in queue. Forge a quest to start leveling.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {quests.map((quest) => (
        <QuestCard
          key={quest._id}
          quest={quest}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
