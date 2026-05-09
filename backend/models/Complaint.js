const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum:["academic","facilities","hostel","other"],
    },
    status:{
        type:String,
        enum:["Pending","In Progress","Resolved"],
        default:"Pending"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

},{timestamps:true});

module.exports = mongoose.model("Complaint",complaintSchema);