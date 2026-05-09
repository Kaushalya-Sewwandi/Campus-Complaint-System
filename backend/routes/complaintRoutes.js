const express = require("express");
const router = express.Router();

const {
  submitComplaint,
  getMyComplaints,
  getAllComplaints,
  updateStatus,
  deleteComplaint
} = require("../controllers/complaintController");

const  protect  = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

router.post("/", protect, submitComplaint);
router.get("/my", protect, getMyComplaints);

router.get("/all", protect, adminOnly, getAllComplaints);
router.put("/:id", protect, adminOnly, updateStatus);
router.delete("/:id", protect, adminOnly, deleteComplaint);

module.exports = router;