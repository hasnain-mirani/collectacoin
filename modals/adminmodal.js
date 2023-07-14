import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    FirstName:String,
     LastName:String, 
     Address:String, 
     Hallno:String, 
     Date:String, 
     Time:String,
     Pic:String
});

const events = mongoose.models.events || mongoose.model("events", userSchema);
export default events;
