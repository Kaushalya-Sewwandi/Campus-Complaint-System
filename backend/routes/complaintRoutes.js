const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
  deleteComplaint
} = require("../controllers/complaintController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");



router.post("/", protect, createComplaint);
router.get("/my", protect, getMyComplaints);



router.get("/", protect, adminOnly, getAllComplaints);
router.put("/:id", protect, adminOnly, updateComplaintStatus);
router.delete("/:id", protect, adminOnly, deleteComplaint);

module.exports = router;