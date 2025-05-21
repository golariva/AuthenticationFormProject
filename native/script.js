const form = document.getElementById('login-form');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

// Перенаправление на главную страницу при сохраненной сессии
if (localStorage.getItem('session') === 'active') {
  window.location.href = 'success.html';
}

// Генерация тюльпанчиков
const createTulip = () => {
  const tulip = document.createElement('div');
  tulip.className = 'tulip';
  tulip.style.left = Math.random() * 100 + 'vw';
  tulip.style.animationDuration = (5 + Math.random() * 5) + 's';
  tulip.textContent = '🌷';
  document.body.appendChild(tulip);
};

for (let i = 0; i < 30; i++) {
  createTulip();
}

// Проверка логина и пароля
function isValidCredentials(login, password) {
  return login === 'admin' && password === '1234';
}

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;

  const correctLogin = 'admin';
  const correctPassword = '1234';

  if (isValidCredentials) {
    if (remember) {
      localStorage.setItem('session', 'active');
    }
    alert('Вход успешен!');
    window.location.href = 'success.html';
  } else {
    alert("Неверный логин или пароль");
    if (login !== correctLogin) {
      loginInput.classList.add("invalid");
    }
    if (password !== correctPassword) {
      passwordInput.classList.add("invalid"); 
    }
  }
});

const toggleBtn = document.getElementById('accessibility-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('accessible');

  const enabled = document.body.classList.contains('accessible');
  localStorage.setItem('accessibleMode', enabled ? 'true' : 'false');

  toggleBtn.textContent = enabled
    ? 'Обычная версия'
    : 'Версия для слабовидящих';
});

window.addEventListener('DOMContentLoaded', () => {
  const accessible = localStorage.getItem('accessibleMode') === 'true';
  if (accessible) {
    document.body.classList.add('accessible');
    toggleBtn.textContent = 'Обычная версия';
  }
});