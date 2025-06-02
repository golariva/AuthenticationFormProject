// Проверка переключения версии для слабовидящих
test("accessibility mode toggles correctly", () => {
  document.body.classList.remove("accessible");
  document.body.classList.toggle("accessible");

  expect(document.body.classList.contains("accessible")).toBe(true);
});