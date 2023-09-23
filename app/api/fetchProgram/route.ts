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
      message: "No Programming  exist!",
      status: 500,
    });
  }
}
export async function DELETE(req:any) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const deletePrograms = await createEvent.findByIdAndDelete(id);
    return NextResponse.json({deletePrograms });
  } catch (error: any) {
    return NextResponse.json({
      message: "No Programming  exist!",
      status: 500,
    });
  }
}
