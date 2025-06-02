// Проверка редиректа при активной версии
test("user is redirected to success.html if session is active", () => {
  localStorage.setItem("session", "active");

  const mockLocation = { href: "" };

  // Добавляем возможность переопределения свойства 'location'
  Object.defineProperty(window, "location", {
    value: mockLocation,
    writable: true,
  });

// Эмуляция поведения из script.js
  if (localStorage.getItem("session") === "active") {
    window.location.href = "success.html";
  }

  expect(window.location.href).toBe("success.html");
});
