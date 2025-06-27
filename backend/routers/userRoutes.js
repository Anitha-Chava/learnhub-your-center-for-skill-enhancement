const express = require("express");
const multer = require("multer");
const path = require("path");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  registerController,
  loginController,
  postCourseController,
  getAllCoursesUserController,
  deleteCourseController,
  getAllCoursesController,
  enrolledCourseController,
  sendCourseContentController,
  completeSectionController,
  sendAllCoursesUserController,
} = require("../controllers/userControllers");

const User = require("../schemas/userModel"); // ✅ Add this line

const router = express.Router();

// File upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4") {
      return callback(new Error("Only .mp4 videos are allowed"));
    }
    callback(null, true);
  }
});

// Auth routes
router.post("/register", registerController);
router.post("/login", loginController);

// Course creation with upload
router.post(
  "/addcourse",
  authMiddleware,
  upload.array("S_content"),
  postCourseController
);

// Get all courses (for students/public)
router.get("/getallcourses", getAllCoursesController);

// Get all courses created by teacher
router.get("/getallcoursesteacher", authMiddleware, getAllCoursesUserController);

// Delete course
router.delete("/deletecourse/:courseid", authMiddleware, deleteCourseController);

// Enroll to course (old method, keeping for reference)
router.post("/enrolledcourse/:courseid", authMiddleware, enrolledCourseController);

// Get course content
router.get("/coursecontent/:courseid", authMiddleware, sendCourseContentController);

// Mark section/module complete
router.post("/completemodule", authMiddleware, completeSectionController);

// Get all enrolled courses for user
router.get("/getallcoursesuser", authMiddleware, sendAllCoursesUserController);

// ✅ NEW: Enroll to course using userId and courseId (body params)
router.post("/enroll", async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      await user.save();
    }

    res.status(200).json({ success: true, message: "Enrolled successfully" });
  } catch (error) {
    console.error("Enrollment error:", error);
    res.status(500).json({ success: false, message: "Enrollment failed" });
  }
});

module.exports = router;
