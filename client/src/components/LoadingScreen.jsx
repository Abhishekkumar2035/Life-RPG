import React from "react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
          LIFE RPG
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.2s]" />
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.1s]" />
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" />
        </div>

        <p className="text-sm text-slate-400 mt-4">Loading your dashboard...</p>
      </div>
    </div>
  );
}
