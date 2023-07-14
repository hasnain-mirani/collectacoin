import { connect } from "@/dbconfig/dbconfig";
import events from "@/modals/adminmodal";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { FirstName, LastName, Address, Hallno, Date, Time, Pic } = reqBody;

    console.log(reqBody);
  
const newUser = new events({
    FirstName, LastName, Address, Hallno, Date, Time ,Pic 
  });
  console.log(newUser)
  const saveUser = await newUser.save();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
