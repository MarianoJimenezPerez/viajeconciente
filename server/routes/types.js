import express from "express";
import { getAllTypes } from "./../controllers/types.js";

const router = express.Router();

router.get("/", getAllTypes);

export default router;
