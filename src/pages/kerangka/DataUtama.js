import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./../../styles/DataUtama.css";

function DataUtama() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const data = [
    { id: 1, indikator: "KEPENDUDUKAN" },
    { id: 2, indikator: "KETENAGAKERJAAN" },
    { id: 3, indikator: "KEMISKINAN" },
    { id: 4, indikator: "PENDIDIKAN" },
    { id: 5, indikator: "PEMBANGUNAN MANUSIA" },
    { id: 6, indikator: "PRODUK DOMESTIK REGIONAL BRUTO (PDRB)" },
    { id: 7, indikator: "KEUANGAN" },
    { id: 8, indikator: "PERTANIAN DAN PERKEBUNAN" },
    { id: 9, indikator: "HARGA INFLASI NILAI TUKAR PETANI" },
    { id: 10, indikator: "PERTAMBANGAN" },
    { id: 11, indikator: "UPAH MINIMUM KABUPATEN (UMK)" },
  ];

  return (
    <div className="datautama-container">
      {/* Header */}
      <div className="datautama-header">
        <h2>
          <span style={{ color: "#0056b3" }}>KERANGKA</span> <br />
          DATA UTAMA
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
        <table className="datautama-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>INDIKATOR</th>
              <th>KETERANGAN</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td
                  onClick={() => navigate(`/kerangka/tema/${row.id}`)}
                  style={{ cursor: "pointer", }}
                >
                  {row.indikator}
                </td>
                <td></td>
                <td className="aksi-icons">
                  <div className="aksi-wrapper">
                    <FaEllipsisV
                      className="aksi-trigger"
                      title="Menu Aksi"
                      onClick={() => toggleDropdown(row.id)}
                    />
                    {openDropdown === row.id && (
                      <ul className="dropdown-menu">
                        <li><button className="dropdown-item">Tambah</button></li>
                        <li><button className="dropdown-item">Edit</button></li>
                        <li><button className="dropdown-item">Hapus</button></li>
                        <li><button className="dropdown-item">Lihat</button></li>
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataUtama;
