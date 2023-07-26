import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  ItemTitle: String,
  ItemSubject: String,
  ItemDescription: String,
  Hallno: String,
  eventType: String,
  Date: String,
  Time: String,
  Pic: String,
});

const createEvent =
  mongoose.models.allEvents || mongoose.model("allEvents", userSchema);
export default createEvent;
