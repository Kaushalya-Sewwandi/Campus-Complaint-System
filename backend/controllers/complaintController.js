const Complaint = require("../models/Complaint");

exports.submitComplaint = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if(!title || !description || !category){
      return res.status(400).json({message:"All fields are required"});
    }
    const complaint = await Complaint.create({
      title,
      description,
      category,
      student: req.user.id || req.user._id
    });

    res.status(201).json(complaint);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({student: req.user.id})
     .sort({createdAt:-1});

    res.json(complaints);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("student", "name email")
      .sort({createdAt: -1});

    res.json(complaints);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = ["pending","in-progress","resolved"];
    if(!validStatuses.includes(status)){
      return res.status(400).json({message:"Invalid status"});
    }
    const complaint = await Complaint.findById(req.params.id);
    
    if(!complaint){
      return res.status(404).json({message:"Complaint not found"});
    }

    complaint.status=status;
    await complaint.save();
    

    res.json(complaint);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    await complaint.deleteOne();

    res.json({ message: "Complaint deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};