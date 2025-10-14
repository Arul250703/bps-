// import React, { useState } from "react";
// import "../styles/KelolaPengguna.css";

// export default function KelolaPengguna() {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Admin Utama", Username: "admin", Password: "admin123", role: "Admin" },
//     { id: 2, name: "Petugas 1", Username: "petugas1", Password: "petugas123", role: "Petugas" },
//     { id: 3, name: "Petugas 2", Username: "petugas2", Password: "petugas123", role: "Petugas" },
//   ]);

//   const handleDelete = (id) => {
//     if (window.confirm("Yakin ingin menghapus pengguna ini?")) {
//       setUsers(users.filter((u) => u.id !== id));
//     }
//   };

//   return (
//     <div className="kelola-page">
//       <div className="kelola-header">
//         <h2>Kelola Pengguna</h2>
//         <p>Manajemen akun admin dan petugas</p>
//       </div>

//       <div className="table-container">
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Nama</th>
//               <th>Username</th>
//               <th>Password</th>
//               <th>Role</th>
//               <th>Aksi</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.Username}</td>
//                   <td>{user.Password}</td>
//                   <td>
//                     <span
//                       className={`role-badge ${
//                         user.role === "Admin" ? "admin" : "petugas"
//                       }`}
//                     >
//                       {user.role}
//                     </span>
//                   </td>
//                   <td>
//                     <button
//                       className="edit-btn"
//                       onClick={() => alert("Edit fitur belum dibuat")}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(user.id)}
//                     >
//                       Hapus
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="empty-msg">
//                   Tidak ada pengguna
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
