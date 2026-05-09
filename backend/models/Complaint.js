const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    status:{
        type:String,
        enum:["Pending","In Progress","Resolved"],
        default:"Pending"
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});

module.exports = mongoose.model("Complaint",complaintSchema);