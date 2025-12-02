import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CoverHalamanUtama.css";

const API_URL = "http://localhost:5000/api/halaman-cover";

export default function CoverHalamanUtama() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(API_URL);
      setImages(res.data);
      const active = res.data.find(img => img.is_active === 1);
      if (active) setSelected(active.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post(`${API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      setMessage("Gambar berhasil diupload!");
      fetchImages();
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("Gagal upload gambar!");
    }
  };

  const handleSelect = async (id) => {
    try {
      await axios.put(`${API_URL}/set-active/${id}`);
      setSelected(id);
      fetchImages();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus gambar ini?")) return;

    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      if (selected === id) setSelected(null); // reset jika gambar aktif dihapus
      fetchImages();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="halaman-cover-container"
      style={{
        backgroundImage: selected
          ? `url(${images.find(img => img.id === selected)?.base64})`
          : "none",
      }}
    >
      <h2>Kelola Background Halaman</h2>

      {message && <div className="upload-message">{message}</div>}

      <form onSubmit={handleUpload} className="upload-form">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>

      <div className="image-list">
        {images.map((img) => (
          <div className="image-item-wrapper" key={img.id}>
            <div
              className={`image-item ${selected === img.id ? "active" : ""}`}
              onClick={() => handleSelect(img.id)}
            >
              <img src={img.base64} alt={img.image_name} />
            </div>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(img.id);
              }}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
