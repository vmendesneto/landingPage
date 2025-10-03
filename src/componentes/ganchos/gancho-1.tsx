import React, { useEffect } from "react";
import { mpTrack } from "../../facebook/metaPixels";

interface Gancho1Props {
  imageUrl: string;
  url: string;
  primaryColor: string;
  gradient: string;
  titulo: string;
  subtitulo: string;
  botao: string;
}
export const Gancho1: React.FC<Gancho1Props> = ({
  imageUrl,
  url,
  primaryColor,
  gradient,
  titulo,
  subtitulo,
  botao,
}) => {
  useEffect(() => {
    const bg = document.createElement("div");
    bg.style.position = "absolute";
    bg.style.inset = "0";
    bg.style.width = "100%";
    bg.style.height = "100%";
    if (imageUrl) {
      bg.style.backgroundImage = `url(${imageUrl})`;
    }
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    bg.style.opacity = "0.08";
    bg.style.zIndex = "1";
    bg.style.pointerEvents = "none";

    const container = document.getElementById("gancho-section");
    if (container) {
      container.style.position = "relative";
      container.appendChild(bg);
    }

    return () => {
      if (container) container.removeChild(bg);
    };
  }, [imageUrl]);

  const ganchoContainerStyle: React.CSSProperties = {
    background: gradient,
    color: "white",
    padding: "6rem 1.5rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
  };

  const ganchoContentStyle: React.CSSProperties = {
    maxWidth: "64rem",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
  };

  const ganchoTitleStyle: React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "1.5rem",
  };

  const ganchoSubtitleStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    maxWidth: "32rem",
    margin: "0 auto 2rem",
  };

  const ganchoButtonStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "white",
    color: primaryColor,
    fontWeight: 600,
    padding: "1rem 2rem",
    borderRadius: "9999px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
  };
  const pagePath =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : "";
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // 1) evento de clique/início de checkout
    mpTrack("InitiateCheckout", {
      content_name: titulo, // opcional
      content_category: "landing_cta", // opcional
      page_path: pagePath, // usa window.location para evitar o ESLint
      // value: 197, currency: "BRL",  // se quiser enviar valor
    });

    // 2) se não tiver link ainda, não navega
    if (!url) {
      e.preventDefault();
    }
  };

  const href = url || "";
  return (
    <section id="gancho-section" style={ganchoContainerStyle}>
      <div style={ganchoContentStyle}>
        <h1 style={ganchoTitleStyle}>{titulo}</h1>
        <p style={ganchoSubtitleStyle}>{subtitulo}</p>
        <a
          href={href}
          target={url ? "_blank" : undefined}
          rel={url ? "noopener noreferrer" : undefined}
          style={ganchoButtonStyle}
          onClick={handleClick}
        >
          {botao}
        </a>
      </div>
    </section>
  );
};
