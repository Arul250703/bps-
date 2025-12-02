import db from "../db.js";
import multer from "multer";

// Multer simpan file di memory, bukan disk
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Ambil semua cover
export const getAllCovers = async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      "SELECT id, image_name, is_active, TO_BASE64(image) AS image_base64 FROM halaman_cover"
    );
    const data = rows.map(r => ({
      id: r.id,
      image_name: r.image_name,
      is_active: r.is_active,
      base64: `data:image/jpeg;base64,${r.image_base64}`
    }));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Upload cover baru
export const uploadCover = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "File tidak ada" });

    const sql = "INSERT INTO halaman_cover (image, image_name) VALUES (?, ?)";
    const [result] = await db.promise().query(sql, [file.buffer, file.originalname]);

    res.json({ message: "Gambar berhasil diupload ke database", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Set gambar aktif
export const setActiveCover = async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query("UPDATE halaman_cover SET is_active = 0");
    await db.promise().query("UPDATE halaman_cover SET is_active = 1 WHERE id = ?", [id]);
    res.json({ message: "Background berhasil diubah" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Hapus gambar
export const deleteCover = async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query("DELETE FROM halaman_cover WHERE id = ?", [id]);
    res.json({ message: "Gambar berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
