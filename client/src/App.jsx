import React, { useState, useEffect } from "react";
import axios from "axios";
import confetti from "canvas-confetti";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";
import QuestModal from "./components/QuestModal";
import LevelUpModal from "./components/LevelUpModal";
import ShopModal from "./components/ShopModal";
import { Plus, ShoppingBag } from "lucide-react";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://life-rpg-backend-zuxd.onrender.com/api";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [quests, setQuests] = useState([]);
  const [authMode, setAuthMode] = useState("login"); // login | register
  const [authForm, setAuthForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [error, setError] = useState("");

  // Persist Token Handling
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      fetchUserData();
      fetchQuests();
    } else {
      localStorage.removeItem("token");
      setUser(null);
    }
  }, [token]);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${API_BASE}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      handleLogout();
    }
  };

  const fetchQuests = async () => {
    try {
      const res = await axios.get(`${API_BASE}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuests(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const endpoint = authMode === "login" ? "/auth/login" : "/auth/register";
    try {
      const res = await axios.post(`${API_BASE}${endpoint}`, authForm);
      setToken(res.data.token);
      setUser(res.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    }
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
  };

  const handleCreateQuest = async (questData) => {
    try {
      const res = await axios.post(`${API_BASE}/tasks`, questData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuests([res.data, ...quests]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCompleteQuest = async (id) => {
    try {
      const res = await axios.patch(
        `${API_BASE}/tasks/${id}/complete`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      // Update state locally
      setQuests(quests.map((q) => (q._id === id ? res.data.task : q)));
      setUser(res.data.user);

      if (res.data.leveledUp) {
        setShowLevelModal(true);
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteQuest = async (id) => {
    try {
      await axios.delete(`${API_BASE}/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuests(quests.filter((q) => q._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!token || !user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            LIFE RPG TERMINAL
          </h2>
          <p className="text-xs text-center text-slate-400 mt-1 mb-6">
            Enter the portal to track your progression
          </p>

          {error && (
            <div className="p-3 mb-4 text-xs font-semibold bg-rose-950/50 border border-rose-800 text-rose-300 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {authMode === "register" && (
              <div>
                <label className="text-xs font-semibold text-slate-400">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={authForm.username}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, username: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            )}
            <div>
              <label className="text-xs font-semibold text-slate-400">
                Email Address
              </label>
              <input
                type="email"
                required
                value={authForm.email}
                onChange={(e) =>
                  setAuthForm({ ...authForm, email: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400">
                Passcode
              </label>
              <input
                type="password"
                required
                value={authForm.password}
                onChange={(e) =>
                  setAuthForm({ ...authForm, password: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              {authMode === "login"
                ? "Initialize Session"
                : "Register Operator"}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => {
                setAuthMode(authMode === "login" ? "register" : "login");
                setError("");
              }}
              className="text-xs text-cyan-400 hover:underline"
            >
              {authMode === "login"
                ? "Don't have an operator? Sign up"
                : "Already registered? Login"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080c14] pb-16">
      <Navbar user={user} onLogout={handleLogout} />

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

        <div className="space-y-3">
          {quests.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-800/80 rounded-2xl">
              <p className="text-sm text-slate-500">
                No active bounties in queue. Forge a quest to start leveling.
              </p>
            </div>
          ) : (
            quests.map((quest) => (
              <QuestCard
                key={quest._id}
                quest={quest}
                onComplete={handleCompleteQuest}
                onDelete={handleDeleteQuest}
              />
            ))
          )}
        </div>
      </main>

      <QuestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateQuest}
      />

      <LevelUpModal
        show={showLevelModal}
        level={user.level}
        onClose={() => setShowLevelModal(false)}
      />

      <ShopModal
        isOpen={isShopOpen}
        onClose={() => setIsShopOpen(false)}
        user={user}
        onUpdateUser={(updated) => setUser(updated)}
        token={token}
      />
    </div>
  );
}
