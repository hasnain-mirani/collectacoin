import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";

connect();

export async function get() {
  try {
    const allEvents = await createEvent.find();
    return NextResponse.json({ allEvents });
  } catch (error: any) {
    return NextResponse.json({
        message: "No Events exist!",
        status: 500
    })
  }
}