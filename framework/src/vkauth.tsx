import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    VKIDSDK: any;
  }
}

const VkAuth: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vkid/sdk@2.30.0/dist-sdk/umd/index.js";
    script.async = true;
    script.onload = () => {
      if ("VKIDSDK" in window) {
        const VKID = window.VKIDSDK;

        VKID.Config.init({
          app: 52478364,
          redirectUrl: "https://mysite.com",
          responseMode: VKID.ConfigResponseMode.Callback,
          source: VKID.ConfigSource.LOWCODE,
          scope: "",
        });

        const oAuth = new VKID.OAuthList();

        oAuth
          .render({
            container: containerRef.current,
            oauthList: ["vkid"],
          })
          .on(VKID.WidgetEvents.ERROR, (_err: any) => {
            alert("Ошибка авторизации. Повторите попытку позже.");
          })
          .on(VKID.OAuthListInternalEvents.LOGIN_SUCCESS, (payload: any) => {
            const { code, device_id } = payload;
            VKID.Auth.exchangeCode(code, device_id)
              .then(() => {
                alert("Авторизация пройдена успешно");
              })
              .catch(() => {
                alert("Ошибка авторизации");
              });
          });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div data-testid="vk-auth-container">
      <div ref={containerRef} className="social-buttons" />
    </div>
  );
};

export default VkAuth;
