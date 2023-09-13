import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "provide your First Name!"],
  },
  lastName: {
    type: String,
    required: [true, "provide your Last Name!"],
  },
  email: {
    type: String,
    required: [true, "provide your Email"],
    unique:true
  },
  password: {
    type: String,
    required: [true, "provide your Password"],
  },
  image:{
    type: String,
  },
  agreed:{
    type:Boolean,
    required: [true, "please check the box"],
  },
  role:{
    type:String,
    
  }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
