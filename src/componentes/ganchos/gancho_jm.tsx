import React from "react";
import { mpTrack } from "../../facebook/metaPixels";

interface GanchoJMProps {
  backgroundUrl: string;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  botao: string;
  url: string;
  primaryColor: string;
}

export const GanchoJM: React.FC<GanchoJMProps> = ({
  backgroundUrl,
  imageUrl,
  titulo,
  subtitulo,
  botao,
  url,
  primaryColor,
}) => {
  const container: React.CSSProperties = {
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
  };

  // CAMADA 1 — Fundo original
  const bgLayer: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  };

  // CAMADA 2 — Overlay translúcido
  const overlay: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundColor: "white",
    opacity: 0.45,
    zIndex: 1,
  };

  // CAMADA 3 — Conteúdo
  const content: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    maxWidth: "60rem",
    margin: "0 auto",
    // Padding apenas no mobile (telas menores que 768px)
    padding: "0 15px",
  };

  const flower: React.CSSProperties = {
    width: 200,
    height: "auto",
    display: "block",
    margin: "0 auto",
    paddingTop: 30,
    paddingBottom: 30,
  };

  const title: React.CSSProperties = {
    fontSize: "2.75em",
    fontWeight: 700,
    fontStyle: "italic",
    color: "rgb(110, 65, 113)",
    fontKerning: "normal",
    textDecorationLine: "none",
    marginBottom: "1rem",
    fontFamily: "'Playfair Display', serif",
    lineHeight: 1.2,
  };

  const subtitle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.6,
    color: "rgb(140, 156, 104)",
    maxWidth: "35rem",
    margin: "0 auto",
    fontFamily: "Glacial Indifference, sans-serif",
    paddingBottom: 15,
  };

  const pagePath =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : "";

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    mpTrack("InitiateCheckout", {
      content_name: titulo,
      content_category: "landing_cta",
      page_path: pagePath,
    });

    if (!url) {
      e.preventDefault();
    }
  };

  const href = url || "";

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .gancho-content {
            padding: 0 !important;
          }
        }
      `}</style>
      <section id="gancho-jm" style={container}>
        <div style={bgLayer} aria-hidden="true" />
        <div style={overlay} aria-hidden="true" />
        <div style={content} className="gancho-content">
          <img src={imageUrl} alt="Flor" style={flower} />
          <h1 style={title}>{titulo}</h1>
          <p style={subtitle}>{subtitulo}</p>
          <a
            href={href}
            target={url ? "_blank" : undefined}
            rel={url ? "noopener noreferrer" : undefined}
            className="gancho-button"
            onClick={handleClick}
          >
            {botao}
          </a>
        </div>
      </section>
    </>
  );
};
