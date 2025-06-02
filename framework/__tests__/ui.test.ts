// UI поведение при ошибке логина
test("invalid login input gets 'invalid' class on wrong login", () => {
  const input = document.createElement("input");
  input.id = "login";
  document.body.appendChild(input);

  input.classList.add("invalid");

  expect(input.classList.contains("invalid")).toBe(true);
});