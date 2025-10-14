import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaData from "./pages/KelolaData";
import Kerangka from "./pages/kerangka/Kerangka";
import Tentang from "./pages/Tentang";
import Tema from "./pages/kerangka/Tema";
import LinkTerkait from "./pages/LinkTerkait";
import HalamanUtama from "./pages/kerangka/HalamanUtama";
import BerandaUtama from "./pages/kerangka/BerandaUtama";
import DataUtama from "./pages/kerangka/DataUtama";
import Tabel from "./pages/kerangka/Tabel";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login tanpa sidebar */}
        <Route path="/" element={<Login />} />

        {/* Semua halaman lain dengan sidebar */}
        <Route
          path="/*"
          element={
            <div className="app-layout">
              <Sidebar />
              <main className="main-content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* Kelola Data */}
                  <Route path="/kelola-data" element={<KelolaData />} />

                  {/* Kerangka */}
                  <Route path="/kerangka" element={<Kerangka />} />
                  <Route path="/kerangka/beranda-utama" element={<BerandaUtama />} />
                  <Route path="/kerangka/data-utama" element={<DataUtama />} />
                  <Route path="/kerangka/tema" element={<Tema />} />
                  <Route path="/kerangka/tabel" element={<Tabel />} />
                  <Route path="/kerangka/halaman-utama" element={<HalamanUtama />} />

                  {/* Halaman lainnya */}
                  <Route path="/tentang" element={<Tentang />} />
                  <Route path="/link-terkait" element={<LinkTerkait />} />
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
