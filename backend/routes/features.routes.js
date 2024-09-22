import express from "express";
import { writ_text_to_file } from "../controllers/features.controller.js";

// express router
const router = express.Router();

// POST request to write text to a file
router.post("/write/to_json", writ_text_to_file);

export default router;
