const Complaint = require("../models/Complaint");

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate("student", "name email");
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateComplaintStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    complaint.status = req.body.status || complaint.status;

    await complaint.save();

    res.json({ message: "Complaint updated", complaint });
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