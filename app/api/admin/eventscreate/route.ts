import { connect } from "@/dbconfig/dbconfig";
import createEvents from "@/modals/createEventModal";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      ItemTitle,
      ItemSubject,
      ItemDescription,
      Hallno,
      eventType,
      Date,
      Time,
      Pic,
    } = reqBody;

    console.log(reqBody);

    const newUser = new createEvents({
      ItemTitle,
      ItemSubject,
      ItemDescription,
      Hallno,
      eventType,
      Date,
      Time,
      Pic,
    });
    console.log(newUser);
    const saveUser = await newUser.save();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
