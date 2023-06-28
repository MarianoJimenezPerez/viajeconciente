import express from "express";
import { getAllCategories, getCategory } from "./../controllers/categories.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategory);
export default router;
