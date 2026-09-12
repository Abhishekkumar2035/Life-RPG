import React from "react";
import { Swords, LogOut } from "lucide-react";

export default function Navbar({ user, onLogout }) {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl text-slate-950 shadow-lg shadow-cyan-500/20">
            <Swords className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 text-lg">
            LIFE RPG
          </span>
        </div>

        {user && (
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-rose-500/10 hover:text-rose-400 hover:border-rose-500/30 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> LogOut
          </button>
        )}
      </div>
    </header>
  );
}
