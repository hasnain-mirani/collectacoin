import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import event from "@/modals/eventModal";

connect();

export async function GET(req: NextRequest) {
  try {
    const trackEvents = await event.find();
    // Set Cache-Control headers to disable caching
    const cacheControl = "no-store";
    const responseHeaders = {
      "Cache-Control": cacheControl,
    };

    return new NextResponse(JSON.stringify({ trackEvents }), {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    console.error(error);

    return new NextResponse(
      JSON.stringify({
        message: "Failed to fetch events.",
        status: 500,
      }),
      {
        status: 500,
      }
    );
  }
}