import React from "react";
import {
  FaHome,
  FaUsers,
  FaFileAlt,
  FaList,
  FaDatabase,
  FaTable,
  FaCaretDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/logo2.png";
import logoFooter from "../assets/logo.png";

export default function Sidebar() {
  const [kerangkaOpen, setKerangkaOpen] = React.useState(false);

  const toggleKerangka = () => {
    setKerangkaOpen(!kerangkaOpen);
  };

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

      {/* Divider */}
      <hr className="divider" />

      {/* Menu */}
      <ul className="menu">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/kelola-pengguna" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Kelola Pengguna</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cover-halaman-utama" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Cover Halaman Utama</span>
          </NavLink>
        </li>

        {/* Kerangka */}
        <li>
          <div className={`submenu-toggle ${kerangkaOpen ? "active" : ""}`} onClick={toggleKerangka}>
            <span>Kerangka</span> <FaCaretDown className="caret-icon" />
          </div>
          {kerangkaOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/kerangka/beranda-utama">Beranda Utama</NavLink>
              </li>
              <li>
                <NavLink to="/kerangka/data-utama">Data Utama</NavLink>
              </li>
              <li>
                <NavLink to="/kerangka/tema">Tema</NavLink>
              </li>
              <li>
                <NavLink to="/kerangka/tabel">Tabel</NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/kelola-data" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Kelola Data</span>
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
