import React from "react";
import { FaHome, FaUsers, FaDatabase, FaCity, FaLink } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/logo2.png";
import logoFooter from "../assets/logo.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <div className="header-text">
          <h3>CERDAS</h3>
          <p>Cek Ringkasan Data Statistik Kota Sukabumi</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Menu */}
      <ul className="menu">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaHome className="icon" /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/kelola-pengguna" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaUsers className="icon" /> <span>Kelola Pengguna</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cover-kerangka" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaDatabase className="icon" /> <span>Cover & Kerangka</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/kelola-data" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaDatabase className="icon" /> <span>Kelola Data</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tentang" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaCity className="icon" /> <span>Tentang Kota Sukabumi</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/link-terkait" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaLink className="icon" /> <span>Link Terkait</span>
          </NavLink>
        </li>
      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <img src={logoFooter} alt="Logo Footer" className="sidebar-footer-logo" />
        <p>BADAN PUSAT STATISTIK</p>
        <p>KOTA SUKABUMI</p>
      </div>
    </div>
  );
}
