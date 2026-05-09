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

router.post("/", protect, submitComplaint);
router.get("/my", protect, getMyComplaints);
router.get("/all", protect, getAllComplaints);
router.put("/:id", protect, updateStatus);
router.delete("/:id", protect, deleteComplaint);

module.exports = router;