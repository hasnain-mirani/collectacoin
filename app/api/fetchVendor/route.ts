import { connect } from "@/dbconfig/dbconfig";
import addVendor from "@/modals/vendorModal";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const allVendors = await addVendor.find();
    return NextResponse.json({ allVendors });
  } catch (error: any) {
    return NextResponse.json({
      message: "No Vendors exist!",
      status: 500,
    });
  }
}
