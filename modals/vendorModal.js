import mongoose from 'mongoose';
import Link from 'next/link';

const eventSchema = new mongoose.Schema({
    Name:{
        type: String
    } ,
    Profile:{
        type: String
    },
    Description:{
        type: String
    },
    Hallno:{
        type: String
    },
    Profile:{
        type: String
    },
    Social: {
        type: String
    },
    Website:{
        type: String    
    },
    Pic:{
        type: String
    } 
})
const addVendor = mongoose.models.vendors || mongoose.model("vendors" , eventSchema);
export default addVendor;