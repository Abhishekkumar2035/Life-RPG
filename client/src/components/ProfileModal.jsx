import React from "react";
import {
  X,
  Shield,
  Swords,
  Brain,
  Zap,
  Coins,
  Flame,
  Mail,
  Calendar,
  Award,
  Sparkles,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export default function ProfileModal({
  isOpen,
  onClose,
  user,
  questCount = 0,
}) {
  if (!isOpen) return null;

  const currentXP = user?.currentXP || user?.xp || 45;
  const maxXP = user?.maxXP || 701;
  const progressPercent = Math.min(100, Math.round((currentXP / maxXP) * 100));

  const stats = [
    {
      label: "Strength",
      val: user?.stats?.strength || 15,
      icon: Swords,
      color: "text-rose-400 bg-rose-950/20 border-rose-500/20",
    },
    {
      label: "Intellect",
      val: user?.stats?.intellect || 51,
      icon: Brain,
      color: "text-cyan-400 bg-cyan-950/20 border-cyan-500/20",
    },
    {
      label: "Vitality",
      val: user?.stats?.vitality || 10,
      icon: Shield,
      color: "text-emerald-400 bg-emerald-950/20 border-emerald-500/20",
    },
    {
      label: "Agility",
      val: user?.stats?.agility || 10,
      icon: Zap,
      color: "text-amber-400 bg-amber-950/20 border-amber-500/20",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Background Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-black text-white tracking-wide">
                HUNTER DOSSIER & IDENTITY
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                REGISTRY ID: #L-RPG-
                {(user?._id || "98421").slice(-6).toUpperCase()}
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

        {/* Hero Identity Banner */}
        <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-gradient-to-r from-slate-950/80 via-slate-900 to-indigo-950/30 border border-slate-800">
          <div className="relative">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-2xl object-cover ring-2 ring-cyan-400/40 shadow-xl shadow-cyan-500/20"
              />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-4xl font-black text-white shadow-xl shadow-cyan-500/30 ring-2 ring-cyan-400/40">
                {user?.username?.charAt(0).toUpperCase() || "A"}
              </div>
            )}
            <span className="absolute -bottom-2 -right-1 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 rounded-md shadow-md ring-2 ring-slate-900">
              LVL {user?.level || 5}
            </span>
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-black text-white tracking-wide">
                {user?.username || "Abc"}
              </h2>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 text-cyan-300">
                {user?.title || "Grandmaster"}
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                S-Rank
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {user?.email || "hunter@liferpg.io"}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Joined{" "}
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Season 1"}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                {user?.gold || 700} Gold Coins
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-950/30 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold">
                <Flame className="w-3.5 h-3.5" />
                {user?.streak || 1} Day Streak Active
              </div>
            </div>
          </div>
        </div>

        {/* Progression Status Bar */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400 uppercase tracking-wider text-[10px]">
              Awakening Progress to Next Level
            </span>
            <span className="text-cyan-400 font-mono">
              {currentXP} / {maxXP} XP ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-900 border border-slate-800 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Core Attributes Panel */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Core Attributes & Masteries
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1 ${s.color}`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {s.label}
                  </span>
                  <span className="text-lg font-black text-white font-mono">
                    {s.val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hunter Record & Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 text-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Completed Bounties
            </span>
            <span className="text-base font-black text-white font-mono">
              {questCount || 3} Quests
            </span>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 text-center">
            <Trophy className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Tier Milestone
            </span>
            <span className="text-base font-black text-white font-mono">
              Rank {user?.level || 5} Hunter
            </span>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 text-center">
            <Shield className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Sanctuary Status
            </span>
            <span className="text-base font-black text-emerald-400 font-mono">
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
