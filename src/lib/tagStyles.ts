// Centralized tag style mapping used by ProjectCard and ProjectModal
// Add new technologies here once and they’ll style consistently everywhere.

type TagStyle = {
  badge: string; // solid/outlined badge colors for modal lists
  hover: string; // hover colors for clickable chips/cards
  aliases?: string[]; // alternative spellings
};

const TAG_STYLES: Record<string, TagStyle> = {
  react: {
    badge:
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-700",
    hover: "hover:bg-cyan-600 hover:border-cyan-600 hover:text-white",
  },
  sqlite: {
    badge:
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-700",
    hover: "hover:bg-cyan-600 hover:border-cyan-600 hover:text-white",
  },
  tailwind: {
    badge:
      "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-700",
    hover: "hover:bg-sky-600 hover:border-sky-600 hover:text-white",
    aliases: ["tailwind css"],
  },
  flutter: {
    badge:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700",
    hover: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
  },
  mysql: {
    badge:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-700",
    hover: "hover:bg-orange-500 hover:border-orange-500 hover:text-white",
  },
  php: {
    badge:
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700",
    hover: "hover:bg-indigo-600 hover:border-indigo-600 hover:text-white",
  },
  kotlin: {
    badge:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-700",
    hover: "hover:bg-purple-600 hover:border-purple-600 hover:text-white",
  },
  firebase: {
    badge:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700",
    hover: "hover:bg-yellow-600 hover:border-yellow-600 hover:text-white",
  },
  n8n: {
    badge:
      "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 border-pink-300 dark:border-pink-700",
    hover: "hover:bg-pink-600 hover:border-pink-600 hover:text-white",
  },
  typescript: {
    badge:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700",
    hover: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
    aliases: ["ts"],
  },
  nextjs: {
    badge:
      "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700",
    hover: "hover:bg-gray-900 hover:border-gray-900 hover:text-white",
  },
  postgres: {
    badge:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    hover: "hover:bg-blue-800 hover:border-blue-800 hover:text-white",
    aliases: ["postgresql"],
  },
  java: {
    badge:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-700",
    hover: "hover:bg-orange-600 hover:border-orange-600 hover:text-white",
  },
  csharp: {
    badge:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-700",
    hover: "hover:bg-purple-700 hover:border-purple-700 hover:text-white",
    aliases: ["c#"],
  },
  git: {
    badge:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-700",
    hover: "hover:bg-orange-600 hover:border-orange-600 hover:text-white",
  },
  github: {
    badge:
      "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700",
    hover: "hover:bg-gray-900 hover:border-gray-900 hover:text-white",
  },
};

const DEFAULTS: TagStyle = {
  badge:
    "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600",
  hover: "hover:bg-gray-800 hover:border-gray-800 hover:text-white",
};

function normalize(tag: string) {
  return (tag ?? "").trim().toLowerCase();
}

function resolveKey(tag: string) {
  const key = normalize(tag);
  if (TAG_STYLES[key]) return key;
  // resolve via aliases
  for (const [k, cfg] of Object.entries(TAG_STYLES)) {
    if (cfg.aliases?.some((a) => normalize(a) === key)) return k;
  }
  return undefined;
}

export function getTagBadgeClasses(tag: string) {
  const k = resolveKey(tag);
  return (k ? TAG_STYLES[k].badge : DEFAULTS.badge) as string;
}

export function getTagHoverClasses(tag: string) {
  const k = resolveKey(tag);
  return (k ? TAG_STYLES[k].hover : DEFAULTS.hover) as string;
}
