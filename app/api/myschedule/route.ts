import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";

connect();

export async function GET() {
  try {
    const events = await event.find();
    return NextResponse.json({ events });
  }
  catch(error : any){
    return NextResponse.json({
      message: "No Events Exist!",
      status: 500,
    });
}
}
