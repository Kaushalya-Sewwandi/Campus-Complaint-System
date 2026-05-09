const express = require("express");
const router = express.Router();

const {
  getAllComplaints,
  updateComplaintStatus,
  deleteComplaint
} = require("../controllers/adminController");

const protect  = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

router.get("/complaints", protect, adminOnly, getAllComplaints);
router.put("/complaints/:id", protect, adminOnly, updateComplaintStatus);
router.delete("/complaints/:id", protect, adminOnly, deleteComplaint);

module.exports = router;