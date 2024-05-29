import React from "react";
import UnitsNavbar from "./UnitsNavbar";
import InventoryTable from "./inventorytablePark";

const ParkDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Park-Bahçe İşleri Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default ParkDepot;
