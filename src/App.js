import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaData from "./pages/KelolaData";
import Kerangka from "./pages/kerangka/Kerangka";
import Tema from "./pages/kerangka/Tema";
import HalamanUtama from "./pages/kerangka/HalamanUtama";
import BerandaUtama from "./pages/kerangka/BerandaUtama";
import DataUtama from "./pages/kerangka/DataUtama";
import Tabel from "./pages/kerangka/Tabel";
import CoverHalamanUtama from "./pages/CoverHalamanUtama";
import InputData from "./pages/InputData";

// Tambahan baru 👇
import InfografisView from "./pages/InfografisView";
import SekilasSukabumiView from "./pages/SekilasSukabumiView";

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
                  <Route path="/input-data" element={<InputData />} />

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
      </Routes>
    </Router>
  );
}

export default App;
