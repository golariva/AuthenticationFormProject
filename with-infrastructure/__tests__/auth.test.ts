// Проверка валидации логина и пароля
function validateLogin(login: string, password: string): boolean {
  return login === "admin" && password === "1234";
}

test("valid credentials pass", () => {
  expect(validateLogin("admin", "1234")).toBe(true);
});

test("invalid credentials fail", () => {
  expect(validateLogin("user", "wrong")).toBe(false);
});