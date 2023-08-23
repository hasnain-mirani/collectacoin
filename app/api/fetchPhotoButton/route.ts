import { NextResponse } from "next/server";
import {connect} from "@/dbconfig/dbconfig";
import buttonEventPhoto from "@/modals/buttonModalPhoto";

connect();
export const revalidate = 0;
export async function GET(){
    try {
        const buttonStates = await buttonEventPhoto.find().sort({buttonNumber: 1});
        return NextResponse.json({buttonStates});
        
    } catch (error: any) {
        console.log("Button State Not Found!");
        
    }

};
