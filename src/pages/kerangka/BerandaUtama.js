import React from "react";
import "../../styles/BerandaUtama.css";

export default function BerandaUtama() {
  const data = [
    { id: 1, kelompok: "INFOGRAFIS", keterangan: "" },
    { id: 2, kelompok: "INDIKATOR MAKRO", keterangan: "" },
    { id: 3, kelompok: "SEKILAS KOTA SUKABUMI", keterangan: "" },
  ];

  return (
    <div className="beranda-container">
      {/* Header */}
      <div className="beranda-header">
        <div className="title-box">
          <h2>
          <span style={{ color: "#0056b3" }}>KERANGKA</span> <br />
          BERANDA UTAMA
        </h2>
        </div>

        <div className="admin-box">
          <div className="admin-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Admin"
              className="admin-avatar"
            />
            <span className="admin-name">Admin</span>
          </div>
          <button className="btn-kembali">Kembali</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="beranda-table">
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.kelompok}</td>
                <td>{item.keterangan}</td>
                <td>
                  {/* <div className="aksi-icons">
                    <FaEye className="icon view" title="Lihat" />
                    <FaEdit className="icon edit" title="Edit" />
                    <FaTrash className="icon delete" title="Hapus" />
                  </div> */}
                </td>
              </tr>
            ))}
            {/* Tambahkan baris kosong agar sesuai mockup */}
            <tr>
              <td colSpan="4" style={{ height: "40px" }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
