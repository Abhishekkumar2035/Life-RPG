import React, { useState, useEffect } from "react";
import axios from "axios";
import confetti from "canvas-confetti";

import AuthCard from "./components/AuthCard";
import LoadingScreen from "./components/LoadingScreen";
import Dashboard from "./components/Dashboard";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://life-rpg-backend-zuxd.onrender.com/api";

export default function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(
    Boolean(localStorage.getItem("token")),
  );
  const [quests, setQuests] = useState([]);
  const [showLevelModal, setShowLevelModal] = useState(false);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("token");
      setUser(null);
      setIsAuthLoading(false);
      return;
    }

    const loadSession = async () => {
      setIsAuthLoading(true);
      localStorage.setItem("token", token);

      try {
        const res = await axios.get(`${API_BASE}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        fetchQuests(token);
      } catch (err) {
        handleLogout();
      } finally {
        setIsAuthLoading(false);
      }
    };

    loadSession();
  }, [token]);

  const fetchQuests = async (currentToken = token) => {
    try {
      const res = await axios.get(`${API_BASE}/tasks`, {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      setQuests(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAuthSuccess = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  const handleCreateQuest = async (questData) => {
    try {
      const res = await axios.post(`${API_BASE}/tasks`, questData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuests((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCompleteQuest = async (id) => {
    try {
      const res = await axios.patch(
        `${API_BASE}/tasks/${id}/complete`,
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setQuests((prev) => prev.map((q) => (q._id === id ? res.data.task : q)));

      const updatedUser = res.data.user;
      setUser(updatedUser);

      // Backend flag ya 100% XP cross hone par modal trigger
      const currentXP = updatedUser?.currentXP || updatedUser?.xp || 0;
      const maxXP = updatedUser?.maxXP || 519;
      const hasReachedLevelUp =
        Boolean(res.data.leveledUp) || currentXP >= maxXP;

      if (hasReachedLevelUp) {
        setShowLevelModal(true);
        confetti({ particleCount: 160, spread: 100, origin: { y: 0.6 } });
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
      setQuests((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (isAuthLoading) {
    return <LoadingScreen />;
  }

  if (!token || !user) {
    return <AuthCard apiBase={API_BASE} onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <Dashboard
      user={user}
      token={token}
      quests={quests}
      showLevelModal={showLevelModal}
      setShowLevelModal={setShowLevelModal}
      onLogout={handleLogout}
      onCreateQuest={handleCreateQuest}
      onCompleteQuest={handleCompleteQuest}
      onDeleteQuest={handleDeleteQuest}
      onUpdateUser={(updated) => setUser(updated)}
    />
  );
}
