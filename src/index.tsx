// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import flowers, { FLOWER_HAS_THANKS, thanksPages } from "./flowers";
import MetaPixelProvider from "./providers/MetaPixelsProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const flowerName = (process.env.REACT_APP_FLOWER || "apc_consultoria").trim();
const SelectedApp = flowers[flowerName];

const { pathname } =
  typeof window !== "undefined"
    ? window.location
    : ({ pathname: "/" } as Location);

const isThanks =
  pathname === "/thanks" && FLOWER_HAS_THANKS[flowerName] === true;

const SelectedThanks = thanksPages[flowerName];

if (!SelectedApp && !isThanks) {
  root.render(
    <div style={{ padding: 20, fontFamily: "sans-serif", color: "red" }}>
      ⚠️ Flower "{flowerName}" não encontrado. Verifique a variável
      REACT_APP_FLOWER.
    </div>
  );
} else {
  root.render(
    <React.StrictMode>
      <MetaPixelProvider flowerKey={flowerName}>
        {isThanks ? (
          SelectedThanks ? (
            <SelectedThanks />
          ) : (
            <div>
              ⚠️ Nenhuma página de thanks configurada para "{flowerName}".
            </div>
          )
        ) : (
          <SelectedApp />
        )}
      </MetaPixelProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
