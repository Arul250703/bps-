import React, { useState } from "react";
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaArrowLeft, 
  FaUsers, 
  FaBriefcase, 
  FaHandHoldingHeart, 
  FaGraduationCap, 
  FaChartLine, 
  FaDollarSign, 
  FaCoins, 
  FaSeedling, 
  FaShoppingCart, 
  FaIndustry, 
  FaMoneyBillWave 
} from "react-icons/fa";

function DataUtama() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const data = [
    { 
      id: 1, 
      indikator: "KEPENDUDUKAN",
      icon: FaUsers,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
    },
    { 
      id: 2, 
      indikator: "KETENAGAKERJAAN",
      icon: FaBriefcase,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    { 
      id: 3, 
      indikator: "KEMISKINAN",
      icon: FaHandHoldingHeart,
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
    },
    { 
      id: 4, 
      indikator: "PENDIDIKAN",
      icon: FaGraduationCap, 
      image: "https://i.pinimg.com/1200x/bf/76/53/bf765374f627a24b3608baad7b084afd.jpg"
    },
    { 
      id: 5, 
      indikator: "PEMBANGUNAN MANUSIA",
      icon: FaChartLine,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    { 
      id: 6, 
      indikator: "PRODUK DOMESTIK REGIONAL BRUTO (PDRB)",
      icon: FaDollarSign,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    { 
      id: 7, 
      indikator: "KEUANGAN",
      icon: FaCoins,
      image: "https://i.pinimg.com/736x/bc/1f/95/bc1f955d535c528411b39ef84b8f770d.jpg"
    },
    { 
      id: 8, 
      indikator: "PERTANIAN DAN PERKEBUNAN",
      icon: FaSeedling,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
    },
    { 
      id: 9, 
      indikator: "HARGA INFLASI NILAI TUKAR PETANI",
      icon: FaShoppingCart,
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80"
    },
    { 
      id: 10, 
      indikator: "PERTAMBANGAN",
      icon: FaIndustry,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
    },
    { 
      id: 11, 
      indikator: "UPAH MINIMUM KABUPATEN (UMK)",
      icon: FaMoneyBillWave,
      image: "https://i.pinimg.com/736x/73/5e/64/735e6480f0e8e296c46504b819d7ab52.jpg"
    },
  ];

  const handleTambah = (id) => {
    console.log("Tambah data untuk ID:", id);
  };

  const handleEdit = (id) => {
    console.log("Edit data untuk ID:", id);
  };

  const handleHapus = (id) => {
    console.log("Hapus data untuk ID:", id);
  };

  const handleLihat = (id) => {
    console.log("Lihat data untuk ID:", id);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 50%, #f3e8ff 100%)',
      padding: '2rem',
      fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid #f0f0f0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
                lineHeight: '1.2'
              }}>KERANGKA</h1>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                lineHeight: '1.3',
                margin: 0
              }}>DATA UTAMA</h2>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}>A</div>
                <span style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>Admin</span>
              </div>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)',
                transition: 'all 0.3s ease'
              }}>
                <FaArrowLeft />
                <span>Kembali</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {data.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  boxShadow: hoveredCard === item.id ? '0 12px 30px rgba(0, 0, 0, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === item.id ? 'translateY(-8px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header with Image */}
                <div style={{
                  padding: '2rem 1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    transition: 'transform 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                    transform: hoveredCard === item.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}>
                    <IconComponent style={{
                      fontSize: '2rem',
                      color: 'white'
                    }} />
                  </div>
                  <div style={{
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    opacity: 0.9,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    #{String(item.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', background: 'white' }}>
                  <h3 style={{
                    color: '#1f2937',
                    fontWeight: '700',
                    fontSize: '0.9375rem',
                    marginBottom: '1.5rem',
                    minHeight: '2.5rem',
                    lineHeight: '1.5',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    margin: '0 0 1.5rem 0'
                  }}
                  onClick={() => handleLihat(item.id)}
                  >
                    {item.indikator}
                  </h3>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <button
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        border: '1px solid #93c5fd',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        fontSize: '0.8125rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                        color: '#1e40af'
                      }}
                      onClick={() => handleTambah(item.id)}
                      title="Tambah"
                    >
                      <FaPlus />
                      <span>Tambah</span>
                    </button>
                    
                    <button
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        padding: 0,
                        border: '1px solid #fbbf24',
                        borderRadius: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                        color: '#b45309',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onClick={() => handleEdit(item.id)}
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    
                    <button
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        padding: 0,
                        border: '1px solid #fca5a5',
                        borderRadius: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                        color: '#b91c1c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onClick={() => handleHapus(item.id)}
                      title="Hapus"
                    >
                      <FaTrash />
                    </button>
                    
                    <button
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        padding: 0,
                        border: '1px solid #86efac',
                        borderRadius: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                        color: '#15803d',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onClick={() => handleLihat(item.id)}
                      title="Lihat"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DataUtama;