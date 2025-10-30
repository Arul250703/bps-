import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaEdit, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import "../../styles/HalamanUtama.css";

const data = [
  { no: 1, kelompok: "INFOGRAFIS", keterangan: "Berisi gambar dan data visual." },
  { no: 2, kelompok: "INDIKATOR MAKRO", keterangan: "Menampilkan data makro ekonomi." },
  { no: 3, kelompok: "SEKILAS KOTA SUKABUMI", keterangan: "Berisi narasi umum tentang kota." },
];

export default function HalamanUtama() {
  const navigate = useNavigate();

  const handleClick = (kelompok) => {
    if (kelompok === "INFOGRAFIS") {
      navigate("/infografis-view");
    } else if (kelompok === "INDIKATOR MAKRO") {
      navigate("/kerangka/data-utama");
    } else if (kelompok === "SEKILAS KOTA SUKABUMI") {
      navigate("/sekilas-sukabumi-view");
    }
  };

  return (
    <div className="halaman-utama-container">
      <div className="halaman-utama-header">
        <h2 className="page-title">KERANGKA BERANDA UTAMA</h2>
        <div className="header-actions">
          <div className="admin-profile">
            <FaExternalLinkAlt className="admin-icon" />
            <span>Admin</span>
          </div>
          <button className="btn-kembali" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
      </div>

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
                  <button className="btn-icon" onClick={() => handleClick(item.kelompok)}>
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
