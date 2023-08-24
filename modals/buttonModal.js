import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
    buttonNumber: Number,
    buttonState: String,
    state: Number,
});

const buttonEvent = mongoose.models.buttonAuto || mongoose.model("buttonAuto", buttonSchema);
export default buttonEvent;
