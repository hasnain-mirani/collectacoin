import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
    buttonNumber: Number,
    buttonState: String,
    state: Number,
});

const buttonEvent = mongoose.models.buttonTrack || mongoose.model("buttonTrack", buttonSchema);
export default buttonEvent;
