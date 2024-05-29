import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Dashboard.css"; // Stil dosyasını ekleyin

// Bölüm componentlerini import edin
import ElectricalDepot from "./ElectricalDepot";
import AdminPanel from "./AdminPanel";
// Diğer bölüm componentlerini de burada import edin

const Dashboard = () => {
  // Oturum kontrolü
  const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <AdminPanel />

      {/* Bölüm İçerikleri */}
      <div className="content">
        <Routes>
          {/* Elektrik bölümü */}
          <Route
            path="/dashboard/electrical"
            element={isLoggedIn() ? <ElectricalDepot /> : <Navigate to="/" />}
          />
          {/* Diğer bölümler için Route'ları burada oluşturun */}

          {/* Örnek olarak diğer bölümler */}
          <Route
            path="/dashboard/admin"
            element={isLoggedIn() ? <AdminPanel /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
