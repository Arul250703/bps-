import React, { useState } from "react";
import "../styles/KelolaData.css";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function KelolaData() {
  const [kelompok, setKelompok] = useState("");
  const [indikator, setIndikator] = useState("");
  const [judul, setJudul] = useState("");
  const navigate = useNavigate();

  const kelompokOptions = [
    "INFOGRAFIS",
    "INDIKATOR MAKRO",
    "SEKILAS KOTA SUKABUMI",
  ];

  const indikatorOptions = {
    "INDIKATOR MAKRO": ["KEPENDUDUKAN", "KETENAGAKERJAAN", "KEMISKINAN",
      "PENDIDIKAN", "PEMBANGUNAN_MANUSIA", "PRODUK_DOMESTIK_REGIONAL_BRUTO", "KEUANGAN", "PERTANIAN_PERKEBUNAN", 
      "HARGA_INFLASI_NILAI_TUKAR_PETANI", "PERTAMBANGAN", "UPAH_MINIMUM_KABUPATEN"
    ],
    INFOGRAFIS: ["PENDIDIKAN", "KESEHATAN"],
    "SEKILAS KOTA SUKABUMI": ["LUAS WILAYAH", "JUMLAH KECAMATAN"],
  };

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
    PENDIDIKAN: [
      "ANGKA PARTISIPASI KASAR (APK)",
      "ANGKA PARTISIPASI MURNI (APM)",
      "ANGKA MELEKA HURUF (AMH)",
    ],
    PEMBANGUNAN_MANUSIA: [
      "INDEKS PEMBANGUNAN MANUSIA (IPM)",
      "ANGKA HARAPAN HIDUP (AHH)",  
      "RATA-RATA LAMA SEKOLAH (RLS)",
      "PENGELUARAN PENDIDIKAN PER KAPITA (PPK)",
    ],
    PRODUK_DOMESTIK_REGIONAL_BRUTO: [
      "PDRB ADHB LAPANGAN USAHA",
      "PDRB ADHK LAPANGAN USAHA",  
      "DISTRIBUSI PDRB ADHB LAPANGAN USAHA",
      "LAJU PETUMBUAHAN EKONOMI",
    ],

    KEUANGAN: [
      "DATA KEUANGAN DAERAH",
    ],

    PERTANIAN_PERKEBUNAN: [
      "TANAMAN PANGAN",
      "HORTIKULTURA",
      "PERKEBUNAN",
    ],
    HARGA_INFLASI_NILAI_TUKAR_PETANI: [
      "INFLASI",
      "INDEKS KEMAHALAN KONTRUKSI (IKK)",
      "NILAI TUKAR PETANI (NTP)",
    ],

    PERTAMBANGAN: [
      "PERTAMBANGAN",
    ],

    UPAH_MINIMUM_KABUPATEN: [
      "UPAH MINIMUM KABUPATEN (UMK)",
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
      <div className="header-row">
        <h2 className="title">KELOLA DATA</h2>
        <div className="admin-box">
          <FaUser className="user-icon" />
          <span>Admin</span>
          <FaChevronDown className="chevron" />
        </div>
      </div>

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
