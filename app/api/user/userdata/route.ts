import { getDatafromToken } from "@/helper/getDatafromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/modals/userModal";
import { connect } from "@/dbconfig/dbconfig";
connect();
export async function GET(request:NextRequest) {
    try {
      const userId= await getDatafromToken(request);
     const user=await User.findOne({_id: userId})
     return NextResponse.json({
        message:'user found',
        data: user
     })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400});
    }
}
