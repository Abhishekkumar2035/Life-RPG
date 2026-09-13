import React, { useState } from "react";
import {
  Swords,
  LogOut,
  ShieldAlert,
  Radio,
  User,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function Navbar({
  user,
  onLogout,
  onOpenProfile,
  onOpenLearn,
  onOpenLanguagePage,
}) {
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400/30">
            <Swords className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                LIFE RPG
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-tight hidden sm:block">
              SYSTEM v2.4 • PROTOCOL ACTIVE
            </p>
          </div>
        </div>

        {/* Center: System Status */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>REALM: SHADOW SANCTUARY</span>
        </div>

        {/* Right Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* User Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group shadow-sm"
            title="View Hunter Dossier"
          >
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold font-mono group-hover:scale-105 transition-transform">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-200 font-mono group-hover:text-cyan-300 transition-colors">
              {user?.username || "admin"}
            </span>
          </button>

          {/* Problem / Archive Button */}
          <button
            onClick={onOpenLearn}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/50 hover:bg-indigo-900/50 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Problem</span>
          </button>

          {/* NEW: Learn Language Button */}
          <button
            onClick={onOpenLanguagePage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950 to-slate-900 hover:bg-cyan-900/40 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]"
          >
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="whitespace-nowrap">Learn Language</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={() => setShowConfirmLogout(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-rose-500/50 hover:bg-rose-950/20 text-slate-400 hover:text-rose-400 text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">LogOut</span>
          </button>
        </div>
      </div>

      {/* Logout Confirmation Prompt */}
      {showConfirmLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-xs w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                Sever Hunter Link?
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your current quest session will be securely stored in the system
                vault.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setShowConfirmLogout(false)}
                className="py-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800/80 rounded-xl transition-all cursor-pointer"
              >
                Stay
              </button>
              <button
                onClick={() => {
                  setShowConfirmLogout(false);
                  onLogout();
                }}
                className="py-2 text-xs font-black text-slate-950 bg-rose-500 hover:bg-rose-400 rounded-xl transition-all shadow-md shadow-rose-500/30 cursor-pointer uppercase tracking-wider"
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
