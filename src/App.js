import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaPengguna from "./pages/KelolaPengguna";
import KelolaData from "./pages/Kerangka";
import CoverHalamanUtama from "./pages/CoverHalamanUtama";
import Tentang from "./pages/Kelola Data";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login tanpa sidebar */}
        <Route path="/" element={<Login />} />

        {/* Semua halaman dengan sidebar */}
        <Route
          path="/*"
          element={
            <div className="app-layout">
              <Sidebar />
              <main className="main-content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/kelola-pengguna" element={<KelolaPengguna />} />
                  <Route path="/kelola-data" element={<KelolaData />} />
                  <Route path="/CoverHalamanUtama" element={<CoverHalamanUtama />} />
                  <Route path="/tentang" element={<Tentang />} />
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
