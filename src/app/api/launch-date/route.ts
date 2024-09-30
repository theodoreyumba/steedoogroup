// /app/api/launch-date/route.ts

export async function GET() {
    const launchDate = new Date("2024-10-30T00:00:00"); // Or fetch it from a DB
    return new Response(JSON.stringify({ launchDate }), { status: 200 });
  }
  