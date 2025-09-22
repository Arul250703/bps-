import React from "react";
import { FaUser, FaChevronDown } from "react-icons/fa";
import "../styles/Dashboard.css";
import smartStats from "../assets/logo3.png";
import totalPublikasi from "../assets/Vector.png";

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h2>Dashboard</h2>
          <p>Perhitungan & Pendataan</p>
        </div>
        <div className="admin-box">
          <FaUser className="admin-icon" />
          <span className="admin-text">Admin</span>
          <FaChevronDown className="admin-dropdown-icon" />
        </div>
      </div>

      {/* Cards */}
      <div className="cards">
        {/* Card Statistik */}
        <div className="card white">
          <div className="card-content">
            <img
              src={smartStats}
              alt="Statistik Cerdas"
              className="card-image"
            />
            <div className="card-text">
              <h3>Statistik Ringkas</h3>
              <p>Solusi Cerdas</p>
            </div>
          </div>
        </div>

        {/* Card Total Publikasi */}
        <div className="card blue">
          <div className="card-content">
            <div className="card-icon-container">
              <img
                src={totalPublikasi}
                alt="Total Publikasi"
                className="card-icon-blue"
              />
            </div>
            <div className="card-text-blue">
              <h4>Total Publikasi</h4>
              <p>Pemantauan jumlah publikasi secara realtime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary">
        <h3>
          Jumlah Ringkasan Publikasi Tahun{" "}
          <span className="current-year">2025</span>
        </h3>
        <div className="summary-box">
          <div className="summary-item">
            <p>SP2D</p>
            <span className="summary-number">009</span>
          </div>
          <div className="summary-item">
            <p>SPM</p>
            <span className="summary-number">027</span>
          </div>
          <div className="summary-item">
            <p>DRPP</p>
            <span className="summary-number">059</span>
          </div>
          <div className="summary-item">
            <p>SPBY</p>
            <span className="summary-number">101</span>
          </div>
        </div>
      </div>
    </div>
  );
}
