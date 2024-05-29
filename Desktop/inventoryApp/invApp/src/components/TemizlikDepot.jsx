import React from "react";
import InventoryTable from "./inventorytableTem";
import UnitsNavbar from "./UnitsNavbar";

const TemizlikDepot = () => {
  return (
    <div>
      <UnitsNavbar />
      <div className="d-flex justify-content-center">
        <h3>Temizlik Hizmetleri Deposu İçeriği</h3>
      </div>
      <InventoryTable /> {/* InventoryTable bileşenini burada çağırın */}
    </div>
  );
};

export default TemizlikDepot;
