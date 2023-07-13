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
  agreed:{
    type:Boolean,
    required: [true, "please check the box"],
  }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
