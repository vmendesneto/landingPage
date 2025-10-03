import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

interface Dor1Props {
  imageUrl: string;
  primaryColor: string;
  titulo: string;
  subtitulo: string;
}
const Dor1: React.FC<Dor1Props> = ({
  imageUrl,
  primaryColor,
  titulo,
  subtitulo,
}) => {
  const isMobile = useIsMobile();
  const containerStyle: React.CSSProperties = {
    backgroundColor: primaryColor,
    padding: "6rem 1.5rem",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "2.25rem",
    fontWeight: 800,
    textAlign: "center",
    color: "white",
    marginBottom: "4rem",
    padding: "2rem 0",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: isMobile ? "wrap" : "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
    borderRadius: "1rem",
  };

  const textStyle: React.CSSProperties = {
    flex: isMobile ? "1 1 100%" : "0 0 30%",
    maxWidth: isMobile ? "100%" : "30%",
    textAlign: "center",
  };

  const imageContainerStyle: React.CSSProperties = {
    flex: isMobile ? "1 1 100%" : "0 0 70%",
    maxWidth: isMobile ? "100%" : "70%",
    display: "flex",
    justifyContent: "center",
    marginTop: isMobile ? "2rem" : "0",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    borderRadius: "1rem",
    maxWidth: "320px",
  };

  return (
    <section style={containerStyle}>
      <h2 style={sectionTitleStyle}>{titulo}</h2>
      <div style={rowStyle}>
        <p style={textStyle}>{subtitulo}</p>
        <div style={imageContainerStyle}>
          <img src={imageUrl} alt="Imagem" style={imageStyle} />
        </div>
      </div>
    </section>
  );
};

export default Dor1;
