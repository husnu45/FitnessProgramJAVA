import axios from "axios";

const API_URL = "http://localhost:8080/api/users"; // API URL'nizi buraya koyun

export const listUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Kullanıcıları listeleme hatası:", error);
    throw new Error("Kullanıcıları listeleme hatası");
  }
};

export const addUser = async (newUser) => {
  try {
    const response = await axios.post(API_URL, newUser, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Kullanıcı ekleme hatası:", error);
    throw new Error("Kullanıcı ekleme hatası");
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_URL}/${userId}`);
    return userId;
  } catch (error) {
    console.error("Kullanıcı silme hatası:", error);
    throw new Error("Kullanıcı silme hatası");
  }
};
