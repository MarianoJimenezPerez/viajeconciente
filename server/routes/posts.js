import express from "express";
import { addPost, getAllPosts, getPost } from "./../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("", addPost);

export default router;
