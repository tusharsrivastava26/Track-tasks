// LocalStorage utilities and state helpers for Career Launchpad

const STORAGE_PREFIX = 'career_forge_v1_';

export const getStorageItem = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

export const exportProgressData = () => {
  const exportObject = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      exportObject[key.replace(STORAGE_PREFIX, '')] = JSON.parse(localStorage.getItem(key));
    }
  }
  const blob = new Blob([JSON.stringify(exportObject, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `career_forge_backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

export const importProgressData = (jsonString) => {
  try {
    const parsed = JSON.parse(jsonString);
    Object.keys(parsed).forEach(key => {
      setStorageItem(key, parsed[key]);
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const calculateRoleProgress = (role, completedTopicIds = {}) => {
  if (!role || !role.phases) return 0;
  let totalTopics = 0;
  let completedCount = 0;

  role.phases.forEach(phase => {
    phase.topics.forEach(topic => {
      totalTopics++;
      if (completedTopicIds[topic.id]) {
        completedCount++;
      }
    });
  });

  return totalTopics === 0 ? 0 : Math.round((completedCount / totalTopics) * 100);
};

export const calculateXPAndLevel = (completedTopicCount, completedDailyPillarCount, quizCount) => {
  // 50 XP per topic, 20 XP per daily pillar task, 30 XP per quiz
  const totalXP = (completedTopicCount * 50) + (completedDailyPillarCount * 20) + (quizCount * 30);
  
  // Level tiers:
  // Level 1: 0 - 250 XP (Initiate)
  // Level 2: 251 - 750 XP (Apprentice)
  // Level 3: 751 - 1500 XP (Practitioner)
  // Level 4: 1501 - 3000 XP (Specialist)
  // Level 5: 3001+ XP (Job-Ready Master)
  let level = 1;
  let title = "Initiate (Zero)";
  let nextLevelXP = 250;
  let prevLevelXP = 0;

  if (totalXP >= 3000) {
    level = 5;
    title = "Job-Ready Titan";
    nextLevelXP = 5000;
    prevLevelXP = 3000;
  } else if (totalXP >= 1500) {
    level = 4;
    title = "Senior Contender";
    nextLevelXP = 3000;
    prevLevelXP = 1500;
  } else if (totalXP >= 750) {
    level = 3;
    title = "Skilled Practitioner";
    nextLevelXP = 1500;
    prevLevelXP = 750;
  } else if (totalXP >= 250) {
    level = 2;
    title = "Active Builder";
    nextLevelXP = 750;
    prevLevelXP = 250;
  }

  const levelProgress = Math.min(100, Math.round(((totalXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100));

  return { totalXP, level, title, nextLevelXP, levelProgress };
};
