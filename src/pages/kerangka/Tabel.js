import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import "../../styles/Table.css";

export default function Tabel() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { judul, indikator } = location.state || {};

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataTabel")) || [];
    
    if (judul) {
      // Filter data berdasarkan judul yang dipilih
      const filteredData = storedData.filter(item => item.judul === judul);
      setData(filteredData);
    } else {
      setData(storedData);
    }
  }, [judul]);

  return (
    <div className="tabel-container">
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

      <button className="btn-kembali" onClick={() => navigate(-1)}>
        Kembali
      </button>

      <div className="table-info">
        <p>Menampilkan {data.length} data untuk: <strong>{judul}</strong></p>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>Judul Narasi</th>
            <th>Isi Narasi</th>
            <th>Kelompok</th>
            <th>Indikator</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
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
                      style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{item.judulNarasi}</td>
                <td className="isi-narasi-cell">
                  {item.isiNarasi.length > 100 
                    ? `${item.isiNarasi.substring(0, 100)}...` 
                    : item.isiNarasi
                  }
                </td>
                <td>{item.kelompok}</td>
                <td>{item.indikator}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}