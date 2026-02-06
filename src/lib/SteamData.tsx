"use server";

import { SteamApiResponse, SteamGame } from "@/types/steam";

// Data fetching helper
export async function getSteamGame(id: string): Promise<SteamGame | null> {
  const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}`, {
    // Next.js 16 uses explicit caching - we'll cache this for 24 hours
    next: { revalidate: 86400 } 
  });
  
  const data: SteamApiResponse = await res.json();
  return data[id]?.success ? data[id].data : null;
}