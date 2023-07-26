import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      ItemTitle,
      ItemSubject,
      ItemDescription,
      Hallno,
      Date,
      Time,
      count,
      state,
      Pic,
    } = reqBody;
    let existingCount = await event.findOne({ ItemTitle });
    if (existingCount === null) {
      const newCount = new event({
        ItemTitle,
        ItemSubject,
        ItemDescription,
        Hallno,
        Date,
        Time,
        count,
        state,
        Pic,
      });
      newCount.state = 1;
      newCount.count += 1;
      newCount.save();
      return NextResponse.json(
        { message: "New Record has been created!" },
        { status: 400 }
      );
    } else {
      if (existingCount.state === 0) {
        existingCount.count = existingCount.count + 1;
        existingCount.state = 1;
        existingCount.save();
      } else if (existingCount.state === 1) {
        existingCount.count = existingCount.count - 1;
        existingCount.state = 0;
        existingCount.save();
        if(existingCount.count === 0 && existingCount.state===0)
        {
          await event.findOneAndDelete({ItemTitle});
          console.log(`${ItemTitle} deleted successfully!`);

        }
      }
     
     
        
      
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
