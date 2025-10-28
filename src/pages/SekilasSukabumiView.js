import React from "react";
import "../styles/SekilasSukabumiView.css";

export default function SekilasSukabumiView() {
  const sekilas = {
    judul: "Sekilas Tentang Kota Sukabumi",
    isi: "Kota Sukabumi terletak di Provinsi Jawa Barat, dikenal dengan suasana sejuk, potensi wisata alam, dan pertumbuhan ekonomi yang stabil...",
  };

  return (
    <div className="sekilas-view">
      <h2>{sekilas.judul}</h2>
      <p>{sekilas.isi}</p>
    </div>
  );
}
