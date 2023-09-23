import { connect } from "@/dbconfig/dbconfig";
import addVendor from "@/modals/vendorModal";
import { NextResponse } from "next/server";

connect();
export const revalidate = 0;
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

export async function DELETE(req: any) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const deleteVendors = await addVendor.findByIdAndDelete(id);
    return NextResponse.json({ deleteVendors });
  } catch (error: any) {
    return NextResponse.json({
      message: "No Plans exist!",
      status: 500,
    });
  }
}
