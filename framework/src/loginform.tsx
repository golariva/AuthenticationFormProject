import React, { useState, useEffect } from "react";

interface Props {
  onSuccess: () => void;
}

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const correctLogin = "admin";
  const correctPassword = "1234";

  useEffect(() => {
    if (localStorage.getItem("session") === "active") {
      onSuccess();
    }
  }, [onSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login === correctLogin && password === correctPassword) {
      if (remember) {
        localStorage.setItem("session", "active");
      }
      onSuccess();
    } else {
      setError("Неверный логин или пароль");
    }
  };

  const handleVkLoginClick = () => {
    alert("Здесь будет авторизация через ВК");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход</h2>

      <div className="form-group">
        <label htmlFor="login">Логин:</label>
        <input
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
          className={error && login !== correctLogin ? "invalid" : ""}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={error && password !== correctPassword ? "invalid" : ""}
        />
      </div>

      <div className="form-group">
        <input
          id="remember"
          type="checkbox"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
        <label htmlFor="remember">Сохранять сессию</label>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Войти</button>

      {/* Простая кнопка ВК */}
      <button
        type="button"
        onClick={handleVkLoginClick}
        style={{
          marginTop: "15px",
          backgroundColor: "#4a76a8",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        Войти через ВКонтакте
      </button>
    </form>
  );
};

export default LoginForm;
