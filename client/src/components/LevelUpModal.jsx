import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Zap } from "lucide-react";

export default function LevelUpModal({ show, level, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/50 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-4 text-amber-400">
              <Zap className="w-10 h-10 fill-amber-400" />
            </div>

            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
              Limit Break Achieved
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              LEVEL {level} UNLOCKED!
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              All stats escalated. Bonus gold credit minted directly to your
              armory cache.
            </p>

            <button
              onClick={onClose}
              className="mt-6 w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              CLAIM REWARDS
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
