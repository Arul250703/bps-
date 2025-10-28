import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Import Layout yang sudah kita buat
import Layout from "./components/Layout"; 

// Import semua halaman Anda
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaPengguna from "./pages/KelolaPengguna";
import CoverHalamanUtama from "./pages/CoverHalamanUtama";
// Pastikan path import ini benar sesuai struktur folder Anda
import Kerangka from "./pages/kerangka/Kerangka";
<<<<<<< HEAD
=======
import KelolaData from "./pages/KelolaData";
// import KelolaData from "./pages/KelolaData";
// import Tentang from "./pages/Tentang";
>>>>>>> 29753cabf37dc562ee745df9bfeeb17ca13e5cf2
import Tema from "./pages/kerangka/Tema";
import HalamanUtama from "./pages/kerangka/HalamanUtama";
import BerandaUtama from "./pages/kerangka/BerandaUtama";
import DataUtama from "./pages/kerangka/DataUtama";
import Tabel from "./pages/kerangka/Tabel";
import InputData from "./pages/InputData";

// Tambahan baru 👇
import InfografisView from "./pages/InfografisView";
import SekilasSukabumiView from "./pages/SekilasSukabumiView";

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
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="kelola-pengguna" element={<KelolaPengguna />} /> */}
          <Route path="cover-halaman-utama" element={<CoverHalamanUtama />} />
          <Route path="kerangka" element={<Kerangka />} />
          <Route path="kelola-data" element={<KelolaData />} />
          <Route path="input-data" element={<InputData />} />

          {/* Kerangka sub-routes */}
          <Route path="kerangka/beranda-utama" element={<BerandaUtama />} />
          <Route path="kerangka/data-utama" element={<DataUtama />} />
          <Route path="kerangka/tema/:id" element={<Tema />} />
          <Route path="kerangka/tabel" element={<Tabel />} />
          <Route path="kerangka/halaman-utama" element={<HalamanUtama />} />

<<<<<<< HEAD
                  {/* Kerangka */}
                  <Route path="kerangka" element={<Kerangka />} />
                  <Route
                    path="kerangka/beranda-utama"
                    element={<BerandaUtama />}
                  />
                  <Route path="kerangka/data-utama" element={<DataUtama />} />
                  <Route path="kerangka/tema/:id" element={<Tema />} />
                  <Route path="kerangka/tabel" element={<Tabel />} />
                  <Route
                    path="kerangka/halaman-utama"
                    element={<HalamanUtama />}
                  />

                  {/* Cover */}
                  <Route
                    path="cover-halaman-utama"
                    element={<CoverHalamanUtama />}
                  />

                  {/* 🟣 Tambahan: Infografis & Sekilas Sukabumi */}
                  <Route
                    path="kerangka/infografis-view"
                    element={<InfografisView />}
                  />
                  <Route
                    path="kerangka/sekilas-sukabumi-view"
                    element={<SekilasSukabumiView />}
                  />
                </Routes>
              </main>
            </div>
          }
        />
=======
          {/* Anda bisa menambahkan rute lain di sini yang butuh sidebar */}
          {/* Contoh: <Route path="tentang" element={<Tentang />} /> */}
        </Route>

        {/* Rute untuk halaman yang tidak ditemukan (opsional) */}
        <Route path="*" element={<h1>404: Halaman Tidak ADA</h1>} />
>>>>>>> 29753cabf37dc562ee745df9bfeeb17ca13e5cf2
      </Routes>
    </BrowserRouter>
  );
}

export default App;
