export const LEVELS = [
  { level: 1, minXp: 0, title: "Eco Beginner 🌱" },
  { level: 2, minXp: 100, title: "Eco Explorer 🍃" },
  { level: 3, minXp: 250, title: "Eco Guardian 🌿" },
  { level: 4, minXp: 450, title: "Nature Protector 🌳" },
  { level: 5, minXp: 700, title: "Earth Hero 🌍" },
  { level: 6, minXp: 1000, title: "Green Champion 🏆" },
  { level: 7, minXp: 1350, title: "Planet Savior ⭐" },
];

export function calculateLevel(totalXp: number) {
  let level = 1;

  for (const item of LEVELS) {
    if (totalXp >= item.minXp) {
      level = item.level;
    }
  }

  return level;
}

export function getCurrentLevel(totalXp: number) {
  let current = LEVELS[0];

  for (const item of LEVELS) {
    if (totalXp >= item.minXp) {
      current = item;
    }
  }

  return current;
}

export function getNextLevel(totalXp: number) {
  const current = calculateLevel(totalXp);

  return LEVELS.find((l) => l.level === current + 1);
}

export function getLevelProgress(totalXp: number) {
  const current = getCurrentLevel(totalXp);
  const next = getNextLevel(totalXp);

  if (!next) {
    return {
      progress: 100,
      currentXp: totalXp,
      nextXp: totalXp,
    };
  }

  const currentRange = current.minXp;
  const nextRange = next.minXp;

  const progress =
    ((totalXp - currentRange) / (nextRange - currentRange)) * 100;

  return {
    progress,
    currentXp: totalXp - currentRange,
    nextXp: nextRange - currentRange,
  };
}
