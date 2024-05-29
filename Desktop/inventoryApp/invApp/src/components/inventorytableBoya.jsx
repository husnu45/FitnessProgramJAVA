import React, { useEffect, useState } from "react";
import axios from "axios";

const InventoryTable = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    productName: "",
    description: "",
    stockQuantity: 1,
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/inventory");
      const filteredData = response.data.filter(
        (item) => item.department === "Boya"
      );
      setInventory(filteredData);
    } catch (error) {
      console.error("Envanter verileri çekilemedi:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "stockQuantity") {
      const newValue = Math.max(parseInt(value), 1);
      setNewItem((prevState) => ({ ...prevState, [name]: newValue }));
    } else {
      setNewItem((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  useEffect(() => {
    setNewItem((prevState) => ({
      ...prevState,
      stockQuantity: 1,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingItem = inventory.find(
      (item) => item.productName === newItem.productName
    );

    if (existingItem) {
      try {
        const response = await axios.put(
          `http://localhost:8080/api/inventory/updateByName/${newItem.productName}`,
          {
            ...existingItem,
            stockQuantity: newItem.stockQuantity,
          }
        );
        setInventory(
          inventory.map((item) =>
            item.productName === newItem.productName ? response.data : item
          )
        );
      } catch (error) {
        console.error("Envanter güncellenemedi:", error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/inventory",
          {
            ...newItem,
            department: "Boya",
          }
        );
        setInventory([...inventory, response.data]);
      } catch (error) {
        console.error("Yeni envanter eklenemedi:", error);
      }
    }
    setNewItem({ productName: "", description: "", stockQuantity: 1 });
  };

  const handleStockDecrease = async (productId) => {
    const item = inventory.find((item) => item.id === productId);
    if (item.stockQuantity <= 0) {
      console.error("Stok miktarı zaten 0.");
      return;
    }

    if (
      window.confirm(
        `"${item.productName}" envanterinin stok miktarını azaltmak istediğinizden emin misiniz?`
      )
    ) {
      try {
        const response = await axios.put(
          `http://localhost:8080/api/inventory/${productId}`,
          {
            ...item,
            stockQuantity: item.stockQuantity - 1,
          }
        );
        setInventory(
          inventory.map((item) =>
            item.id === productId ? response.data : item
          )
        );
      } catch (error) {
        console.error("Stok miktarı güncellenemedi:", error);
      }
    }
  };

  const handleRemoveItem = async (productId) => {
    const item = inventory.find((item) => item.id === productId);
    if (
      window.confirm(
        `"${item.productName}" envanterini silmek istediğinizden emin misiniz?`
      )
    ) {
      try {
        await axios.delete(`http://localhost:8080/api/inventory/${productId}`);
        setInventory(inventory.filter((item) => item.id !== productId));
      } catch (error) {
        console.error("Envanter silinemedi:", error);
      }
    }
  };

  const filteredInventory = inventory.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Envanter Tablosu</h2>
      <div className="card mb-4">
        <div className="card-header">Envanter Ekle</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="productName" className="form-label">
                  Envanter Adı
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={newItem.productName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="description" className="form-label">
                  Açıklama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={newItem.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="stockQuantity" className="form-label">
                  Stok Miktarı
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="stockQuantity"
                  name="stockQuantity"
                  value={newItem.stockQuantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Envanter Ekle
            </button>
          </form>
        </div>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Envanterde Ara 🔍"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Envanter Adı</th>
            <th>Açıklama</th>
            <th>Stok Miktarı</th>
            <th>Departman</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.length === 0 ? (
            <tr>
              <td colSpan="6">Arama sonucunda envanter bulunamadı.</td>
            </tr>
          ) : (
            filteredInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.description}</td>
                <td>{item.stockQuantity}</td>
                <td>{item.department}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleStockDecrease(item.id)}
                  >
                    Stok Azalt
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Envanteri Kaldır
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
