import React from 'react';
import { FaPlusCircle, FaEdit, FaTrashAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../../styles/HalamanUtama.css';

const data = [
  { no: 1, kelompok: 'INFOGRAFIS', keterangan: '' },
  { no: 2, kelompok: 'INDIKATOR MAKRO', keterangan: '' },
  { no: 3, kelompok: 'SEKILAS KOTA SUKABUMI', keterangan: '' },
];

export default function HalamanUtama() {
  const handleKembali = () => {
    // Implementasi untuk tombol kembali
    // Contoh: window.history.back(); atau navigasi menggunakan useNavigate dari react-router-dom
    console.log('Tombol Kembali ditekan');
  };

  return (
    <div className="halaman-utama-container">
      {/* Header Halaman */}
      <div className="halaman-utama-header">
        <h2 className="page-title">KERANGKA BERANDA UTAMA</h2>
        <div className="header-actions">
          <div className="admin-profile">
            <FaExternalLinkAlt className="admin-icon" />
            <span>Admin</span>
          </div>
          <button className="btn-kembali" onClick={handleKembali}>
            Kembali
          </button>
        </div>
      </div>

      {/* Konten Tabel */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>KELOMPOK</th>
              <th>KETERANGAN</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.kelompok}</td>
                <td>{item.keterangan}</td>
                <td className="aksi-cell">
                  <button className="btn-icon">
                    <FaPlusCircle className="add-icon" />
                  </button>
                  <button className="btn-icon">
                    <FaEdit className="edit-icon" />
                  </button>
                  <button className="btn-icon">
                    <FaTrashAlt className="delete-icon" />
                  </button>
                  <button className="btn-icon">
                    <FaExternalLinkAlt className="external-link-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}