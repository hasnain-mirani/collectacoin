import { connect } from "@/dbconfig/dbconfig";
import addVendor from "@/modals/vendorModal";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET(req:any,{params}:any) {
  try {
    const { id } = params;
    console.log({id})
    await connect();
    const allVendors = await addVendor.findOne({ _id: id  });
    return NextResponse.json({ allVendors });
  } catch (error: any) {
    return NextResponse.json({
      message: "No data exist!",
      status: 500,
    });
  }
}