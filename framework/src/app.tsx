import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import TulipFall from "./tulipfall";
import LoginForm from "./loginform";
import AccessibilityToggle from "./accessibilitytoggle";
import VkAuth from "./vkauth";

function Home() {
  const handleSuccess = () => {
    window.location.href = "success.html";
  };

  return (
    <>
      <TulipFall />
      <header>
        <h1>Добро пожаловать</h1>
        <AccessibilityToggle />
      </header>

      <main>
        <LoginForm onSuccess={handleSuccess} />
        <VkAuth />
      </main>

      <footer>
        <p>Форма авторизации</p>
      </footer>
    </>
  );
}

function About() {
  return (
    <div>
      <h2>О проекте</h2>
      <p>Здесь можно рассказать информацию о вашем проекте.</p>
      <Link to="/">Назад на главную</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Главная
        </Link>
        <Link to="/about">О проекте</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
