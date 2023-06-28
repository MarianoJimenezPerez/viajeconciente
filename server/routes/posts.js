import express from "express";
import {
  addPost,
  getAllPosts,
  getPost,
  getAllNews,
  getAllBlogs,
  getQPost,
  searchPosts,
  getPostsByCategory,
  getPostsByType,
  getPostsBySlug,
} from "./../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/search", searchPosts);
router.get("/news", getAllNews);
router.get("/blogs", getAllBlogs);
router.get("/quantity/:quantity", getQPost);
router.get("/category/:categoryId", getPostsByCategory);
router.get("/type/:typeId", getPostsByType);
router.get("/slug/:slug", getPostsBySlug);
router.get("/:id", getPost);

router.post("", addPost);

export default router;
