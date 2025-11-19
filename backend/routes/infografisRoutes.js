import express from "express";
import {
  createInfografis,
  getAllInfografis,
  getInfografisById,
  updateInfografis,
  deleteInfografis,
} from "../controllers/infografisController.js";

const router = express.Router();

router.post("/", createInfografis);        // CREATE
router.get("/", getAllInfografis);         // GET ALL
router.get("/:id", getInfografisById);     // GET BY ID
router.put("/:id", updateInfografis);      // UPDATE
router.delete("/:id", deleteInfografis);   // DELETE

export default router;
