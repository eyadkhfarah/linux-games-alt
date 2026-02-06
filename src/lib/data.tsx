export interface GameMapping {
  badId: string;
  goodId: string;
  title: string;          // Used for Search
  genre: string;          // Used for Category Filter
  tags: string[];         // Used for Keywords
  antiCheat?: {
    name: string;
    status: string;
    alternativeFix: string;
  };
}

export const GameAlt: GameMapping[] = [
  // SHOOTERS (Tactical / Competitive)
  {
    badId: "359550", // Rainbow Six Siege
    goodId: "730",   // Counter-Strike 2
    title: "Rainbow Six Siege",
    genre: "Shooter",
    tags: ["FPS", "Tactical", "Competitive", "5v5"],
    antiCheat: { name: "BattlEye", status: "Broken", alternativeFix: "VAC (Native)" }
  },
  // LARGE SCALE WARFARE
  {
    badId: "2807960", // Battlefield 6 (2025 Release)
    goodId: "671860", // BattleBit Remastered
    title: "Battlefield 6",
    genre: "Shooter",
    tags: ["War", "Destruction", "Vehicles", "Large Scale"],
    antiCheat: { name: "EA Anti-Cheat", status: "Incompatible", alternativeFix: "EAC (Linux Supported)" }
  },
  {
    badId: "1938090", // Call of Duty (HQ/MW3)
    goodId: "1172470", // Apex Legends
    title: "Call of Duty",
    genre: "Shooter",
    tags: ["FPS", "Battle Royale", "Fast-Paced"],
    antiCheat: { name: "Ricochet", status: "Kernel Block", alternativeFix: "EAC (Linux Supported)" }
  },
  {
    badId: "578080", // PUBG: BATTLEGROUNDS
    goodId: "1172470", // Apex Legends (Reused as it's the best BR alternative)
    title: "PUBG: BATTLEGROUNDS",
    genre: "Shooter",
    tags: ["Battle Royale", "Realistic", "FPS"],
    antiCheat: { name: "BattlEye", status: "Unstable", alternativeFix: "EAC (Linux Supported)" }
  },


  // SPORTS
  {
    badId: "2195250", // EA Sports FC 24
    goodId: "1665460", // eFootball™
    title: "EA SPORTS FC 24",
    genre: "Sports",
    tags: ["Soccer", "Football", "Simulation"],
    antiCheat: { name: "EA Anti-Cheat", status: "Incompatible", alternativeFix: "Proton Compatible" }
  },

  // RPG / SOULS-LIKE
  {
    badId: "1599340", // Lost Ark
    goodId: "238960", // Path of Exile
    title: "Lost Ark",
    genre: "RPG",
    tags: ["MMO", "ARPG", "Loot", "Isometric"],
    antiCheat: { name: "Easy Anti-Cheat", status: "Not Enabled", alternativeFix: "Native / Vulkan" }
  },
  {
    badId: "814380",  // Sekiro (Note: Sekiro actually works well, but Elden Ring is verified)
    goodId: "1245620", // Elden Ring
    title: "Sekiro: Shadows Die Twice",
    genre: "RPG",
    tags: ["Souls-like", "Action", "Difficult", "Singleplayer"],
  },

  // SURVIVAL / EXTRACTION
  {
    badId: "3932890", // Escape from Tarkov (Steam Release)
    goodId: "252490", // Rust
    title: "Escape from Tarkov",
    genre: "Survival",
    tags: ["Extraction", "Hardcore", "FPS", "Loot"],
    antiCheat: { name: "BattlEye", status: "Unsupported", alternativeFix: "EAC (Community Servers)" }
  }
];