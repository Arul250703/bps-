import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaEdit, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import "../../styles/HalamanUtama.css";

// ============================
//     MODAL WITH ICON INPUT
// ============================
const Modal = ({ isOpen, onClose, itemData, onSave }) => {
  const [kelompok, setKelompok] = useState(itemData ? itemData.kelompok : "");
  const [keterangan, setKeterangan] = useState(itemData ? itemData.keterangan : "");
  const [icon, setIcon] = useState(itemData ? itemData.icon : "");

  const isNew = !itemData;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSave = {
      ...(itemData && { id: itemData.id }),
      kelompok: kelompok.toUpperCase(),
      keterangan: keterangan,
      icon: icon, // 🔥 ICON dikirim ke backend
    };

    onSave(dataToSave, isNew);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{isNew ? "Tambah Kelompok Data Baru" : "Edit Kelompok Data"}</h3>

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Nama Kelompok</label>
            <input
              type="text"
              value={kelompok}
              onChange={(e) => setKelompok(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Keterangan</label>
            <input
              type="text"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              required
            />
          </div>

          {/* 🔥 FIELD BARU UNTUK ICON */}
          <div className="form-group">
            <label>Nama Icon (React Icons)</label>
            <input
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              placeholder="Contoh: FaBeer.jpg"
              required
            />
          </div>

          <button type="submit" className="btn-save">
            {isNew ? "Simpan Kelompok Baru" : "Update Kelompok"}
          </button>

          <button type="button" className="btn-cancel" onClick={onClose}>
            Batal
          </button>
        </form>
      </div>
    </div>
  );
};

// ============================
//     HALAMAN UTAMA
// ============================
export default function HalamanUtama() {
  const [listData, setListData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const navigate = useNavigate();

  const fetchDataKelompok = async () => {
    try {
      const res = await axios.get("http://localhost:5000/kelompok");

      const formattedData = res.data.map(item => ({
        id: item.id,
        kelompok: item.nama_kelompok,
        keterangan: item.keterangan,
      }));

      setListData(formattedData);
    } catch (err) {
      alert("⚠️ Gagal mengambil data dari server!");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDataKelompok();
  }, []);

  const handleSave = async (dataToSave, isNew) => {
    try {
      if (isNew) {
        await axios.post("http://localhost:5000/kelompok", dataToSave);
        alert("Kelompok berhasil ditambahkan!");
      } else {
        await axios.put(`http://localhost:5000/kelompok/${dataToSave.id}`, dataToSave);
        alert("Kelompok berhasil diperbarui!");
      }

      fetchDataKelompok();
    } catch (err) {
      alert("⚠️ Gagal menyimpan!");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus data ini?")) return;

    try {
      await axios.delete(`http://localhost:5000/kelompok/${id}`);
      alert("Berhasil dihapus!");
      fetchDataKelompok();
    } catch (err) {
      alert("⚠️ Gagal menghapus!");
      console.error(err);
    }
  };

  const handleOpenModal = (item = null) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleClick = (kelompok) => {
    navigate("/infografis-view", { state: { kelompokNama: kelompok } });
  };

  return (
    <div className="halaman-utama-container">
      <div className="halaman-utama-header">
        <h2 className="page-title">KERANGKA BERANDA UTAMA</h2>

        <div className="header-actions">
          <button className="btn-tambah" onClick={() => handleOpenModal(null)}>
            <FaPlusCircle /> Tambah Kelompok
          </button>

          <div className="admin-profile">
            <FaExternalLinkAlt /> <span>Admin</span>
          </div>

          <button className="btn-kembali" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
      </div>

      {/* TABEL */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>KELOMPOK</th>
              <th>KETERANGAN</th>
              <th>AKSI</th>
            </tr>
          </thead>

          <tbody>
            {listData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.kelompok}</td>
                <td>{item.keterangan}</td>

                {/* 🔥 MUNCULKAN ICON */}


                <td className="aksi-cell">
                  <button className="btn-icon view-btn" onClick={() => handleClick(item.kelompok)}>
                    <FaExternalLinkAlt />
                  </button>

                  <button className="btn-icon edit-btn" onClick={() => handleOpenModal(item)}>
                    <FaEdit />
                  </button>

                  <button className="btn-icon delete-btn" onClick={() => handleDelete(item.id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemData={editingItem}
        onSave={handleSave}
      />
    </div>
  );
}
