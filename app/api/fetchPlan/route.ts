import { connect } from "@/dbconfig/dbconfig";
import plan from "@/modals/floorPlanModal";
import { NextResponse } from "next/server";

connect();
export const revalidate = 0;
export async function GET() {
  try {
    const allPlans = await plan.find();
    return NextResponse.json({ allPlans });
  } catch (error: any) {
    return NextResponse.json({
        message: "No Plans exist!",
        status: 500
    })
  }
}
