import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SekilasSukabumiView.css";

export default function SekilasSukabumiView() {
  const navigate = useNavigate();
  const [dataSekilas, setDataSekilas] = useState([]);

  useEffect(() => {
    // Ambil semua data dari localStorage
    const storedData = JSON.parse(localStorage.getItem("dataTabel")) || [];

    // Filter hanya yang kelompoknya "SEKILAS KOTA SUKABUMI"
    const filteredData = storedData.filter(
      (item) => item.kelompok === "SEKILAS KOTA SUKABUMI"
    );

    setDataSekilas(filteredData);
  }, []);

  return (
    <div className="sekilas-container">
      <div className="sekilas-header">
        <h2>
          SEKILAS <span>KOTA SUKABUMI</span>
        </h2>
        <button className="btn-kembali" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>

      {dataSekilas.length === 0 ? (
        <p className="no-data">Belum ada data Sekilas Kota Sukabumi.</p>
      ) : (
        <div className="sekilas-list">
          {dataSekilas.map((item) => (
            <div key={item.id} className="sekilas-card">
              <h3>{item.judulNarasi}</h3>
              <p>{item.isiNarasi}</p>
              {item.gambar && (
                <img
                  src={item.gambar}
                  alt={item.judulNarasi}
                  className="sekilas-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
