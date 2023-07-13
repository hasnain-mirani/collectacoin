import nodemailer from "nodemailer";
import User from "@/modals/userModal";
import bcryptjs from "bcryptjs";
export const sendemil=async ({email,emailType,userId}:any) => {
    try {
      const hashedToken=await  bcryptjs.hash(userId.toString(),10)
    if(emailType ===)
    } catch (error:any) {
        throw new Error(error.message)
    }
}