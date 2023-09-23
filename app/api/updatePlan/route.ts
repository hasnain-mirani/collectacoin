import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import plan from "@/modals/floorPlanModal";

connect();
export const revalidate = 0;
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {_id, Title, EventName, Venue, File } = reqBody;
        let planData = await plan.findOne({_id});
        if (planData) {
            planData.Title = Title;
            planData.EventName = EventName;
            planData.Venue = Venue;
            planData.File = File;
            planData.save();
    }
}
    catch (error: any) {
        return NextResponse.json({ message: "Failed to update Event!" });
    }
}