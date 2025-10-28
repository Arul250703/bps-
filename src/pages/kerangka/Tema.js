import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/Tema.css";

function Tema() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataTema, setDataTema] = useState([]);

  // Daftar indikator dari Data Utama
  const indikatorList = {
    1: "Kependudukan",
    2: "Ketenagakerjaan", 
    3: "Kemiskinan",
    4: "Pendidikan",
    5: "Perkembangan Manusia",
    6: "Produk Domestik Regional Bruto (PDRB)",
    7: "Keuangan",
    8: "Pertanian Perkebunan",
    9: "Harga Inflasi Nilai Tukar Petani",
    10: "Pertambangan",
    11: "Upah Minimum Kabupaten (UMK)",
  };

  // Data tema STATIC berdasarkan ID indikator (seperti sebelumnya)
  const staticTemaData = {
    1: [
      { id: 1, judul: "JUMLAH PENDUDUK" },
      { id: 2, judul: "KELOMPOK UMUR" },
      { id: 3, judul: "LAJU PERTUMBUHAN" },
      { id: 4, judul: "RASIO JENIS KELAMIN" },
      { id: 5, judul: "RASIO KETERGANTUNGAN" },
    ],
    2: [
      { id: 1, judul: "ANGKATAN KERJA" },
      { id: 2, judul: "TPAK (TINGKAT PARTISIPASI ANGKATAN KERJA)" },
      { id: 3, judul: "TPT (TINGKAT PENGANGGURAN TERBUKA)" },
    ],
    3: [
      { id: 1, judul: "PENDUDUK MISKIN" },
      { id: 2, judul: "GARIS KEMISKINAN" },
      { id: 3, judul: "INDEKS KEDALAMAN KEMISKINAN (P1)" },
    ],
    4: [
      { id: 1, judul: "ANGKA PARTISIPASI KASAR (APK)" },
      { id: 2, judul: "ANGKA PARTISIPASI MURNI (APM)" },
      { id: 3, judul: "ANGKA MELEK HURUF (AMH)" },
    ],
    5: [
      { id: 1, judul: "ANGKA HARAPAN HIDUP" },
      { id: 2, judul: "ANGKA KEMATIAN BAYI" },
      { id: 3, judul: "PREVALENSI GIZI BURUK" },
    ],
    6: [
      { id: 1, judul: "PDRB ADHB LAPANGAN USAHA" },
      { id: 2, judul: "PDRB ADHK LAPANGAN USAHA" },
      { id: 3, judul: "DISTRIBUSI PDRB ADHB LAPANGAN USAHA" },
      { id: 4, judul: "LAJU PETUMBUAHAN EKONOMI" },
    ],  
    7: [
      { id: 1, judul: "DATA KEUANGAN DAERAH" },
    ],  
    8: [
      { id: 1, judul: "TANAMAN PANGAN" },
      { id: 2, judul: "HORTIKULTURA" }, 
      { id: 3, judul: "PERKEBUNAN" },
    ],  
    9: [
      { id: 1, judul: "INFLASI" },  
      { id: 2, judul: "INDEKS KEMAHALAN KONTRUKSI (IKK)" },
      { id: 3, judul: "NILAI TUKAR PETANI (NTP)" },
    ],  
    10: [
      { id: 1, judul: "PERTAMBANGAN" },
    ],    
    11: [
      { id: 1, judul: "UPAH MINIMUM KABUPATEN (UMK)" },
    ],
  };

  useEffect(() => {
    // Ambil data dari localStorage
    const storedData = JSON.parse(localStorage.getItem("dataTabel")) || [];
    
    // Data static berdasarkan ID
    const staticData = staticTemaData[id] || [];
    
    // Gabungkan data static dengan informasi jumlah data dari localStorage
    const combinedData = staticData.map(staticItem => {
      // Hitung berapa banyak data yang sudah diinput untuk judul ini
      const jumlahData = storedData.filter(
        storedItem => storedItem.judul === staticItem.judul && storedItem.indikatorId === parseInt(id)
      ).length;
      
      return {
        ...staticItem,
        jumlahData: jumlahData
      };
    });
    
    setDataTema(combinedData);
  }, [id]);

  const indikator = indikatorList[id];

  const handleRowClick = (judul) => {
    navigate("/kerangka/tabel", { 
      state: { 
        judul: judul, 
        indikator: indikator 
      } 
    });
  };

  return (
    <div className="tema-container">
      {/* Header */}
      <div className="tema-header">
        <h2>
          <span style={{ color: "#0056b3" }}>KERANGKA</span> <br />
          TEMA{" "}
          {indikator && (
            <span style={{ color: "#009846" }}>{indikator.toUpperCase()}</span>
          )}
        </h2>

        <div className="admin-box">
          <div className="admin-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Admin"
              className="admin-avatar"
            />
            <span>Admin</span>
          </div>
          <button className="btn-kembali" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="tema-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>JUDUL</th>
              <th>KETERANGAN</th>
              <th>JUMLAH DATA</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {dataTema.length > 0 ? (
              dataTema.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td 
                    className="judul-link"
                    onClick={() => handleRowClick(row.judul)}
                    style={{ cursor: "pointer"}}
                  >
                    {row.judul}
                  </td>
                  <td>Data untuk {row.judul}</td>
                  <td>{row.jumlahData} entri</td>
                  <td>
                    <button 
                      className="btn-lihat"
                      onClick={() => handleRowClick(row.judul)}
                      disabled={row.jumlahData === 0}
                      style={{
                        opacity: row.jumlahData === 0 ? 0.5 : 1,
                        cursor: row.jumlahData === 0 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {row.jumlahData === 0 ? 'Belum Ada Data' : 'Lihat Data'}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  Data belum tersedia untuk indikator ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tema;