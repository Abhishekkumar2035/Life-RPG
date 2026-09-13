import React, { useState } from "react";
import {
  X,
  BookOpen,
  Code2,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Play,
} from "lucide-react";

const LANGUAGES_DATA = {
  c: {
    name: "C Language",
    tagline: "The Mother of Modern Programming",
    level: "Foundation Tier",
    badgeColor: "bg-blue-950/50 text-blue-400 border-blue-500/30",
    overview:
      "C is a procedural language giving direct memory access via pointers. Ideal for OS development, embedded devices, and core systems.",
    syntaxSnippet: `#include <stdio.h>

int main() {
    // Basic Hunter Output
    printf("Awaken Hunter!\\n");
    return 0;
}`,
    topics: [
      {
        title: "Pointers & Memory",
        desc: "Understanding memory addresses (&) and dereferencing (*).",
      },
      {
        title: "Structures (struct)",
        desc: "Grouping different data types under one custom blueprint.",
      },
      {
        title: "Dynamic Memory",
        desc: "Using malloc(), calloc(), and free() for heap management.",
      },
    ],
  },
  cpp: {
    name: "C++",
    tagline: "High Performance & Object-Oriented Power",
    level: "Elite System Tier",
    badgeColor: "bg-indigo-950/50 text-indigo-400 border-indigo-500/30",
    overview:
      "An extension of C with OOP, templates, and the Standard Template Library (STL). Dominates game engines and competitive programming.",
    syntaxSnippet: `#include <iostream>
using namespace std;

int main() {
    cout << "Ready for combat!" << endl;
    return 0;
}`,
    topics: [
      {
        title: "OOP Core",
        desc: "Classes, Objects, Inheritance, and Polymorphism.",
      },
      {
        title: "STL Library",
        desc: "Vectors, Maps, Sets, and Algorithms for rapid problem solving.",
      },
      {
        title: "Pointers & Smart Pointers",
        desc: "std::unique_ptr and std::shared_ptr for safe memory.",
      },
    ],
  },
  python: {
    name: "Python",
    tagline: "Rapid Scripting & Machine Learning Sorcery",
    level: "Arcane Tier",
    badgeColor: "bg-amber-950/50 text-amber-400 border-amber-500/30",
    overview:
      "High-level, interpreted language focused on code readability. The undisputed king of AI, automation, web scrapers, and data analysis.",
    syntaxSnippet: `# Python Spell Inscription
def awaken():
    rank = "S-Rank"
    print(f"Hunter awakened with rank: {rank}")

awaken()`,
    topics: [
      {
        title: "List Comprehensions",
        desc: "Writing concise, high-speed list iterations in one line.",
      },
      {
        title: "Decorators & Generators",
        desc: "Enhancing functions and streaming big datasets seamlessly.",
      },
      {
        title: "AsyncIO",
        desc: "Handling high-concurrency tasks without thread blocking.",
      },
    ],
  },
  java: {
    name: "Java",
    tagline: "Enterprise Grade & Platform Independence",
    level: "Guardian Tier",
    badgeColor: "bg-orange-950/50 text-orange-400 border-orange-500/30",
    overview:
      "Write Once, Run Anywhere. Strongly typed OOP language driving massive enterprise backends and Android foundations.",
    syntaxSnippet: `public class Main {
    public static void main(String[] args) {
        System.out.println("System Initialized!");
    }
}`,
    topics: [
      {
        title: "JVM Architecture",
        desc: "Understanding Bytecode, ClassLoaders, and Garbage Collection.",
      },
      {
        title: "Streams & Lambda",
        desc: "Functional pipeline processing for Collections introduced in Java 8.",
      },
      {
        title: "Multithreading",
        desc: "Thread lifecycles, Synchronization, and ExecutorService.",
      },
    ],
  },
};

export default function LearnModal({
  isOpen,
  onClose,
  onOpenCLearn,
  onOpenCppLearn,
  onOpenPythonLearn,
  onOpenJavaLearn,
}) {
  const [selectedLang, setSelectedLang] = useState("c");

  if (!isOpen) return null;

  const current = LANGUAGES_DATA[selectedLang];

  const handleLanguageLearn = (key) => {
    onClose();
    if (key === "c" && onOpenCLearn) onOpenCLearn();
    else if (key === "cpp" && onOpenCppLearn) onOpenCppLearn();
    else if (key === "python" && onOpenPythonLearn) onOpenPythonLearn();
    else if (key === "java" && onOpenJavaLearn) onOpenJavaLearn();
    else setSelectedLang(key);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      {/* Background Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-black text-white tracking-wide">
                HUNTER ACADEMY & ARCHIVES
              </h3>
              <p className="text-xs text-slate-400">
                Master programming languages to unlock high-tier real-world
                knowledge
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

        {/* 4 Language Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(LANGUAGES_DATA).map(([key, lang]) => {
            const isSelected = selectedLang === key;

            return (
              <div
                key={key}
                onClick={() => setSelectedLang(key)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-slate-950 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/30"
                    : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-white font-mono tracking-wide">
                      {lang.name}
                    </span>
                    <Code2
                      className={`w-4 h-4 ${
                        isSelected ? "text-cyan-400" : "text-slate-600"
                      }`}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 font-mono">
                    {lang.level}
                  </p>
                </div>

                {/* Learn Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLanguageLearn(key);
                  }}
                  className="w-full py-1.5 px-3 rounded-xl text-xs font-bold font-mono tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-black shadow-md shadow-cyan-500/25 hover:opacity-90 active:scale-95"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Learn (50 Quests)</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Selected Language Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left: Overview & Key Topics */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${current.badgeColor}`}
                >
                  {current.level}
                </span>
                <h4 className="text-lg font-black text-white">
                  {current.name}
                </h4>
              </div>
              <p className="text-xs font-semibold text-slate-300">
                {current.tagline}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {current.overview}
              </p>
            </div>

            {/* Core Mastery Concepts */}
            <div className="space-y-2">
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-400">
                Core Mastery Concepts
              </h5>
              {current.topics.map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h6 className="text-xs font-bold text-slate-200">
                      {t.title}
                    </h6>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code Terminal */}
          <div className="flex flex-col rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-cyan-300 font-bold">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                {selectedLang}_starter.code
              </span>
              <span className="text-[10px] uppercase text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Read-Only
              </span>
            </div>

            <pre className="p-4 text-xs font-mono text-emerald-300/90 leading-relaxed overflow-x-auto flex-1 selection:bg-cyan-500/30">
              <code>{current.syntaxSnippet}</code>
            </pre>

            <div className="p-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                Study this syntax to complete daily intellect quests.
              </span>
              <button
                type="button"
                onClick={() => handleLanguageLearn(selectedLang)}
                className="group flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 text-xs font-bold font-mono transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.15)] active:scale-95"
              >
                <span>Active</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
