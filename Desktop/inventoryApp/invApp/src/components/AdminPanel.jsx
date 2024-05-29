import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS dosyasını ekledik
import PropTypes from "prop-types";

const UserTable = ({ users, onDeleteUser }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Kullanıcı Adı</th>
        <th scope="col">Şifre</th>
        <th scope="col">Rol</th>
        <th scope="col">İşlem</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.password}</td>
          <td>{user.role}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteUser(user.id, user.username)}
            >
              Sil
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

const UserLoginLog = () => {
  const [loginLogs, setLoginLogs] = useState([]);

  useEffect(() => {
    fetchLoginLogs();
  }, []);

  const fetchLoginLogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/users/login-logs"
      );
      const logs = Array.isArray(response.data) ? response.data : []; // API'den gelen veriyi diziye dönüştür
      setLoginLogs(logs);
    } catch (error) {
      console.error(
        "Kullanıcı giriş logları alınırken bir hata oluştu:",
        error
      );
      setLoginLogs([]); // Hata durumunda loginLogs'u boş bir dizi olarak ayarla
    }
  };

  const handleClearLoginLogs = async () => {
    const confirmation = window.confirm(
      "Tüm kullanıcı giriş loglarını silmek istediğinizden emin misiniz?"
    );
    if (confirmation) {
      try {
        await axios.delete("http://localhost:8080/api/users/login-logs");
        console.log("Kullanıcı giriş logları temizlendi");
        fetchLoginLogs();
      } catch (error) {
        console.error("Kullanıcı giriş loglarını temizleme hatası:", error);
      }
    }
  };

  return (
    <div>
      <h2>Kullanıcı Giriş Kayıtları</h2>
      <button className="btn btn-danger mb-3" onClick={handleClearLoginLogs}>
        Kullanıcı Giriş Kayıtlarını Temizle
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Kullanıcı Adı</th>
            <th scope="col">Giriş Zamanı</th>
          </tr>
        </thead>
        <tbody>
          {loginLogs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.username}</td>
              <td>{log.loginTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AdminPanel = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "Yönetici",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Kullanıcıları listeleme hatası:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post("http://localhost:8080/api/users", newUser);
      console.log("Yeni kullanıcı eklendi:", newUser.username);
      setNewUser({ username: "", password: "", role: "Yönetici" });
      fetchUsers();
    } catch (error) {
      console.error("Kullanıcı ekleme hatası:", error);
    }
  };

  const handleDeleteUser = async (userId, username) => {
    const confirmation = window.confirm(
      `"${username}" kullanıcısını silmek istediğinize emin misiniz?`
    );
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:8080/api/users/${userId}`);
        console.log("Kullanıcı silindi:", userId);
        fetchUsers();
      } catch (error) {
        console.error("Kullanıcı silme hatası:", error);
      }
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Yönetici Paneli</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          placeholder="Yeni Kullanıcı Adı"
        />
        <input
          type="password"
          className="form-control"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          placeholder="Yeni Şifre"
        />
        <select
          className="form-select"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="Yönetici">Yönetici</option>
          <option value="Çalışan">Çalışan</option>
          <option value="Misafir">Misafir</option>
        </select>

        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddUser}
        >
          Sisteme Kullanıcı Ekle
        </button>
      </div>
      <h1>Kullanıcı Listesi</h1>
      <UserTable users={users} onDeleteUser={handleDeleteUser} />
      <UserLoginLog />
    </div>
  );
};

export default AdminPanel;
