import React, { useState } from "react";
import "../styles/KelolaData.css";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function KelolaData() {
  const [kelompok, setKelompok] = useState("");
  const [indikator, setIndikator] = useState("");
  const [judul, setJudul] = useState("");
  const navigate = useNavigate();

  // Data Kelompok
  const kelompokOptions = [
    "INFOGRAFIS",
    "INDIKATOR MAKRO",
    "SEKILAS KOTA SUKABUMI",
  ];

  // Data Indikator
  const indikatorOptions = {
    "INDIKATOR MAKRO":
     ["KEPENDUDUKAN",
      "KETENAGAKERJAAN", 
      "KEMISKINAN"
     ],
    INFOGRAFIS: ["PENDIDIKAN", 

    ],
    "SEKILAS KOTA SUKABUMI": ["LUAS WILAYAH", "JUMLAH KECAMATAN"],
  };

  // Data Judul Konten
  const judulOptions = {
    KEPENDUDUKAN: [
      "JUMLAH PENDUDUK",
      "KELOMPOK UMUR",
      "LAJU PERTUMBUHAN",
      "RASIO JENIS KELAMIN",
    ],
    KETENAGAKERJAAN: [
      "ANGKATAN KERJA",
      "TPAK (TINGKAT PARTISIPASI ANGKATAN KERJA)",
      "TPT (TINGKAT PENGANGGURAN TERBUKA)",
    ],
    KEMISKINAN: [
      "PENDUDUK MISKIN",
      "GARIS KEMISKINAN",
      "INDEKS KEDALAMAN KEMISKINAN (P1)",
    ],
  };

  const handleInput = () => {
    if (kelompok && indikator && judul) {
      navigate("/input-data", {
        state: { kelompok, indikator, judul },
      });
    } else {
      alert("Silakan pilih semua field terlebih dahulu!");
    }
  };

  return (
    <div className="kelola-container">
      {/* Header */}
      <div className="header-row">
        <h2 className="title">KELOLA DATA</h2>
        <div className="admin-box">
          <FaUser className="user-icon" />
          <span>Admin</span>
          <FaChevronDown className="chevron" />
        </div>
      </div>

      {/* Form Pilihan */}
      <div className="kelola-form">
        <div className="form-group">
          <label>Kelompok</label>
          <select
            value={kelompok}
            onChange={(e) => {
              setKelompok(e.target.value);
              setIndikator("");
              setJudul("");
            }}
          >
            <option value="">-- Pilih Kelompok --</option>
            {kelompokOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Indikator</label>
          <select
            value={indikator}
            onChange={(e) => {
              setIndikator(e.target.value);
              setJudul("");
            }}
            disabled={!kelompok}
          >
            <option value="">-- Pilih Indikator --</option>
            {kelompok &&
              indikatorOptions[kelompok]?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label>Judul Konten</label>
          <select
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            disabled={!indikator}
          >
            <option value="">-- Pilih Judul Konten --</option>
            {indikator &&
              judulOptions[indikator]?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        <button
          className="btn-input"
          onClick={handleInput}
          disabled={!kelompok || !indikator || !judul}
        >
          Input Data
        </button>
      </div>
    </div>
  );
}
