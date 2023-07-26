import { connect } from "@/dbconfig/dbconfig";
import plan from "@/modals/floorPlanModal";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      Title,
      EventName,
      Venue,
      File,
    } = reqBody;

    console.log(reqBody);

    const newUser = new plan({
        Title,
        EventName,
        Venue,
        File,
    });
    console.log(newUser);
    await newUser.save();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
