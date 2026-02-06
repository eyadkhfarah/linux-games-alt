import { NextResponse } from 'next/server';
import { scanIds } from '@/lib/protondb';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const idsParam = url.searchParams.get('ids');

  if (!idsParam) return NextResponse.json({ error: 'ids query param required (comma-separated)' }, { status: 400 });

  const ids = idsParam.split(',').map((s) => s.trim()).filter(Boolean);
  const results = await scanIds(ids);

  // Filter to only those that are not supported on Linux and include alternative if available
  const notSupported = results.filter((r) => r.success && !r.supported);

  return NextResponse.json({ scanned: results.length, notSupported });
}