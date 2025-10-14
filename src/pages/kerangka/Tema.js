import React from "react";
import { FaPlusCircle, FaEdit, FaTrash, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./../../styles/Tema.css";

function Tema() {
  const navigate = useNavigate();

  const data = [
    { id: 1, judul: "JUMLAH PENDUDUK" },
    { id: 2, judul: "KELOMPOK UMUR" },
    { id: 3, judul: "LAJU PERTUMBUHAN" },
    { id: 4, judul: "RASIO JENIS KELAMIN" },
  ];

  return (
    <div className="tema-container">
      {/* Header */}
      <div className="tema-header">
        <h2>
          <span style={{ color: "#0056b3" }}>KERANGKA</span> <br />
          TEMA
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
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.judul}</td>
                <td></td>
                <td className="aksi-icons">
                  {/* <FaPlusCircle className="icon tambah" title="Tambah" />
                  <FaEdit className="icon edit" title="Edit" />
                  <FaTrash className="icon hapus" title="Hapus" />
                  <FaExternalLinkAlt className="icon buka" title="Lihat" /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tema;
