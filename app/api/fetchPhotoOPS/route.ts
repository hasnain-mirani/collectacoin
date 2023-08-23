import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";

connect();
export const revalidate = 0;
export async function GET() {
  try {
    const allPhotos = await createEvent.find({ eventType: "PhotoOPS" });
    return NextResponse.json({ allPhotos });
  } catch (error: any) {
    return NextResponse.json({
      message: "No PhotoOPS exist!",
      status: 500,
    });
  }
}
