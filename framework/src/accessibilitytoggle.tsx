import React, { useEffect, useState } from "react";

const AccessibilityToggle: React.FC = () => {
  const [accessible, setAccessible] = useState(
    localStorage.getItem("accessibleMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("accessible", accessible);
    localStorage.setItem("accessibleMode", accessible ? "true" : "false");
  }, [accessible]);

  return (
    <button onClick={() => setAccessible(!accessible)}>
      {accessible ? "Обычная версия" : "Версия для слабовидящих"}
    </button>
  );
};

export default AccessibilityToggle;
