import React from "react";
import UnitsNavbar from "./UnitsNavbar";
import InventoryTable from "./inventorytableElek";

const ElectricalDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Elektrik Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default ElectricalDepot;
