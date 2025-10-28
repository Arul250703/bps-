import React from "react";
import "../styles/InfografisView.css";

export default function InfografisView() {
  const infografisData = [
    { id: 1, title: "Pendidikan di Sukabumi", image: "/images/infografis1.jpg" },
    { id: 2, title: "Kesehatan Masyarakat", image: "/images/infografis2.jpg" },
  ];

  return (
    <div className="infografis-view">
      <h2>Infografis Kota Sukabumi</h2>
      <div className="infografis-grid">
        {infografisData.map((item) => (
          <div key={item.id} className="infografis-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
