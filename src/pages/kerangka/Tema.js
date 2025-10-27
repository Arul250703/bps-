import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../../styles/Tema.css";

function Tema() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Daftar indikator dari Data Utama
  const indikatorList = {
    1: "Kependudukan",
    2: "Ketenagakerjaan",
    3: "Kemiskinan",
    4: "Pendidikan",
    5: "Pembangunan Manusia",
  };

  // Data tema berdasarkan ID
  const temaData = {
    1: [
      { id: 1, judul: "Jumlah Penduduk" },
      { id: 2, judul: "Kelompok Umur" },
      { id: 3, judul: "Laju Pertumbuhan Penduduk" },
      { id: 4, judul: "Rasio Jenis Kelamin" },
      { id: 5, judul: "Rasio Ketergantungan" },
    ],
    2: [
      { id: 1, judul: "Angkatan Kerja" },
      { id: 2, judul: "Tingkat Partisipasi Angkatan Kerja (TPAK)" },
      { id: 3, judul: "Tingkat Pengangguran Terbuka (TPT)" },
    ],
    3: [
      { id: 1, judul: "Penduduk Miskin" },
      { id: 2, judul: "Garis Kemiskinan" },
      { id: 3, judul: "Indeks Kedalaman Kemiskinan (P1)" },
    ],
    4: [
      { id: 1, judul: "Angka Partisipasi Kasar (APK)" },
      { id: 2, judul: "Angka Partisipasi Murni (APM)" },
      { id: 3, judul: "Angka Melek Huruf (AMH)" },
    ],
    5: [
      { id: 1, judul: "Indeks Pembangunan Manusia (IPM)" },
      { id: 2, judul: "Umur Harapan Hidup (UHH)" },
      { id: 3, judul: "Harapan Lama Sekolah (HLS)" },
      { id: 4, judul: "Rata-rata Lama Sekolah (RLS)" },
      { id: 5, judul: "Pengeluaran Per Kapita (PPK)" },
    ],
  };

  const indikator = indikatorList[id];
  const data = temaData[id] || [];

  const handleRowClick = (judul) => {
    navigate("/kerangka/tabel", { state: { judul, indikator } });
  };

  return (
    <div className="tema-container">
      {/* Header */}
      <div className="tema-header">
        <h2>
          <span style={{ color: "#0056b3" }}>KERANGKA</span> <br />
          TEMA{" "}
          {indikator && (
            <span style={{ color: "#009846" }}>{indikator.toUpperCase()}</span>
          )}
        </h2>

        <div className="admin-box">
          <div className="admin-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Admin"
              className="admin-avatar"
            />
            <span>Admin</span>
          </div>
          <button className="btn-kembali" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="tema-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>JUDUL</th>
              <th>KETERANGAN</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row) => (
                <tr key={row.id} onClick={() => handleRowClick(row.judul)} style={{ cursor: "pointer" }}>
                  <td>{row.id}</td>
                  <td className="judul-link">{row.judul}</td>
                  <td></td>
                  <td className="aksi-icons"></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Data belum tersedia untuk indikator ini.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tema;
