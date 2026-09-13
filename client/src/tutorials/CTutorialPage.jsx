import React, { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Terminal,
  Copy,
  Check,
  ChevronRight,
  Code2,
  FileText,
  Hash,
  Layers,
  RefreshCw,
  Lock,
  SlidersHorizontal,
  Calculator,
  Equal,
  GitCompare,
  CheckCheck,
  ListOrdered,
  Award,
} from "lucide-react";

export const C_TOPICS = [
  {
    id: "c-home",
    title: "C Home",
    icon: FileText,
    heading: "C Programming Sanctuary",
    summary:
      "Welcome to the C language tutorial. C is the bedrock of modern computing and system programming.",
    content: [
      {
        subheading: "What is C?",
        text: "C is a general-purpose, procedural computer programming language developed in 1972 by Dennis M. Ritchie at Bell Telephone Laboratories. It is one of the most widely used programming languages of all time.",
      },
      {
        subheading: "Why Master C?",
        text: "It helps you understand the internal architecture of computers, how memory is addressed via pointers, and how operating systems interact directly with hardware.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    printf("Welcome Hunter to C Home Realm!\\n");
    return 0;
}`,
  },
  {
    id: "c-intro",
    title: "C Intro",
    icon: BookOpen,
    heading: "C Introduction & Origins",
    summary:
      "Understand the core origins, speed benefits, and real-world system applications of C.",
    content: [
      {
        subheading: "Historical Context",
        text: "C was created to develop the UNIX operating system. It was designed as a minimalist language to implement system software while retaining direct hardware access.",
      },
      {
        subheading: "Where is C used today?",
        text: "Major Operating Systems (Linux Kernel, Windows, macOS core), Embedded microcontrollers, Game engines, and high-frequency trading engines prioritize C for its raw execution speed.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    printf("C is fast, direct, and powers modern operating systems.\\n");
    return 0;
}`,
  },
  {
    id: "c-syntax",
    title: "C Syntax",
    icon: Code2,
    heading: "C Syntax & Code Structure",
    summary:
      "Every C program follows a precise blueprint consisting of preprocessor directives, functions, and statements.",
    content: [
      {
        subheading: "Breakdown of Main Elements",
        text: "Line 1: #include <stdio.h> is a preprocessor command that includes standard input/output header file. Line 2: int main() is the main execution gate where the operating system starts execution. Every statement inside a block terminates with a semicolon (;).",
      },
      {
        subheading: "Return Code",
        text: "return 0; indicates standard, error-free termination of the running process.",
      },
    ],
    example: `#include <stdio.h> // Header file library

int main() {        // Main function execution entry
    // Code block inside curly braces
    printf("Syntax structure verified!\\n");
    return 0;       // Exit status code
}`,
  },
  {
    id: "c-output",
    title: "C Output",
    icon: Terminal,
    heading: "C Output (printf & Escape Sequences)",
    summary:
      "Outputting values, formatted strings, and control characters to the standard console.",
    content: [
      {
        subheading: "The printf() Function",
        text: "printf() sends formatted text to the screen. It can accept format specifiers to embed runtime variables directly into strings.",
      },
      {
        subheading: "Escape Sequences",
        text: '\\n inserts a newline, \\t inserts a tab indentation, \\\\ prints a backslash, and \\" prints double quotation marks inside a string literal.',
      },
    ],
    example: `#include <stdio.h>

int main() {
    printf("First Line\\n");
    printf("Second Line with a Tab:\\tIndented!\\n");
    printf("Displaying quotes: \\"Hunter Protocol Active\\"\\n");
    return 0;
}`,
  },
  {
    id: "c-comment",
    title: "C Comments",
    icon: Hash,
    heading: "C Comments (Single & Multi-line)",
    summary:
      "Document your logic without affecting compiler execution or generating binary instructions.",
    content: [
      {
        subheading: "Single-line Comments",
        text: "Created using two forward slashes (//). Any text between // and the end of that specific line is completely ignored by the compiler.",
      },
      {
        subheading: "Multi-line Block Comments",
        text: "Starts with /* and ends with */. Ideal for documenting complex modules or temporarily disabling large blocks of trial code.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Comments do not run in compilation!\\n");

    /* 
       This is a multi-line comment.
       None of these lines are executed.
    */
    return 0;
}`,
  },
  {
    id: "c-variables",
    title: "C Variables",
    icon: Layers,
    heading: "C Variables & Naming Rules",
    summary:
      "Containers for storing memory values that can be referenced and modified during program execution.",
    content: [
      {
        subheading: "Declaring and Initializing",
        text: "In C, you must explicitly declare the data type before assigning a value: type variableName = value;",
      },
      {
        subheading: "Format Specifiers",
        text: "%d or %i is used for integers, %f for floating points, %c for single characters, and %s for string character buffers.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int playerLevel = 5;
    float goldMultiplier = 1.15f;
    char hunterTier = 'S';

    printf("Level: %d\\n", playerLevel);
    printf("Multiplier: %.2f\\n", goldMultiplier);
    printf("Rank Tier: %c\\n", hunterTier);
    return 0;
}`,
  },
  {
    id: "c-datatypes",
    title: "C Data Types",
    icon: Code2,
    heading: "C Data Types & Memory Allocation",
    summary:
      "Basic primitive types define the precision, format, and byte size reserved in physical RAM.",
    content: [
      {
        subheading: "Basic Primitive Types",
        text: "int (typically 4 bytes), float (4 bytes: single-precision decimal), double (8 bytes: double-precision float), and char (1 byte: stores a single ASCII character).",
      },
      {
        subheading: "Inspecting Sizes with sizeof",
        text: "The sizeof operator returns the exact size in bytes allocated for any type or variable in your current architecture.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int myInt;
    float myFloat;
    double myDouble;
    char myChar;

    printf("Size of int: %lu bytes\\n", sizeof(myInt));
    printf("Size of float: %lu bytes\\n", sizeof(myFloat));
    printf("Size of double: %lu bytes\\n", sizeof(myDouble));
    printf("Size of char: %lu byte\\n", sizeof(myChar));
    return 0;
}`,
  },
  {
    id: "c-type-conversion",
    title: "C Type Conversion",
    icon: RefreshCw,
    heading: "C Type Conversion (Casting)",
    summary:
      "Converting a value from one data type to another either implicitly (automatically) or explicitly (manually).",
    content: [
      {
        subheading: "Implicit Conversion (Automatic / Coercion)",
        text: "Done automatically by the compiler when assigning smaller types to larger types (e.g., assigning an int to a float). No data truncation occurs.",
      },
      {
        subheading: "Explicit Conversion (Type Casting)",
        text: "Done manually by placing the target type inside parentheses in front of the value: (type) value. Essential when performing integer division where decimal precision is needed.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    // 1. Implicit Conversion
    float myFloat = 9; // int 9 automatically converts to float 9.000000
    printf("Implicit: %f\\n", myFloat);

    // 2. Explicit Conversion (Type Casting)
    int questsCompleted = 5;
    int totalQuests = 2;
    
    // (float) 5 / 2 = 2.50
    float completionRatio = (float) questsCompleted / totalQuests;
    printf("Explicit Ratio: %.2f\\n", completionRatio);

    return 0;
}`,
  },
  {
    id: "c-constants",
    title: "C Constants",
    icon: Lock,
    heading: "C Constants (const & #define)",
    summary:
      "Variables whose values cannot be altered or overwritten once initialized during runtime.",
    content: [
      {
        subheading: "The 'const' Keyword",
        text: "Prepending 'const' before the type marks the variable read-only. Attempting to reassign will cause a compilation error. Best practice is to declare constants in uppercase.",
      },
      {
        subheading: "Preprocessor #define Directive",
        text: "#define creates symbolic constants before compilation begins. It doesn't consume memory as variables do; the preprocessor substitutes the text directly.",
      },
    ],
    example: `#include <stdio.h>

#define SANCTUARY_PORTAL_ID 777

int main() {
    const int MAX_LEVEL = 100;
    const float CRIT_MULTIPLIER = 2.5f;

    printf("Portal ID: %d\\n", SANCTUARY_PORTAL_ID);
    printf("Max Level: %d\\n", MAX_LEVEL);
    printf("Crit Multiplier: %.2f\\n", CRIT_MULTIPLIER);
    return 0;
}`,
  },
  {
    id: "c-operators",
    title: "C Operators",
    icon: SlidersHorizontal,
    heading: "C Operators Overview",
    summary:
      "Symbols that instruct the compiler to perform specific mathematical, relational, or logical manipulations.",
    content: [
      {
        subheading: "Operator Categories",
        text: "C divides operators into 5 main groups: Arithmetic (+, -, *, /, %), Assignment (=, +=, -=), Comparison (==, !=, <, >), Logical (&&, ||, !), and Bitwise (&, |, ^, ~).",
      },
      {
        subheading: "Operands vs Operators",
        text: "In the expression '10 + 20', '+' is the operator, while 10 and 20 are the operands.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int basePower = 100;
    int buffBonus = 50;
    int totalCombatPower = basePower + buffBonus;

    printf("Combat Power: %d\\n", totalCombatPower);
    return 0;
}`,
  },
  {
    id: "c-op-arithmetic",
    title: "C Arithmetic",
    icon: Calculator,
    heading: "C Arithmetic Operators",
    summary:
      "Perform basic mathematical calculations like addition, subtraction, multiplication, division, and remainder extraction.",
    content: [
      {
        subheading: "Core Operators",
        text: "+ (Addition), - (Subtraction), * (Multiplication), / (Division), and % (Modulus - returns remainder of integer division).",
      },
      {
        subheading: "Increment & Decrement",
        text: "++ increases value by 1, and -- decreases value by 1. Post-increment (x++) uses value then increments; pre-increment (++x) increments then evaluates.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int a = 20, b = 6;

    printf("Addition (a + b): %d\\n", a + b);
    printf("Subtraction (a - b): %d\\n", a - b);
    printf("Multiplication (a * b): %d\\n", a * b);
    printf("Division (a / b): %d\\n", a / b);
    printf("Modulus (a %% b): %d\\n", a % b);

    int count = 5;
    printf("Pre-increment: %d\\n", ++count);
    printf("Post-increment: %d\\n", count++);
    return 0;
}`,
  },
  {
    id: "c-op-assignment",
    title: "C Assignment",
    icon: Equal,
    heading: "C Assignment Operators",
    summary:
      "Assign values to variables and perform in-place shorthand arithmetic calculations.",
    content: [
      {
        subheading: "Simple Assignment (=)",
        text: "Copies the evaluated right-hand side expression into the left-hand side storage variable.",
      },
      {
        subheading: "Compound Assignment Operators",
        text: "Combines arithmetic operations with assignment: x += 5 is shorthand for x = x + 5. Also supports -=, *=, /=, and %=.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int gold = 100;

    gold += 50;
    printf("After Reward (+50): %d\\n", gold);

    gold -= 30;
    printf("After Shop (-30): %d\\n", gold);

    gold *= 2;
    printf("After Double Rune (*2): %d\\n", gold);

    gold %= 100;
    printf("After Vault Modulo: %d\\n", gold);
    return 0;
}`,
  },
  {
    id: "c-op-comparison",
    title: "C Comparison",
    icon: GitCompare,
    heading: "C Comparison (Relational) Operators",
    summary:
      "Compare two values. In C, true evaluates to boolean integer 1 and false evaluates to 0.",
    content: [
      {
        subheading: "Relational Operators",
        text: "== (Equal to), != (Not equal to), > (Greater than), < (Less than), >= (Greater than or equal to), <= (Less than or equal to).",
      },
      {
        subheading: "Crucial Warning",
        text: "Never confuse '==' (equality comparison) with '=' (variable assignment).",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int playerLevel = 10;
    int dungeonReq = 15;

    printf("Is Equal (10 == 15): %d\\n", playerLevel == dungeonReq);
    printf("Not Equal (10 != 15): %d\\n", playerLevel != dungeonReq);
    printf("Eligible (10 >= 15): %d\\n", playerLevel >= dungeonReq);
    printf("Underleveled (10 < 15): %d\\n", playerLevel < dungeonReq);
    return 0;
}`,
  },
  {
    id: "c-op-logical",
    title: "C Logical",
    icon: CheckCheck,
    heading: "C Logical Operators",
    summary:
      "Determine logic between variables or conditions to control branching and loops.",
    content: [
      {
        subheading: "Logical AND (&&)",
        text: "Returns 1 (true) only if both conditions evaluate to true. If the first condition is false, short-circuit evaluation skips the second.",
      },
      {
        subheading: "Logical OR (||)",
        text: "Returns 1 (true) if at least one condition evaluates to true.",
      },
      {
        subheading: "Logical NOT (!)",
        text: "Reverses the logical state; transforms 1 to 0 and 0 to 1.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int hasKey = 1;
    int level = 25;
    int isBanned = 0;

    if (hasKey && level >= 20) {
        printf("Gate opened: Access Granted!\\n");
    }

    if ((level > 50 || hasKey) && !isBanned) {
        printf("VIP Chamber unsealed.\\n");
    }
    return 0;
}`,
  },
  {
    id: "c-op-precedence",
    title: "C Precedence",
    icon: ListOrdered,
    heading: "C Operator Precedence & Associativity",
    summary:
      "Defines the exact grouping order in which operators are evaluated inside complex expressions.",
    content: [
      {
        subheading: "Precedence Order",
        text: "Parentheses () have highest priority. Next is Multiplicative (*, /, %), followed by Additive (+, -), Relational (<, <=, >, >=), Equality (==, !=), Logical AND (&&), Logical OR (||), and finally Assignment (=).",
      },
      {
        subheading: "Rule of Thumb",
        text: "Always use parentheses '()' to make evaluation order explicit and readable.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int result1 = 10 + 5 * 2;
    printf("Without Parentheses: %d\\n", result1);

    int result2 = (10 + 5) * 2;
    printf("With Parentheses: %d\\n", result2);

    int complexLogic = 100 > 50 && 5 + 5 == 10;
    printf("Complex Evaluation: %d\\n", complexLogic);
    return 0;
}`,
  },
  {
    id: "c-op-challenge",
    title: "Code Challenge",
    icon: Award,
    heading: "C Operators Trial: Boss Battle Damage",
    summary:
      "Synthesize all learned operators (Arithmetic, Relational, Logical, and Type Casting) in a battle calculation.",
    content: [
      {
        subheading: "The Challenge Quest",
        text: "Calculate total player damage with a critical hit multiplier, apply damage reduction defense, check if the boss is slain (HP <= 0), and determine if the player earned S-Rank bonus reward.",
      },
      {
        subheading: "Try It Yourself",
        text: "Copy the inscribed code into your sandbox compiler, run it, and modify the player's base attack or critical status.",
      },
    ],
    example: `#include <stdio.h>

int main() {
    int baseAttack = 120;
    int isCrit = 1;
    float critMultiplier = 1.5f;
    int bossDefense = 30;
    int bossHP = 160;

    int calculatedDamage = (int)(baseAttack * (isCrit ? critMultiplier : 1.0f)) - bossDefense;
    bossHP -= calculatedDamage;

    int isBossDead = (bossHP <= 0);
    int isSRank = (isBossDead && isCrit);

    printf("Attack Landed: %d Damage!\\n", calculatedDamage);
    printf("Remaining Boss HP: %d\\n", bossHP > 0 ? bossHP : 0);
    printf("Boss Defeated: %s\\n", isBossDead ? "YES" : "NO");
    printf("S-Rank Victory: %s\\n", isSRank ? "CONFIRMED (+100 Gold)" : "STANDARD");

    return 0;
}`,
  },
];

export default function CTutorialPage({ onBack }) {
  const [activeTopicId, setActiveTopicId] = useState("c-home");
  const [copied, setCopied] = useState(false);

  const activeTopic =
    C_TOPICS.find((t) => t.id === activeTopicId) || C_TOPICS[0];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-white flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Sanctuary
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" /> C Tutorial
              Grimoire
            </span>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Topic Slider / Navigation Sidebar (3 Cols) */}
        <aside className="lg:col-span-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-3 sticky top-22 shadow-xl max-h-[calc(100vh-110px)] overflow-y-auto">
          <div className="px-3 py-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-2">
            C Language Topics ({C_TOPICS.length})
          </div>

          <nav className="space-y-1">
            {C_TOPICS.map((topic) => {
              const Icon = topic.icon;
              const isActive = topic.id === activeTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/25 font-black"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon
                      className={`w-4 h-4 shrink-0 ${isActive ? "text-slate-950" : "text-cyan-400"}`}
                    />
                    <span className="truncate">{topic.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 ${isActive ? "opacity-100" : "opacity-30"}`}
                  />
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right Side: Learning Detail Page (9 Cols) */}
        <main className="lg:col-span-9 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="space-y-2 border-b border-slate-800/80 pb-5">
            <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              Module: {activeTopic.title}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
              {activeTopic.heading}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              {activeTopic.summary}
            </p>
          </div>

          <div className="space-y-4">
            {activeTopic.content.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5"
              >
                <h3 className="text-sm font-black text-cyan-300">
                  {sec.subheading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Code Inscription Example
            </h4>

            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-bold">example.c</span>
                <button
                  onClick={() => handleCopyCode(activeTopic.example)}
                  className="flex items-center gap-1.5 text-[11px] font-mono hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 text-xs font-mono text-emerald-300/95 leading-relaxed overflow-x-auto selection:bg-cyan-500/30">
                <code>{activeTopic.example}</code>
              </pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
