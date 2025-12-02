import express from "express";
import { getAllCovers, uploadCover, setActiveCover, deleteCover, upload } from "../controllers/halamanCoverController.js";

const router = express.Router();

router.get("/", getAllCovers);
router.post("/upload", upload.single("image"), uploadCover);
router.put("/set-active/:id", setActiveCover);
router.delete("/delete/:id", deleteCover); // route hapus

export default router;
