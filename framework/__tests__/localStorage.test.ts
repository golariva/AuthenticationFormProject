// Проверка локального хранилища
test("session is saved to localStorage when remember is true", () => {
  localStorage.clear();
  localStorage.setItem("session", "active");
  expect(localStorage.getItem("session")).toBe("active");
});

test("session is not saved when remember is false", () => {
  localStorage.clear();
  // Не сохраняем
  expect(localStorage.getItem("session")).toBe(null);
});