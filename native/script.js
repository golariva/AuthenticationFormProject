// native/script.js
const form = document.getElementById('login-form');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const login = loginInput.value.trim();
  const password = passwordInput.value;

  if (!login || !password) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  // "Хардкод" для проверки
  if (login === "admin" && password === "1234") {
    alert("Успешный вход!");
    localStorage.setItem('login', login);
  } else {
    alert("Неверный логин или пароль");
    passwordInput.classList.add("invalid");
    setTimeout(() => passwordInput.classList.remove("invalid"), 300);
  }
});

// Автозаполнение логина
window.addEventListener("DOMContentLoaded", () => {
  const savedLogin = localStorage.getItem('login');
  if (savedLogin) {
    loginInput.value = savedLogin;
  }
});
