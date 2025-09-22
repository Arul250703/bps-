import React from "react";
import "../styles/CoverKerangka.css";

export default function CoverKerangka() {
  return (
    <div className="coverkerangka-page">
      {/* Header */}
      <div className="coverkerangka-header">
        <h2>Cover & Kerangka</h2>
        <p>Dokumentasi laporan & struktur kerangka</p>
      </div>

      {/* Content */}
      <div className="coverkerangka-content">
        <div className="cover-section">
          <h3>Cover Laporan</h3>
          <p>
            Halaman cover berisi judul, identitas penulis, instansi, dan tahun
            penyusunan.
          </p>
        </div>

        <div className="kerangka-section">
          <h3>Kerangka Laporan</h3>
          <ul>
            <li>Bab I – Pendahuluan</li>
            <li>Bab II – Tinjauan Pustaka</li>
            <li>Bab III – Metodologi</li>
            <li>Bab IV – Implementasi Sistem</li>
            <li>Bab V – Penutup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
