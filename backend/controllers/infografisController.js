import db from "../db.js";

// CREATE
export const createInfografis = (req, res) => {
  const { kelompok, gambar } = req.body;

  if (!kelompok || !gambar) {
    return res.status(400).json({ error: "Data tidak lengkap" });
  }

  const q = `INSERT INTO infografis (kelompok, gambar) VALUES (?, ?)`;

  db.query(q, [kelompok, gambar], (err, result) => {
    if (err) return res.status(500).json({ error: "Gagal insert infografis" });

    return res.status(200).json({
      message: "Infografis berhasil disimpan",
      id: result.insertId,
    });
  });
};

// GET ALL
export const getAllInfografis = (req, res) => {
  db.query("SELECT * FROM infografis ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ error: "Gagal mengambil data infografis" });

    return res.status(200).json(result);
  });
};

// GET BY ID
export const getInfografisById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM infografis WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Gagal mengambil detail" });

    if (result.length === 0) {
      return res.status(404).json({ error: "Data tidak ditemukan" });
    }

    return res.status(200).json(result[0]);
  });
};

// UPDATE
export const updateInfografis = (req, res) => {
  const { id } = req.params;
  const { kelompok, gambar } = req.body;

  const q = `
      UPDATE infografis
      SET kelompok = ?, gambar = ?
      WHERE id = ?
  `;

  db.query(q, [kelompok, gambar, id], (err) => {
    if (err) return res.status(500).json({ error: "Gagal update infografis" });

    return res.status(200).json({ message: "Update berhasil" });
  });
};

// DELETE
export const deleteInfografis = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM infografis WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: "Gagal menghapus data" });

    return res.status(200).json({ message: "Berhasil dihapus" });
  });
};
