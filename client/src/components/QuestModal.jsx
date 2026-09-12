import React, { useState } from "react";
import { PlusCircle, X } from "lucide-react";

export default function QuestModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Intellect");
  const [difficulty, setDifficulty] = useState("Medium");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title, category, difficulty });
    setTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-cyan-400" /> Forge New Quest
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              Quest Title
            </label>
            <input
              type="text"
              placeholder="e.g., Complete 3 LeetCode Problems"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Intellect">Intellect</option>
                <option value="Strength">Strength</option>
                <option value="Vitality">Vitality</option>
                <option value="Agility">Agility</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Easy">Easy (25 XP)</option>
                <option value="Medium">Medium (55 XP)</option>
                <option value="Hard">Hard (120 XP)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 mt-2 cursor-pointer"
          >
            Deploy Quest
          </button>
        </form>
      </div>
    </div>
  );
}
