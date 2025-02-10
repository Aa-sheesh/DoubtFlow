import express from "express";
import { getTimetable } from "../controllers/timetable.controller.js";

const router = express.Router();
router.get('/timetable', getTimetable);

export default router;
