import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";

connect();

export async function get() {
  try {
    const events = await event.find();
    return NextResponse.json({ events });
  }
  catch (error: any) {
    console.log(error.message);
  }
}
