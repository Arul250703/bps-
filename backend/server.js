import express from "express";
import cors from "cors";
import path from "path"; // <-- penting!
import { fileURLToPath } from "url"; // <-- untuk __dirname

import temaRoutes from "./routes/temaRoutes.js";
import kelompokDataRoutes from "./routes/kelompokDataRoutes.js";
import inputDataRoutes from "./routes/inputDataRoutes.js";
import sekilasRoutes from "./routes/sekilasRoutes.js";
import infografisRoutes from "./routes/infografisRoutes.js";
import halamanCoverRoutes from "./routes/halamanCoverRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/tema", temaRoutes);
app.use("/kelompok", kelompokDataRoutes);
app.use("/api", inputDataRoutes);
app.use("/infografis", infografisRoutes);
app.use("/api", sekilasRoutes);

// folder uploads untuk file statis
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/halaman-cover", halamanCoverRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
