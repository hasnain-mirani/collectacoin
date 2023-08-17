import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
    buttonNumber: Number,
    buttonState: String,
    state: Number,
});

const buttonEventPhoto = mongoose.models.buttonTrackPhoto || mongoose.model("buttonTrackPhoto", buttonSchema);
export default buttonEventPhoto;
