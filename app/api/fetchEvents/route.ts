import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";

connect();
export const revalidate = 0;
export async function GET() {
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
