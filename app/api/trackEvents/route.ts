import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";

connect();
export const revalidate = 0;
export async function GET() {
  try {
    const trackEvents = await event.find();
    return NextResponse.json({trackEvents});
  }
  catch(error: any)
  {
    return NextResponse.json({message: "No Events Found!"});
  }
}