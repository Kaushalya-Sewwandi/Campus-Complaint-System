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

    category: {
    type: String,
    required: true,
    enum: ["General", "Hostel", "Canteen", "Academics", "Transport", "Facilities"],
    set: v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
},
    status:{
        type:String,
        enum:["pending","in progress","resolved"],
        default:"pending"
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

},{timestamps:true});

module.exports = mongoose.model("Complaint",complaintSchema);