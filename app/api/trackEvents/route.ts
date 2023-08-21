import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";

connect();

export async function GET() {
  try {
    const trackEvents = await event.find();
    console.log(trackEvents);
    return NextResponse.json({ trackEvents });
  }
  catch(error : any){
    return NextResponse.json({
      message: "No Events Exist!",
      status: 500,
    });
}
}
