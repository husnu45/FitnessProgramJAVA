import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../navstyle.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Oturum kontrolü
    const isLoggedIn = () => {
      return localStorage.getItem("user") !== null;
    };

    // Eğer oturum açık değilse, anasayfaya yönlendir
    if (!isLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // localStorage'daki kullanıcı bilgilerini temizle
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");

    // Kullanıcıyı anasayfaya yönlendir
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navCustom">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        {/* Navbar Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar menü öğeleri */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link navTextColor navElek"
                href="/dashboard/electrical"
              >
                ⚡ Elektrik
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navFen"
                href="/dashboard/construction"
              >
                🚧 Fen İşleri
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navBoy"
                href="/dashboard/painting"
              >
                🎨 Boya
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navPark"
                href="/dashboard/parks"
              >
                🏞️ Park-Bahçe
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navDes"
                href="/dashboard/support"
              >
                ⛑️ Destek Hizmetleri
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navTem"
                href="/dashboard/cleaning"
              >
                🧹 Temizlik İşleri
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navAyn"
                href="/dashboard/ayniyat"
              >
                📦 Ayniyat
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navTextColor navSos"
                href="/dashboard/socials"
              >
                🤝 Sosyal Hizmetler
              </a>
            </li>
            {/* Diğer birimler için aynı şekilde devam edin */}
          </ul>
        </div>
        {/* Çıkış yap butonu */}
        <button
          className="btn btn-danger btn-sm btnExit"
          onClick={handleLogout}
        >
          Çıkış Yap
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
