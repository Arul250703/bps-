import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import "../styles/InputData.css";

export default function InputData() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    gambar: null,
    judulNarasi: "",
    isiNarasi: "",
    pilihTabel: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, gambar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data lama di localStorage
    const existingData = JSON.parse(localStorage.getItem("dataTabel")) || [];

    // Tambahkan data baru
    const newData = {
      id: Date.now(),
      gambar: form.gambar ? form.gambar.name : "",
      judulNarasi: form.judulNarasi,
      isiNarasi: form.isiNarasi,
      pilihTabel: form.pilihTabel,
    };

    existingData.push(newData);
    localStorage.setItem("dataTabel", JSON.stringify(existingData));

    alert("Data berhasil disimpan!");
    navigate("/tabel"); // Arahkan ke halaman Tabel
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

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button className="btn-breadcrumb">INDIKATOR MAKRO</button>
        <button className="btn-breadcrumb">KEPENDUDUKAN</button>
        <input className="breadcrumb-input" value="JUMLAH PENDUDUK" readOnly />
        <button className="btn-kembali" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>

      {/* Form Input */}
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Gambar Sesuai Judul</label>
          <div className="file-group">
            <input type="file" accept="image/*" onChange={handleFile} />
          </div>
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

        <div className="form-group">
          <label>Pilih Tabel</label>
          <select
            name="pilihTabel"
            value={form.pilihTabel}
            onChange={handleChange}
            required
          >
            <option value="">-- Pilih Tabel --</option>
            <option value="Tabel 1">Tabel 1</option>
            <option value="Tabel 2">Tabel 2</option>
            <option value="Tabel 3">Tabel 3</option>
          </select>
        </div>

        <button type="submit" className="btn-simpan">
          Simpan
        </button>
      </form>
    </div>
  );
}
