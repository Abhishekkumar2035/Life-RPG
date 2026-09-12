// Non-linear XP curve: Level L requires Math.floor(100 * (L ^ 1.5))
const getRequiredXP = (level) => Math.floor(100 * Math.pow(level, 1.5));

const processTaskCompletion = (user, task) => {
  let { level, currentXP, gold, stats, streak, lastActiveDate } = user;

  // 1. Streak Tracker (24h/daily basis)[cite: 1]
  const today = new Date().toISOString().split("T")[0];
  if (!lastActiveDate) {
    streak = 1;
  } else {
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .split("T")[0];
    if (lastActiveDate === yesterday) {
      streak += 1;
    } else if (lastActiveDate !== today) {
      streak = 1;
    }
  }
  lastActiveDate = today;

  // 2. Base Rewards
  currentXP += task.xpReward;
  gold += task.goldReward;

  // 3. Attribute Leveling[cite: 1]
  const statKey = task.category.toLowerCase();
  const statBoost =
    task.difficulty === "Hard" ? 3 : task.difficulty === "Medium" ? 2 : 1;
  if (stats[statKey] !== undefined) {
    stats[statKey] += statBoost;
  }

  // 4. Non-Linear Level Ups[cite: 1]
  let leveledUp = false;
  while (currentXP >= getRequiredXP(level)) {
    currentXP -= getRequiredXP(level);
    level += 1;
    gold += level * 25; // Milestone gold
    leveledUp = true;
  }

  return { level, currentXP, gold, stats, streak, lastActiveDate, leveledUp };
};

module.exports = { getRequiredXP, processTaskCompletion };
