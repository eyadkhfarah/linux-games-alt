import { NonSteamGame } from "@/types/steam";

export const EXTERNAL_GAMES: Record<string, NonSteamGame> = {
  fortnite: {
    type: "game",
    name: "Fortnite",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://www.fortnite.com/",
    header_image:
      "https://gaming-cdn.com/images/products/2500/orig/fortnite-pc-epic-games-cover.jpg",
    short_description:
      "Build, battle, and create. Fortnite is the constantly evolving multiplayer game where you and your friends battle to be the last one standing in an intense 100-player PvP mode.",
    developers: ["Epic Games"],
    publishers: ["Epic Games"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 83 },
    tags: ["Multiplayer", "PvP"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "21 Jul, 2017" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  valorant: {
    type: "game",
    name: "Valorant",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://playvalorant.com/",
    header_image:
      "https://wiki.leagueoflegends.com/en-us/images/thumb/Valorant_Cover_05.jpg/640px-Valorant_Cover_05.jpg",
    short_description:
      "Valorant is a tactical shooter where players use unique abilities to outmaneuver opponents in fast-paced rounds.",
    developers: ["Riot Games"],
    publishers: ["Riot Games"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 83 },
    tags: ["Multiplayer", "PvP"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Free to Play" },
    ],
    release_date: { coming_soon: false, date: "21 Jul, 2017" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  "league-of-legends": {
    type: "game",
    name: "League of Legends",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://www.leagueoflegends.com/",
    header_image:
      "https://gaming-cdn.com/images/products/9456/616x353/league-of-legends-pc-game-cover.jpg",
    short_description:
      "A team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays.",
    developers: ["Riot Games"],
    publishers: ["Riot Games"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: false },
    metacritic: { score: 78 },
    tags: ["Multiplayer", "Co-op"],
    genres: [
      { id: 1, description: "MOBA" },
      { id: 2, description: "Strategy" },
    ],
    release_date: { coming_soon: false, date: "27 Oct, 2009" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  "heroes-of-mewerth": {
    type: "game",
    name: "Heroes of Newerth",
    steam_appid: 0,
    required_age: 12,
    is_free: true,

    officialUrl: "https://heroesofnewerth.com/",
    header_image:
      "https://bleedingcool.com/wp-content/uploads/2025/10/Heroes-of-Newerth-Reborn-Art.jpeg",
    short_description:
      "A team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays.",
    developers: ["S2 Games", "Frostburn Studios"],
    publishers: ["S2 Games", "Frostburn Studios"],
    price_overview: undefined,
    platforms: { windows: true, mac: true, linux: true },
    metacritic: { score: 78 },
    tags: ["Multiplayer", "Co-op"],
    genres: [
      { id: 1, description: "MOBA" },
      { id: 2, description: "Strategy" },
    ],
    release_date: { coming_soon: false, date: "27 Oct, 2009" },
    pc_requirements: { minimum: "Min Specs...", recommended: "Rec Specs..." },
  },
  "yandere-simulator": {
    type: "game",
    name: "Yandere Simulator",
    steam_appid: 0,
    required_age: 18,
    is_free: true,
    officialUrl: "https://yanderesimulator.com/",
    header_image: "https://i.postimg.cc/SRnx3Xzd/image.png",
    short_description:
      "A stealth game about stalking a boy and secretly eliminating anyone who seems interested in him, while maintaining the image of an innocent schoolgirl.",
    developers: ["YandereDev"],
    publishers: ["YandereDev"],
    price_overview: undefined,
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 0 },
    tags: ["Single-player", "Stealth"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "Simulation" },
    ],
    release_date: { coming_soon: true, date: "In Development" },
    pc_requirements: {
      minimum: "GTX 1050 or higher, 8GB RAM",
      recommended: "GTX 1060 or higher, 16GB RAM",
    },
  },
  "genshin-impact": {
    type: "game",
    name: "Genshin Impact",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://genshin.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/c2904ed6cfa731edd18d8ffe285b6695.png",
    short_description:
      "Step into Teyvat, a vast world teeming with life and flowing with elemental energy. A sprawling open-world action RPG where you embark on a journey to find your lost sibling.",
    developers: ["HoYoverse"],
    publishers: ["HoYoverse"],
    price_overview: undefined,
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 84 },
    tags: ["Open World", "RPG", "Gacha", "Action", "Adventure", "Fantasy"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "RPG" },
      { id: 3, description: "Adventure" },
    ],
    release_date: { coming_soon: false, date: "Sep 28, 2020" },
    pc_requirements: {
      minimum: "GTX 1030 or higher, 8GB RAM",
      recommended: "GTX 1060 or higher, 16GB RAM",
    },
  },

  "honkai-star-rail": {
    type: "game",
    name: "Honkai: Star Rail",
    steam_appid: 0,
    required_age: 12,
    is_free: true,
    officialUrl: "https://hsr.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/ea0ac41ec100ed71b192eaa7f45c6692.png",
    short_description:
      "Hop aboard the Astral Express and experience the galaxy's infinite wonders filled with adventure and thrills. A space fantasy RPG with strategic turn-based combat.",
    developers: ["HoYoverse"],
    publishers: ["HoYoverse"],
    price_overview: undefined,
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 80 },
    tags: ["Turn-Based Combat", "RPG", "Gacha", "Sci-Fi", "Anime"],
    genres: [
      { id: 1, description: "RPG" },
      { id: 1, description: "Strategy" },
      { id: 3, description: "Adventure" },
    ],
    release_date: { coming_soon: false, date: "Apr 26, 2023" },
    pc_requirements: {
      minimum: "GTX 650 or higher, 6GB RAM",
      recommended: "GTX 1060 or higher, 8GB RAM",
    },
  },

  "zenless-zone-zero": {
    type: "game",
    name: "Zenless Zone Zero",
    steam_appid: 0,
    required_age: 16,
    is_free: true,
    officialUrl: "https://zenless.hoyoverse.com/",
    header_image:
      "https://cdn2.steamgriddb.com/grid/fb1c379f0c46eb1224cab79f519bffe2.png",
    short_description:
      "An all-new urban fantasy action RPG from HoYoverse. Dive into the Hollows, fight ethereal monsters, and uncover the truth behind the post-apocalyptic metropolis of New Eridu.",
    developers: ["HoYoverse"],
    publishers: ["HoYoverse"],
    price_overview: undefined,
    platforms: { windows: true, mac: false, linux: false },
    metacritic: { score: 79 },
    tags: ["Action", "RPG", "Gacha", "Hack and Slash", "Urban Fantasy"],
    genres: [
      { id: 1, description: "Action" },
      { id: 2, description: "RPG" },
    ],
    release_date: { coming_soon: false, date: "Jul 4, 2024" },
    pc_requirements: {
      minimum: "GTX 970 or higher, 8GB RAM",
      recommended: "GTX 1660 or higher, 8GB RAM",
    },
  },
};
