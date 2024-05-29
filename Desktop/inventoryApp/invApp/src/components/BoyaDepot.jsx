import React from "react";
import UnitsNavbar from "./UnitsNavbar";
import InventoryTable from "./inventorytableBoya";

const BoyaDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Boya Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default BoyaDepot;
