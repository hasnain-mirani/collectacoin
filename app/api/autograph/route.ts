import { connect } from "@/dbconfig/dbconfig";
import autoEvent from "@/modals/createAutograph";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { ItemTitle, ItemSubject, ItemDescription, Hallno, Date, Time, Pic } =
      await reqBody;

    console.log(reqBody);

    const newAutoEvent = new autoEvent({
      ItemTitle,
      ItemSubject,
      ItemDescription,
      Hallno,
      Date,
      Time,
      Pic
    });
    console.log(newAutoEvent);
    const saveUser = await newAutoEvent.save();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
