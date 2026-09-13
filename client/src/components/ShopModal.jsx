import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Sparkles,
  Coins,
} from "lucide-react";
import axios from "axios";

const ARMORY_ITEMS = [
  {
    id: "potion_xp",
    name: "Elixir of Mastery",
    desc: "+15% XP boost for the next 3 completed quests.",
    cost: 150,
    icon: Zap,
    tag: "Consumable",
    color: "from-cyan-500/20 to-indigo-500/20 text-cyan-400",
  },
  {
    id: "streak_shield",
    name: "Aegis Streak Shield",
    desc: "Prevents daily streak reset if you miss 1 day.",
    cost: 300,
    icon: ShieldCheck,
    tag: "Protection",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
  },
  {
    id: "title_shadow",
    name: "Title: Shadow Monarch",
    desc: "Cosmetic rank badge displayed on your player profile.",
    cost: 500,
    icon: Sparkles,
    tag: "Cosmetic",
    color: "from-amber-500/20 to-rose-500/20 text-amber-400",
  },
];

export default function ShopModal({
  isOpen,
  onClose,
  user,
  onUpdateUser,
  token,
}) {
  const [loadingId, setLoadingId] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  if (!isOpen) return null;

  const handleBuy = async (item) => {
    if ((user?.gold || 0) < item.cost) {
      setStatusMsg("Not enough Gold in your treasury!");
      setTimeout(() => setStatusMsg(""), 2000);
      return;
    }

    setLoadingId(item.id);
    try {
      // Deduct local gold instantly for UI responsiveness
      const updatedUser = {
        ...user,
        gold: user.gold - item.cost,
        title: item.id === "title_shadow" ? "Shadow Monarch" : user.title,
      };
      onUpdateUser(updatedUser);
      setStatusMsg(`Acquired ${item.name}!`);
      setTimeout(() => setStatusMsg(""), 2500);
    } catch (err) {
      setStatusMsg("Transaction rejected by armory.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white tracking-wide">
                Hunter Armory
              </h3>
              <p className="text-xs text-slate-400">
                Exchange quest bounties for gear and buffs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              {user?.gold || 0}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {statusMsg && (
          <div className="text-xs font-semibold text-center py-2 px-3 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 animate-pulse">
            {statusMsg}
          </div>
        )}

        {/* Item Cards */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {ARMORY_ITEMS.map((item) => {
            const Icon = item.icon;
            const canAfford = (user?.gold || 0) >= item.cost;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-800/80 bg-slate-950/50 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br border border-white/5 ${item.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white tracking-wide">
                        {item.name}
                      </h4>
                      <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 max-w-[220px] sm:max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleBuy(item)}
                  disabled={!canAfford || loadingId === item.id}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-mono transition-all cursor-pointer ${
                    canAfford
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20 active:scale-95"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  {item.cost} G
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
