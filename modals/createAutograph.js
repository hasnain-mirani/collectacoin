import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  ItemTitle: String,
  ItemSubject: String,
  ItemDescription: String,
  Hallno: String,
  Date: String,
  Time: String,
  Pic: String,
});

const autoEvent = mongoose.models.autographEvents || mongoose.model("autographEvents", userSchema);
export default autoEvent;
