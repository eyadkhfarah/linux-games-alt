export async function fetchProtonTierByName(name: string) {
  const searchUrl = `https://www.protondb.com/search?q=${encodeURIComponent(name)}`;
  const res = await fetch(searchUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  if (!res.ok) return { tier: null, raw: null };

  const html = await res.text();

  // Try to locate the game's name first, then search a small snippet around it for known tier words.
  const idx = html.toLowerCase().indexOf(name.toLowerCase());
  const snippet = idx === -1 ? html.slice(0, 1000) : html.slice(Math.max(0, idx - 300), idx + 300);

  const match = snippet.match(/(Platinum|Gold|Silver|Bronze|Borked|Unplayable|Unsupported|Native|Works)/i);
  const tier = match ? match[1] : null;

  return { tier, raw: html };
}

import { findAlternative } from './data';

export async function checkGameCompatibility(appId: string | number) {
  const id = String(appId);

  // Fetch steam metadata from our internal API route
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  const res = await fetch(`${base}/api/game/${id}`);

  if (!res.ok) {
    return { appId: id, success: false, error: 'Failed to fetch Steam data' };
  }

  const json = await res.json();
  if (!json || !json.success) return { appId: id, success: false, error: 'Steam data not available' };

  const name = json.data?.name ?? '';
  const { tier } = await fetchProtonTierByName(name);
  const unsupported = !!tier && /borked|unplayable|unsupported/i.test(String(tier));

  const alternative = findAlternative(id);

  return {
    appId: id,
    name,
    tier,
    supported: !unsupported,
    alternative,
    success: true,
  };
}

export async function scanIds(ids: string[]) {
  const results = await Promise.all(ids.map((i) => checkGameCompatibility(i)));
  return results;
}