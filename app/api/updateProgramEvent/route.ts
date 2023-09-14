import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/createEventModal";

connect();
export const revalidate = 0;
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {_id, ItemTitle, ItemSubject, ItemDescription, Hallno, Date, Time, Pic } = reqBody;
        let programEvent = await event.findOne({_id});
        if (programEvent) {
            programEvent.ItemTitle = ItemTitle;
            programEvent.ItemSubject = ItemSubject;
            programEvent.ItemDescription = ItemDescription;
            programEvent.Hallno = Hallno;
            programEvent.Date = Date;
            programEvent.Time = Time;
            programEvent.Pic = Pic;
            programEvent.save();
            console.log(`${_id} Event is Updated successfully!`);
    }
}
    catch (error: any) {
        return NextResponse.json({ message: "Failed to update Event!" });
    }
}