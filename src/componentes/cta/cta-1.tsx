import React from "react";

interface CTA1Props {
  gradient: string;
  secondaryColor: string;
  url: string;
  titulo: string;
  subtitulo: string;
  botao: string;
}
const CTA1: React.FC<CTA1Props> = ({
  gradient,
  secondaryColor,
  url,
  titulo,
  subtitulo,
  botao,
}) => {
  const ctaStyle: React.CSSProperties = {
    background: gradient,
    padding: "6rem 1.5rem",
    textAlign: "center",
    color: "white",
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "40rem",
    margin: "0 auto",
    padding: "2rem 0",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.25rem",
    fontWeight: 800,
    marginBottom: "1.5rem",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "1.125rem",
    marginBottom: "2rem",
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "white",
    color: secondaryColor,
    fontWeight: 600,
    padding: "1rem 2rem",
    borderRadius: "9999px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
  };
  const href = url || "";
  return (
    <section style={ctaStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>{titulo}</h2>
        <p style={textStyle}>{subtitulo}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          {botao}
        </a>
      </div>
    </section>
  );
};
export default CTA1;
