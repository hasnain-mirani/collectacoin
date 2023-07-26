import { connect } from "@/dbconfig/dbconfig";
import addVendor from "@/modals/vendorModal";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { Name, Profile, Description, Hallno, Social, Website, Pic } =
      reqBody;

    console.log(reqBody);

    const newUser = new addVendor({
      Name,
      Profile,
      Description,
      Hallno,
      Social,
      Website,
      Pic,
    });
    console.log(newUser);
    const saveUser = await newUser.save();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
