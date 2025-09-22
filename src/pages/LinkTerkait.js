import React from "react";
import "../styles/LinkTerkait.css";

export default function LinkTerkait() {
  const links = [
    { name: "Badan Pusat Statistik", url: "https://www.bps.go.id" },
    { name: "Kementerian Pariwisata", url: "https://www.kemenparekraf.go.id" },
    { name: "Pemerintah Kota Sukabumi", url: "https://sukabumikota.go.id" },
  ];

  return (
    <div className="link-page">
      <div className="link-header">
        <h2>Link Terkait</h2>
        <p>Kumpulan link penting terkait informasi wisata & instansi resmi</p>
      </div>

      <div className="link-list">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
