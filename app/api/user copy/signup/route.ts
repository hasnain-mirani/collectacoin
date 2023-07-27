
import { connect } from "@/dbconfig/dbconfig";
import User from "@/modals/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
connect();
async function sendVerificationEmail(email: string, verificationCode: string) {
  try {
    // Create a transporter object using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hasnainmirani1122@gmail.com",
        pass: "hgwqurgylwjqauxi",
      },
    });

    // Define the email options
    const mailOptions = {
      from: "mirani@gmail.com",
      to:email,
      subject: "Email Verification",
      text: `Your verification code is: ${verificationCode}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
}
export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { firstName, lastName, email, password , agreed} = req;
console.log(req)
    // already Registered
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    // beCrypt Password!!
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    // creating NEW user!!
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
      agreed,
     // Add the verification code to the user object
      verified: false,
    });
    const saveUser = await newUser.save();

    
    return NextResponse.json(
      {
        message: "user already exists",
        success:true,
    saveUser
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
