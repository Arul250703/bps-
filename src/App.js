import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KelolaPengguna from "./pages/KelolaPengguna";
import KelolaData from "./pages/KelolaData";
import CoverKerangka from "./pages/CoverKerangka";
import Tentang from "./pages/Tentang";
import LinkTerkait from "./pages/LinkTerkait";
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
                  <Route path="/cover-kerangka" element={<CoverKerangka />} />
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
