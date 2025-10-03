import React from "react";

export interface CardDepoimentoProps {
  image: string;
  name: string;
  company: string;
  quote: string;
  backgroundColor?: string;
  textColor?: string;
}

const CardDepoimento: React.FC<CardDepoimentoProps> = ({
  image,
  name,
  company,
  quote,
  backgroundColor = "#3a1d52",
  textColor = "#ffffff",
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    borderRadius: "1rem",
    padding: "2rem 1.5rem",
    textAlign: "center",
    width: "100%",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  };

  const imageStyle: React.CSSProperties = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const starsStyle: React.CSSProperties = {
    color: "#FFD700", // amarelo estrela
    fontSize: "1.25rem",
    letterSpacing: "0.2rem",
  };

  const quoteStyle: React.CSSProperties = {
    fontStyle: "italic",
    lineHeight: 1.5,
  };

  const nameStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: "1.1rem",
  };

  const companyStyle: React.CSSProperties = {
    opacity: 0.9,
    fontSize: "0.95rem",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={starsStyle}>★★★★★</div>
      <div style={quoteStyle}>{quote}</div>
      <div style={nameStyle}>{name}</div>
      <div style={companyStyle}>{company}</div>
    </div>
  );
};

export default CardDepoimento;
//Exemplo de uso
//   <CardDepoimento
//     {...props}
//     backgroundColor={theme.colors.primary}
//     textColor={theme.colors.white}
//   />
// // );
// export const cardsInfo = [
//  {
//     image: "/assets/testimonials/pauie.png",
//     name: "Pauie Oliveira",
//     company: "Teck Solutions",
//     quote: "“Excriente serviço! Superou todas de minhas expectativas.”",
//   },
