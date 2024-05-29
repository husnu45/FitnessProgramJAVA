import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ElectricalDepot from "./components/ElectricalDepot";
import FenDepot from "./components/FenDepot";
import BoyaDepot from "./components/BoyaDepot";
import ParkDepot from "./components/ParkDepot";
import DestekDepot from "./components/DestekDepot";
import TemizlikDepot from "./components/TemizlikDepot";
import AyniyatDepot from "./components/AyniyatDepot";
import SosyalDepot from "./components/SosyalDepot";

function App() {
  // Oturum kontrolü
  const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/dashboard"
            element={isLoggedIn() ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/electrical"
            element={isLoggedIn() ? <ElectricalDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/construction"
            element={isLoggedIn() ? <FenDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/painting"
            element={isLoggedIn() ? <BoyaDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/parks"
            element={isLoggedIn() ? <ParkDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/support"
            element={isLoggedIn() ? <DestekDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/cleaning"
            element={isLoggedIn() ? <TemizlikDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/ayniyat"
            element={isLoggedIn() ? <AyniyatDepot /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard/socials"
            element={isLoggedIn() ? <SosyalDepot /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
