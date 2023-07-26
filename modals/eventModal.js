import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    ItemTitle:{
        type: String
    } ,
    ItemSubject:{
        type: String
    },
    ItemDescription:{
        type: String
    },
    Hallno:{
        type: String
    },
    Date:{
        type: String
    },
    Time:{
        type: String
        
    },
    count:{
        type: Number
    },
    state:{
        type: Number
    },
    Pic:{
        type: String
    } 
})
const event = mongoose.models.trackEvent || mongoose.model("trackEvent" , eventSchema);
export default event;