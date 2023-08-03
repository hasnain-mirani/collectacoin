import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const name = request.nextUrl.searchParams.get("name");
    const currentEvent = await event.findOneAndDelete({ name });

    if (!currentEvent) {
      return NextResponse.json({
        message: "Event Not Found!",
        status: 500,
      });
    } else {
      return NextResponse.json({
        message: `${currentEvent.name} deleted Successfully`,
        status: 400

      })
    }
  }
  catch (error: any) {
    console.log(error.message);
  }
}
