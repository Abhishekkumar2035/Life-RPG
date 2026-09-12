import React, { useState } from "react";
import axios from "axios";

export default function AuthCard({ apiBase, onAuthSuccess }) {
  const [authMode, setAuthMode] = useState("login"); // login | register
  const [authForm, setAuthForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const endpoint = authMode === "login" ? "/auth/login" : "/auth/register";

    try {
      const res = await axios.post(`${apiBase}${endpoint}`, authForm);
      onAuthSuccess(res.data.token, res.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
          LIFE RPG
        </h2>
        <p className="text-xs text-center text-slate-400 mt-1 mb-6">
          Enter the portal to track your progression
        </p>

        {error && (
          <div className="p-3 mb-4 text-xs font-semibold bg-rose-950/50 border border-rose-800 text-rose-300 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
              Password
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
            {authMode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => {
              setAuthMode(authMode === "login" ? "register" : "login");
              setError("");
            }}
            className="text-xs text-cyan-400 hover:underline cursor-pointer"
          >
            {authMode === "login"
              ? "Don't have an account? Sign up"
              : "Already registered? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
