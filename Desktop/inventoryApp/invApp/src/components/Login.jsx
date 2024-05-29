import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../loginstyle.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          username: username,
          password: password,
        }
      );

      console.log("Response:", response.data);

      // Oturum bilgisini localStorage'e kaydet
      localStorage.setItem("user", JSON.stringify(response.data));

      // Başarılı girişten sonra Dashboard sayfasına yönlendir
      navigateTo("/dashboard");
    } catch (error) {
      console.error("Hata:", error);
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  };

  return (
    <div className="login-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="card-title text-center">🏢 Hoş Geldiniz 🏢</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="form-group text-center">
                    <label htmlFor="username">
                      <b>Kullanıcı Adınız :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group text-center">
                    <label htmlFor="password">
                      <b>Şifreniz :</b>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Giriş Yap
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
