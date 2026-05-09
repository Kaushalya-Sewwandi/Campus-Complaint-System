const Complaint = require("../models/Complaint");

exports.submitComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      student: req.user.id
    });

    res.status(201).json(complaint);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      student: req.user.id
    });

    res.json(complaints);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("student", "name email");

    res.json(complaints);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(complaint);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};