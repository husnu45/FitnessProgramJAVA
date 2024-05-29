import React from "react";
import InventoryTable from "./inventorytableSos";
import UnitsNavbar from "./UnitsNavbar";

const SosyalDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Sosyal Hizmetler Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default SosyalDepot;
