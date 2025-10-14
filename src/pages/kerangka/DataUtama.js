import React from "react";
import { FaPlusCircle, FaEdit, FaTrash, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./../../styles/DataUtama.css";

function DataUtama() {
  const navigate = useNavigate();

  const data = [
    { id: 1, indikator: "KEPENDUDUKAN" },
    { id: 2, indikator: "KETENAGAKERJAAN" },
    { id: 3, indikator: "KEMISKINAN" },
    { id: 4, indikator: "PENDIDIKAN" },
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
                <td>{row.indikator}</td>
                <td></td>
                {/* <td className="aksi-icons">
                  <FaPlusCircle className="icon tambah" title="Tambah" />
                  <FaEdit className="icon edit" title="Edit" />
                  <FaTrash className="icon hapus" title="Hapus" />
                  <FaExternalLinkAlt className="icon buka" title="Lihat" />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataUtama;
