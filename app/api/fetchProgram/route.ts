import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";

connect();
export const revalidate = 0;
export async function GET() {
  try {
    const allPrograms = await createEvent.find({ eventType: "Programming" });
    return NextResponse.json({ allPrograms });
  } catch (error: any) {
    return NextResponse.json({
      message: "No PhotoOPS exist!",
      status: 500,
    });
  }
}
