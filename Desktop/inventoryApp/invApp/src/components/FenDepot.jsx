import React from "react";
import InventoryTable from "./inventorytableFen";
import UnitsNavbar from "./UnitsNavbar";

const FenDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Fen İşleri Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default FenDepot;
