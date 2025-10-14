import React from "react";
import { FaUser, FaChevronDown } from "react-icons/fa";
import smartStats from "../assets/logo3.png"; // gambar statistik
import "../styles/Dashboard.css";


export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">DASHBOARD</h2>

        <div className="admin-box">
          <FaUser className="admin-icon" />
          <span className="admin-text">Admin</span>
          <FaChevronDown className="admin-dropdown" />
        </div>
      </div>

      {/* Card */}
      <div className="dashboard-card">
        <img src={smartStats} alt="Statistik" className="dashboard-image" />
        <p className="dashboard-text">
          <span>Statistik Ringkas,</span>
          <br />
          <span>Solusi Cerdas</span>
        </p>
      </div>
    </div>
  );
}
