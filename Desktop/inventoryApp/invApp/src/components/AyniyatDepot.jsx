import React from "react";
import InventoryTable from "./inventorytableAyn";
import UnitsNavbar from "./UnitsNavbar";

const AyniyatDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Ayniyat Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default AyniyatDepot;
