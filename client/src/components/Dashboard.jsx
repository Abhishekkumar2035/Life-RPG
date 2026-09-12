import React, { useState } from "react";
import { Plus, ShoppingBag } from "lucide-react";

import Navbar from "./Navbar";
import PlayerCard from "./PlayerCard";
import QuestList from "./QuestList";
import QuestModal from "./QuestModal";
import LevelUpModal from "./LevelUpModal";
import ShopModal from "./ShopModal";

export default function Dashboard({
  user,
  token,
  quests,
  showLevelModal,
  setShowLevelModal,
  onLogout,
  onCreateQuest,
  onCompleteQuest,
  onDeleteQuest,
  onUpdateUser,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] pb-16">
      <Navbar user={user} onLogout={onLogout} />

      <main className="max-w-4xl mx-auto px-4 mt-8 space-y-6">
        <PlayerCard user={user} />

        <div className="flex items-center justify-between pt-4">
          <h3 className="text-lg font-bold text-white tracking-wide">
            Active Quests
          </h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsShopOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 border border-slate-700 hover:border-amber-500 text-amber-400 text-xs font-bold rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" /> Armory
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 text-xs font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Forge Quest
            </button>
          </div>
        </div>

        <QuestList
          quests={quests}
          onComplete={onCompleteQuest}
          onDelete={onDeleteQuest}
        />
      </main>

      <QuestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={onCreateQuest}
      />

      <LevelUpModal
        show={showLevelModal}
        level={user?.level}
        onClose={() => setShowLevelModal(false)}
      />

      <ShopModal
        isOpen={isShopOpen}
        onClose={() => setIsShopOpen(false)}
        user={user}
        onUpdateUser={onUpdateUser}
        token={token}
      />
    </div>
  );
}
