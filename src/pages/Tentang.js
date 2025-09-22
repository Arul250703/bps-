import React from "react";
import "../styles/Tentang.css";

export default function Tentang() {
  return (
    <div className="tentang-page">
      {/* Header */}
      <div className="tentang-header">
        <h2>Tentang Aplikasi</h2>
        <p>Informasi singkat mengenai sistem Barokah Tour & Travel</p>
      </div>

      {/* Content */}
      <div className="tentang-content">
        <section className="card">
          <h3>Profil</h3>
          <p>
            Sistem Informasi Penjualan Paket Wisata Berbasis Web pada Barokah
            Tour and Travel dirancang untuk memudahkan pelanggan dalam mencari
            dan memesan paket wisata, serta mempermudah admin dalam mengelola
            data wisata.
          </p>
        </section>

        <section className="card">
          <h3>Visi & Misi</h3>
          <p>
            <strong>Visi:</strong> Menjadi penyedia layanan perjalanan wisata
            berbasis digital yang terpercaya.
          </p>
          <p>
            <strong>Misi:</strong>
          </p>
          <ul>
            <li>Menyediakan layanan perjalanan yang berkualitas</li>
            <li>Mempermudah transaksi wisata melalui sistem online</li>
            <li>Meningkatkan efisiensi pengelolaan data perjalanan</li>
          </ul>
        </section>

        <section className="card">
          <h3>Tim Pengembang</h3>
          <p>
            Aplikasi ini dikembangkan oleh tim mahasiswa dalam rangka kegiatan
            Praktik Kerja Lapangan (PKL).
          </p>
        </section>
      </div>
    </div>
  );
}
