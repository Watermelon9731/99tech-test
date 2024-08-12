import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const data = await fetch("https://interview.switcheo.com/prices.json");
    const res = await data.json()
    
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}
