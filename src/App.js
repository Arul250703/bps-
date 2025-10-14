import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaData from "./pages/KelolaData";
import Kerangka from "./pages/kerangka/Kerangka";
// import Tentang from "./pages/Tentang";
import Tema from "./pages/kerangka/Tema";
// import LinkTerkait from "./pages/LinkTerkait";
import HalamanUtama from "./pages/kerangka/HalamanUtama";
import BerandaUtama from "./pages/kerangka/BerandaUtama";
import DataUtama from "./pages/kerangka/DataUtama";
import Tabel from "./pages/kerangka/Tabel";
import CoverHalamanUtama from "./pages/CoverHalamanUtama";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟢 Halaman Login (tanpa Sidebar) */}
        <Route path="/" element={<Login />} />

        {/* 🟢 Halaman lain dengan Sidebar */}
        <Route
          path="/*"
          element={
            <div className="app-layout">
              <Sidebar />
              <main className="main-content">
                <Routes>
                  {/* Dashboard */}
                  <Route path="dashboard" element={<Dashboard />} />

                  {/* Kelola Data */}
                  <Route path="kelola-data" element={<KelolaData />} />

                  {/* Kerangka */}
                  <Route path="kerangka" element={<Kerangka />} />
                  <Route
                    path="kerangka/beranda-utama"
                    element={<BerandaUtama />}
                  />
                  <Route
                    path="kerangka/data-utama"
                    element={<DataUtama />}
                  />
                  <Route path="kerangka/tema" element={<Tema />} />
                  <Route path="kerangka/tabel" element={<Tabel />} />
                  <Route
                    path="kerangka/halaman-utama"
                    element={<HalamanUtama />}
                  />

                  {/* Cover & Dokumentasi */}
                  <Route
                    path="cover-halaman-utama"
                    element={<CoverHalamanUtama />}
                  />

                  {/* Halaman Tambahan */}
                  {/* <Route path="tentang" element={<Tentang />} />
                  <Route path="link-terkait" element={<LinkTerkait />} /> */}
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
