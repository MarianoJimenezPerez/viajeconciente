import express from "express";
import {
  addPost,
  getAllPosts,
  getPost,
  getAllNews,
  getAllBlogs,
} from "./../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/news", getAllNews);
router.get("/blogs", getAllBlogs);
router.get("/:id", getPost);

router.post("", addPost);

export default router;
