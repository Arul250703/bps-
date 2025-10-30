import React, { useEffect, useState } from "react";
import "../styles/InfografisView.css";

export default function InfografisView() {
  const [dataInfografis, setDataInfografis] = useState([]);

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("dataTabel")) || [];
    const filtered = allData.filter((item) => item.kelompok === "INFOGRAFIS");
    setDataInfografis(filtered);
  }, []);

  return (
    <div className="infografis-container">
      <h2 className="infografis-title">Data Infografis</h2>

      {dataInfografis.length === 0 ? (
        <p className="no-data">Belum ada data infografis yang disimpan.</p>
      ) : (
        <div className="infografis-grid">
          {dataInfografis.map((item) => (
            <div className="infografis-card" key={item.id}>
              {item.gambar && <img src={item.gambar} alt="Infografis" className="infografis-img" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
