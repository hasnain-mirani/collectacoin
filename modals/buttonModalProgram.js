import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
    buttonNumber: Number,
    buttonState: String,
    state: Number,
});

const buttonEventProgram = mongoose.models.buttonTrackProgram || mongoose.model("buttonTrackProgram", buttonSchema);
export default buttonEventProgram;
