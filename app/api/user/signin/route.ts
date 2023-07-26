
import { connect } from "@/dbconfig/dbconfig";
import User from "@/modals/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
connect()
export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
const {email, password} =reqBody;

    const user = await User.findOne({ email });
if (!user) {
  return NextResponse.json(
    { error: "user already exists" },
    { status: 400 }
  );
  }
//   password check ?
const validpassword= await bcryptjs.compare
(password,user.password)
if(!validpassword){
    return NextResponse.json({error:'invalid password'},{status:400})
}
// create token data
const tokenData={
    id:user._id,
    username:user.username,
    email:email.email
}
// create token
const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1h'})
const response =NextResponse.json({
    message:'log in successful',
    success:true
})
response.cookies.set("token",token,{
    httpOnly:true,
})
return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},
        {status: 500}    )
    }
    
}