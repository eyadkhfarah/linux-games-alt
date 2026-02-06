import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: appId } = await params;

  try {
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appId}`,
      {
        // Revalidate every hour (3600 seconds) to avoid Steam rate limits
        next: { revalidate: 3600 } 
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch from Steam' }, { status: 500 });
    }

    const data = await response.json();

    // Steam returns data in a format like { "1245620": { "success": true, "data": {...} } }
    // We can simplify this for our frontend
    return NextResponse.json(data[appId]);

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}