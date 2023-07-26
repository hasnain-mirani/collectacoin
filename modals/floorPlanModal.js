import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    Title:{
        type: String
    } ,
    EventName:{
        type: String
    },
    Venue:{
        type: String
    },
    File: {
        type: String
    }
})
const plan = mongoose.models.floorPlan || mongoose.model("floorPlan" , eventSchema);
export default plan;