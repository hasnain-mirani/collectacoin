import { connect } from "@/dbconfig/dbconfig";
import plan from "@/modals/floorPlanModal";
import { NextResponse } from "next/server";


export const revalidate = 0;
export async function GET(req:any,{params}:any) {
  try {
    const { id } = params;
    console.log({id})
    await connect();
    const allPlans = await plan.findOne({ _id: id  });
    console.log(allPlans)
    return NextResponse.json({ allPlans });
  } catch (error: any) {
    return NextResponse.json({
      message: "No data exist!",
      status: 500,
    });
  }
}