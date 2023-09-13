import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";


 export const revalidate = 0;
// export async function GET(request, { params }) {
//     const { id } = params;
//     await connectMongoDB();
//     const topic = await Topic.findOne({ _id: id });
//     return NextResponse.json({ topic }, { status: 200 });
//   }
  
export async function GET(req:any,{params}:any) {
  try {
    const { id } = params;
    console.log({id})
    await connect();
    const allPrograms = await createEvent.findOne({ _id: id  });
    console.log(allPrograms)
    return NextResponse.json({ allPrograms });
  } catch (error: any) {
    return NextResponse.json({
      message: "No data exist!",
      status: 500,
    });
  }
}
// Import necessary dependencies
 // Import your model for accessing the database

/*
 export async function PUT(req: any, { params, body }: any) {
  try {
    const { id } = params;
    await connect();

    // Find the document by ID and update it with the new data from the request body
    const updatedEvent = await createEvent.findByIdAndUpdate(id, body,{ new: true });
console.log(body)
    if (updatedEvent) {
      console.log('updated!!!!')
      return NextResponse.json({ updatedEvent });
    } else {
      return NextResponse.json({
        message: 'No data exist for the provided ID!',
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error updating data!',
      status: 500,
    });
  }
}*/
export async function PUT(request:any, { params }:any) {
  const { id } = params;
  console.log(id)
  const { newTitle: ItemTitle,newItemSubject:ItemSubject, newItemDescription: ItemDescription,newHallno:Hallno,newDate:Date,newTime:Time,newPic:Pic } = await request.json();
  // console.log(request.json())
  await connect();
  await createEvent.findByIdAndUpdate(id, { ItemTitle:'hel', ItemSubject,ItemDescription: "",Hallno: "", eventType: "Programming", Date: "",Time: "", Pic: "" });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
// ItemTitle: "", ItemSubject: "",ItemDescription: "",Hallno: "", eventType: "Programming", Date: "",Time: "", Pic: ""
