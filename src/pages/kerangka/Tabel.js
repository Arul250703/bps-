import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../styles/Table.css"; // pastikan file css ini sesuai nama kamu

export default function Tabel() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { id_tema } = location.state || {};

  useEffect(() => {
    if (id_tema) {
      axios
        .get(`http://localhost:5000/api/data_input/${id_tema}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error("❌ Gagal ambil data:", err));
    } else {
      axios
        .get("http://localhost:5000/api/data_input")
        .then((res) => setData(res.data))
        .catch((err) => console.error("❌ Gagal ambil semua data:", err));
    }
  }, [id_tema]);

  return (
    <div className="tabel-container">

      {/* Header */}
      <div className="header-row">
        <div className="title-section">
          <h2 className="title">
            <span className="title-icon">📊</span>
            Data Input (Isi Tabel)
          </h2>
          <p className="subtitle">Semua data narasi, tema, kelompok, dan gambar</p>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Kelompok</th>
              <th>Tema</th>
              <th>Judul Narasi</th>
              <th>Isi Narasi</th>
              <th>Gambar</th>
              <th>Tanggal Dibuat</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id}>
                  <td align="center">{index + 1}</td>
                  <td className="kelompok">{item.kelompok || "-"}</td>
                  <td className="tema">{item.tema || "-"}</td>

                  <td className="narasi-title-cell">{item.judulNarasi || "-"}</td>

                  <td className="narasi-content-cell isi-narasi-cell">
                    {item.isiNarasi || "-"}
                  </td>

                  <td align="center">
                    {item.gambar ? (
                      <img
                        src={item.gambar}
                        alt="gambar"
                        className="table-img"
                      />
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="tanggal">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data-message">
                  Belum ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
