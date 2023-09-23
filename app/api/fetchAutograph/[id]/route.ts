import { connect } from "@/dbconfig/dbconfig";
import createEvent from "@/modals/createEventModal";
import { NextResponse } from "next/server";


export const revalidate = 0; 
export async function GET(req:any,{params}:any) {
  try {
    const { id } = params;
    console.log({id})
    await connect();
    const allAutographs = await createEvent.findOne({ _id: id  });
    console.log(allAutographs)
    return NextResponse.json({ allAutographs });
  } catch (error: any) {
    return NextResponse.json({
      message: "No data exist!",
      status: 500,
    });
  }
}