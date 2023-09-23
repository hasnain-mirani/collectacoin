import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import vendor from "@/modals/vendorModal";

connect();
export const revalidate = 0;
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {_id, Name, Profile, Description, Hallno, Social, Website, Pic } = reqBody;
        let vendorData = await vendor.findOne({_id});
        if (vendorData) {
            vendorData.Name = Name;
            vendorData.Profile = Profile;
            vendorData.Description = Description;
            vendorData.Hallno = Hallno;
            vendorData.Social = Social;
            vendorData.Website = Website;
            vendorData.Pic = Pic;
            vendorData.save();
            console.log(`${_id} Event is Updated successfully!`);
    }
}
    catch (error: any) {
        return NextResponse.json({ message: "Failed to update Event!" });
    }
}