import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingBag, X, Award, Check, Sparkles } from "lucide-react";

const API_BASE = "http://localhost:5000/api";

export default function ShopModal({
  isOpen,
  onClose,
  user,
  onUpdateUser,
  token,
}) {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      axios
        .get(`${API_BASE}/auth/shop`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setCatalog(res.data))
        .catch((err) => console.error(err));
    }
  }, [isOpen, token]);

  if (!isOpen) return null;

  const handleAction = async (itemId) => {
    setLoading(true);
    setMsg("");
    try {
      const res = await axios.post(
        `${API_BASE}/auth/shop/buy`,
        { itemId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      onUpdateUser(res.data.user);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between mb-4 pr-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" /> Armory Market
          </h3>
          <span className="flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-800/40">
            <Award className="w-4 h-4" /> {user.gold} Gold Available
          </span>
        </div>

        {msg && (
          <div className="mb-4 text-xs font-semibold px-3 py-2 rounded-lg bg-cyan-950/40 border border-cyan-800 text-cyan-300">
            {msg}
          </div>
        )}

        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {catalog.map((item) => {
            const isOwned = user.inventory?.includes(item.name);
            const isEquipped = user.equippedTitle === item.name;

            return (
              <div
                key={item.id}
                className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">
                      {item.name}
                    </span>
                    {isEquipped && (
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.2 rounded-full font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.description}
                  </p>
                  <span className="text-xs font-bold text-amber-400 mt-1 inline-block">
                    {item.cost} Gold
                  </span>
                </div>

                <button
                  disabled={loading || isEquipped}
                  onClick={() => handleAction(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    isEquipped
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                      : isOwned
                        ? "bg-cyan-600 hover:bg-cyan-500 text-slate-950"
                        : user.gold >= item.cost
                          ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  {isEquipped ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Equipped
                    </>
                  ) : isOwned ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5" /> Equip
                    </>
                  ) : (
                    `Unlock`
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
