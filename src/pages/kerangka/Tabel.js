import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import "../../styles/Table.css";

export default function Tabel() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil data yang dikirim dari Tema.jsx
  const { judul, indikator } = location.state || {};

  useEffect(() => {
    // Ambil semua data dari localStorage
    const storedData = JSON.parse(localStorage.getItem("dataTabel")) || [];

    // Kalau ada judul dikirim dari Tema.jsx, filter berdasarkan judul tersebut
    if (judul) {
      const filteredData = storedData.filter(
        (item) => item.pilihTabel === judul
      );
      setData(filteredData);
    } else {
      setData(storedData);
    }
  }, [judul]);

  return (
    <div className="tabel-container">
      {/* Header */}
      <div className="header-row">
        <div>
          <h2 className="title">
            {judul ? `TABEL: ${judul.toUpperCase()}` : "TABEL DATA"}
          </h2>
          {indikator && (
            <p style={{ color: "#009846", marginTop: "-5px" }}>
              Indikator: {indikator}
            </p>
          )}
        </div>

        <div className="admin-box">
          <FaUser className="user-icon" />
          <span>Admin</span>
          <FaChevronDown className="chevron" />
        </div>
      </div>

      {/* Tombol kembali */}
      <button className="btn-kembali" onClick={() => navigate(-1)}>
        Kembali
      </button>

      {/* Tabel */}
      <table className="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>Judul Narasi</th>
            <th>Isi Narasi</th>
            <th>Pilih Tabel</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Belum ada data untuk tema ini.
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  {item.gambar ? (
                    <img
                      src={item.gambar}
                      alt="Gambar"
                      style={{ width: "60px", borderRadius: "6px" }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{item.judulNarasi}</td>
                <td>{item.isiNarasi}</td>
                <td>{item.pilihTabel}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
