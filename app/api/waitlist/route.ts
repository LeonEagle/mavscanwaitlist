import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to store waitlist data (in production, use a real database)
const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read waitlist data
function getWaitlistData(): { signups: Array<Record<string, unknown>>; count: number } {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) {
    return { signups: [], count: 0 };
  }
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return { signups: [], count: 0 };
  }
}

// Save waitlist data
function saveWaitlistData(data: { signups: Array<Record<string, unknown>>; count: number }) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET - Get waitlist count and progress
export async function GET() {
  const data = getWaitlistData();
  const target = 1000; // Target number of signups
  const progress = Math.min(Math.round((data.count / target) * 100), 100);

  return NextResponse.json({
    count: data.count,
    target,
    progress,
    isFull: data.count >= target,
  });
}

// POST - Add new signup
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = getWaitlistData();

    // Check if email already exists
    const emailExists = data.signups.some(
      (signup) => signup.email === body.email
    );

    if (emailExists) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Add new signup with timestamp
    const newSignup = {
      ...body,
      createdAt: new Date().toISOString(),
      id: data.count + 1,
    };

    data.signups.push(newSignup);
    data.count = data.signups.length;

    saveWaitlistData(data);

    const target = 1000;
    const progress = Math.min(Math.round((data.count / target) * 100), 100);

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
      position: data.count,
      progress,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process signup" },
      { status: 500 }
    );
  }
}
