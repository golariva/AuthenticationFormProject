import { useEffect } from "react";

function TulipFall() {
  useEffect(() => {
    const createTulip = () => {
      const tulip = document.createElement("div");
      tulip.className = "tulip";
      tulip.style.left = Math.random() * 100 + "vw";
      tulip.style.animationDuration = 5 + Math.random() * 5 + "s";
      tulip.textContent = "🌷";
      document.body.appendChild(tulip);

      // Удаляем тюльпан после окончания анимации, чтобы не засорять DOM
      tulip.addEventListener("animationend", () => {
        tulip.remove();
      });
    };

    // Создаем 30 тюльпанов сразу
    for (let i = 0; i < 30; i++) {
      createTulip();
    }

    // Создаем новые тюльпаны каждые 2 секунды
    const intervalId = setInterval(createTulip, 2000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  return null; // Ничего не рендерим напрямую — тюльпаны в body через DOM
}

export default TulipFall;
