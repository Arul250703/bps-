import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import "../styles/InputData.css";

export default function InputData() {
  const navigate = useNavigate();
  const location = useLocation();
  const { kelompok, indikator, judul } = location.state || {};

  const [form, setForm] = useState({
    gambar: null,
    judulNarasi: "",
    isiNarasi: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, gambar: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("dataTabel")) || [];

    const newData = {
      id: Date.now(),
      kelompok,
      indikator,
      judul, // Ini yang akan digunakan untuk filter di Tema
      gambar: form.gambar,
      judulNarasi: form.judulNarasi,
      isiNarasi: form.isiNarasi,
      // Tambahkan field untuk memudahkan filtering
      indikatorId: getIndikatorId(indikator), // Untuk relasi dengan halaman Tema
    };

    existingData.push(newData);
    localStorage.setItem("dataTabel", JSON.stringify(existingData));

<<<<<<< HEAD
    alert(`Data berhasil disimpan ke tema: ${judul}`);
    navigate("/kelola-data"); // Kembali ke halaman kelola data
  };

  // Helper function untuk mapping indikator ke ID
  const getIndikatorId = (indikatorName) => {
    const indikatorMap = {
      "KEPENDUDUKAN": 1,
      "KETENAGAKERJAAN": 2,
      "KEMISKINAN": 3,
      "PENDIDIKAN": 4,
      "PEMBANGUNAN_MANUSIA": 5,
      "PRODUK_DOMESTIK_REGIONAL_BRUTO": 6,
      "KEUANGAN": 7,
      "PERTANIAN_PERKEBUNAN": 8,
      "HARGA_INFLASI_NILAI_TUKAR_PETANI": 9,
      "PERTAMBANGAN": 10,
      "UPAH_MINIMUM_KABUPATEN": 11,
    };
    return indikatorMap[indikatorName] || null;
=======
    alert("Data berhasil disimpan!");
    navigate("/kerangka/tabel"); // Arahkan ke halaman Tabel
>>>>>>> 29753cabf37dc562ee745df9bfeeb17ca13e5cf2
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

      <div className="breadcrumb">
        <button className="btn-breadcrumb">{kelompok}</button>
        <button className="btn-breadcrumb">{indikator}</button>
        <input className="breadcrumb-input" value={judul} readOnly />
        <button className="btn-kembali" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>

      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Gambar Sesuai Judul</label>
          <input type="file" accept="image/*" onChange={handleFile} />
        </div>

        <div className="form-group">
          <label>Judul Narasi</label>
          <input
            type="text"
            name="judulNarasi"
            value={form.judulNarasi}
            onChange={handleChange}
            placeholder="Masukkan judul narasi"
            required
          />
        </div>

        <div className="form-group">
          <label>Isi Narasi</label>
          <textarea
            name="isiNarasi"
            value={form.isiNarasi}
            onChange={handleChange}
            placeholder="Masukkan isi narasi"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-simpan">
          Simpan
        </button>
      </form>
    </div>
  );
}
