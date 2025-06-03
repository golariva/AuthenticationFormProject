import React from "react";
import TulipFall from "./tulipfall";
import LoginForm from "./loginform";
import AccessibilityToggle from "./accessibilitytoggle";
import VkAuth from "./vkauth";

function App() {
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
        <VkAuth /> {}
      </main>

      <footer>
        <p>Форма авторизации</p>
      </footer>
    </>
  );
}

export default App;
