import React, { useState } from "react";
import { Plus, ShoppingBag, Flame, Trophy, Award } from "lucide-react";

import Navbar from "./Navbar";
import PlayerCard from "./PlayerCard";
import QuestList from "./QuestList";
import QuestModal from "./QuestModal";
import LevelUpModal from "./LevelUpModal";
import ShopModal from "./ShopModal";
import AwakeningVault from "./AwakeningVault";
import ProfileModal from "./ProfileModal";
import LearnModal from "./LearnModal";
import CLearnPage from "./CLearnPage";
import CppLearnPage from "./CppLearnPage";
import PythonLearnPage from "./PythonLearnPage";
import JavaLearnPage from "./JavaLearnPage";
import LearnLanguagePage from "./LearnLanguagePage";
import CTutorialPage from "../tutorials/CTutorialPage";

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
  const [showVault, setShowVault] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  // Dedicated Views
  const [showLanguagePage, setShowLanguagePage] = useState(false);
  const [showCTutorialPage, setShowCTutorialPage] = useState(false);
  const [showCPage, setShowCPage] = useState(false);
  const [showCppPage, setShowCppPage] = useState(false);
  const [showPythonPage, setShowPythonPage] = useState(false);
  const [showJavaPage, setShowJavaPage] = useState(false);

  const handleVaultRewardClaimed = (updatedUser) => {
    const currentXP = updatedUser?.currentXP || updatedUser?.xp || 0;
    const maxXP = updatedUser?.maxXP || 519;
    const remainderXP = Math.max(0, currentXP - maxXP);

    onUpdateUser({
      ...updatedUser,
      level: (updatedUser?.level || 1) + 1,
      currentXP: remainderXP,
      maxXP: Math.round(maxXP * 1.35),
    });

    setShowVault(false);
  };

  // Coding Tutorial button click handle karega
  const handleSelectLanguage = (langId) => {
    setShowLanguagePage(false);
    if (langId === "c") {
      setShowCTutorialPage(true);
    } else if (langId === "cpp") {
      setShowCppPage(true);
    } else if (langId === "python") {
      setShowPythonPage(true);
    } else if (langId === "java") {
      setShowJavaPage(true);
    }
  };

  // 1. C Simple Tutorial Page (From src/tutorials/)
  if (showCTutorialPage) {
    return (
      <CTutorialPage
        onBack={() => {
          setShowCTutorialPage(false);
          setShowLanguagePage(true);
        }}
      />
    );
  }

  // 2. Language Overview Page
  if (showLanguagePage) {
    return (
      <LearnLanguagePage
        onBack={() => setShowLanguagePage(false)}
        onSelectLanguage={handleSelectLanguage}
      />
    );
  }

  // 3. Problem/Archive Pages
  if (showCPage) {
    return (
      <CLearnPage
        onBack={() => setShowCPage(false)}
        user={user}
        onUpdateUser={onUpdateUser}
      />
    );
  }

  if (showCppPage) {
    return (
      <CppLearnPage
        onBack={() => setShowCppPage(false)}
        user={user}
        onUpdateUser={onUpdateUser}
      />
    );
  }

  if (showPythonPage) {
    return (
      <PythonLearnPage
        onBack={() => setShowPythonPage(false)}
        user={user}
        onUpdateUser={onUpdateUser}
      />
    );
  }

  if (showJavaPage) {
    return (
      <JavaLearnPage
        onBack={() => setShowJavaPage(false)}
        user={user}
        onUpdateUser={onUpdateUser}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#080c14] pb-16">
      {/* Navbar with Problem & Learn Language Handlers */}
      <Navbar
        user={user}
        onLogout={onLogout}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenLearn={() => setIsLearnOpen(true)}
        onOpenLanguagePage={() => setShowLanguagePage(true)}
      />

      <main className="max-w-6xl mx-auto px-4 mt-8 space-y-6">
        <PlayerCard
          user={user}
          onTriggerLevelUp={() => setShowLevelModal(true)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
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
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md">
              <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                <Award className="w-4 h-4 text-cyan-400" /> Active Perks & Buffs
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-orange-500/20 bg-orange-950/20">
                  <div className="flex items-center gap-2 text-orange-400 text-xs font-bold">
                    <Flame className="w-4 h-4" /> Streak Focus (1.1x XP)
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Keep checking in daily to increase your quest reward
                    multiplier.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-500/20 bg-indigo-950/20">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
                    <Trophy className="w-4 h-4" /> Guild Rank: S-Class
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Reach Level 5 to unlock Legendary dungeon contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Profile Details Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={user}
        questCount={
          quests.filter((q) => q.completed || q.status === "completed").length
        }
      />

      {/* Problem Modal */}
      <LearnModal
        isOpen={isLearnOpen}
        onClose={() => setIsLearnOpen(false)}
        onOpenCLearn={() => setShowCPage(true)}
        onOpenCppLearn={() => setShowCppPage(true)}
        onOpenPythonLearn={() => setShowPythonPage(true)}
        onOpenJavaLearn={() => setShowJavaPage(true)}
      />

      <QuestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={onCreateQuest}
      />

      <LevelUpModal
        show={showLevelModal}
        level={user?.level}
        onClose={() => setShowLevelModal(false)}
        onClaimAwakening={() => setShowVault(true)}
      />

      {showVault && (
        <AwakeningVault
          level={user?.level}
          user={user}
          onUpdateUser={handleVaultRewardClaimed}
          onClose={() => setShowVault(false)}
        />
      )}

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
