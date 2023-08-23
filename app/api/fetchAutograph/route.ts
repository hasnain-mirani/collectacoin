import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";

connect();
export const revalidate = 0;
export async function GET() {
  try {
    const allAutographs = await createEvent.find({ eventType: "Autograph" });
    return NextResponse.json({ allAutographs });
  } catch (error: any) {
    return NextResponse.json({
      message: "No Autographs exist!",
      status: 500
    })
  }
}
