import { NextResponse } from 'next/server';
import { checkGameCompatibility } from '@/lib/protondb';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const result = await checkGameCompatibility(id);
  return NextResponse.json(result);
}