import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Import Layout yang sudah kita buat
import Layout from "./components/Layout"; 

// Import semua halaman Anda
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaPengguna from "./pages/KelolaPengguna";
import CoverHalamanUtama from "./pages/CoverHalamanUtama";
// Pastikan path import ini benar sesuai struktur folder Anda
import Kerangka from "./pages/Kerangka"; 
import KelolaData from "./pages/Kelola Data";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTE 1: Halaman Login (Tanpa Sidebar/Layout) */}
        {/* Ditempatkan di luar karena tampilannya berbeda */}
        <Route path="/" element={<Login />} />

        {/* RUTE 2: Semua Halaman Lain (Dengan Sidebar/Layout) */}
        {/* Layout menjadi 'pembungkus' untuk semua rute di dalamnya */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kelola-pengguna" element={<KelolaPengguna />} />
          <Route path="/cover-halaman-utama" element={<CoverHalamanUtama />} />
          <Route path="/kerangka" element={<Kerangka />} />
          <Route path="/kelola-data" element={<KelolaData />} />
          
          {/* Anda bisa menambahkan rute lain di sini yang butuh sidebar */}
          {/* Contoh: <Route path="/tentang" element={<Tentang />} /> */}
        </Route>

        {/* Rute untuk halaman yang tidak ditemukan (opsional) */}
        <Route path="*" element={<h1>404: Halaman Tidak ADA</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
