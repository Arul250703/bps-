import db from "../db.js";

// Mengambil semua data kelompok
export const getAllKelompokData = (req, res) => {
  // Pastikan nama kolom 'nama_kelompok' dan 'keterangan' sesuai dengan tabel Anda
  db.query("SELECT id, nama_kelompok, keterangan FROM kelompok_data", (err, results) => {
    if (err) {
      console.error("Error fetching all kelompok data:", err);
      return res.status(500).json({ error: "Gagal mengambil data kelompok" });
    }
    res.json(results);
  });
};

// Mengambil data kelompok berdasarkan ID (Opsional, tapi bagus untuk konsistensi)
export const getKelompokDataById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT id, nama_kelompok, keterangan FROM kelompok_data WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error(`Error fetching kelompok data ID ${id}:`, err);
        return res.status(500).json({ error: "Gagal mengambil kelompok data" });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Kelompok data tidak ditemukan" });
      }
      res.json(results[0]);
    }
  );
};

// Menambah data kelompok baru
export const createKelompokData = (req, res) => {
  const { kelompok, keterangan } = req.body;
  // Perhatikan: 'kelompok' di frontend di-map ke 'nama_kelompok' di database
  const sql = "INSERT INTO kelompok_data (nama_kelompok, keterangan) VALUES (?, ?)";
  db.query(sql, [kelompok, keterangan], (err, result) => {
    if (err) {
      console.error("Error creating kelompok data:", err);
      return res.status(500).json({ error: "Gagal menambahkan kelompok data" });
    }
    res.json({ message: "✅ Kelompok data berhasil ditambahkan", id: result.insertId });
  });
};

// Memperbarui data kelompok
export const updateKelompokData = (req, res) => {
  const { id } = req.params;
  const { kelompok, keterangan } = req.body;
  const sql = "UPDATE kelompok_data SET nama_kelompok = ?, keterangan = ? WHERE id = ?";
  db.query(sql, [kelompok, keterangan, id], (err) => {
    if (err) {
      console.error(`Error updating kelompok data ID ${id}:`, err);
      return res.status(500).json({ error: "Gagal memperbarui kelompok data" });
    }
    res.json({ message: "✅ Kelompok data berhasil diperbarui" });
  });
};

// Menghapus data kelompok
export const deleteKelompokData = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM kelompok_data WHERE id = ?", [id], (err) => {
    if (err) {
      console.error(`Error deleting kelompok data ID ${id}:`, err);
      return res.status(500).json({ error: "Gagal menghapus kelompok data" });
    }
    res.json({ message: "🗑️ Kelompok data berhasil dihapus" });
  });
};