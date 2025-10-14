import React from "react";
import "../styles/KelolaData.css";
import { FaPlus, FaEdit, FaTrash, FaUser, FaChevronDown } from "react-icons/fa";

export default function KelolaData() {
  const data = [
    { id: 1, judul: "JUMLAH PENDUDUK LAKI-LAKI PEREMPUAN" },
    { id: 2, judul: "" },
    { id: 3, judul: "" },
    { id: 4, judul: "" },
  ];

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

      {/* Tombol kembali */}
      <div className="back-btn-container">
        <button className="back-btn">Kembali</button>
      </div>

      {/* Tabel */}
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="no-header">NO</th>
              <th className="judul-header">JUDUL NARASI</th>
              <th className="aksi-header">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.judul}</td>
                <td className="aksi-col">
                  <button className="icon-btn plus"><FaPlus /></button>
                  <button className="icon-btn edit"><FaEdit /></button>
                  <button className="icon-btn delete"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
