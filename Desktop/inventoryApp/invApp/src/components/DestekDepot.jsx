import React from "react";
import InventoryTable from "./inventorytableDest";
import UnitsNavbar from "./UnitsNavbar";

const DestekDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Destek Hizmetleri Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default DestekDepot;
