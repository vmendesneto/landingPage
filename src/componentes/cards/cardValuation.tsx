import React from "react";

export interface CardValuationProps {
  background?: string;
  accentColor?: string;
  image?: string;
  smallTitle: string;
  title: string;
  subtitle: string;
  description: string;
}

const CardValuation: React.FC<CardValuationProps> = ({
  background = "#0a0a0a",
  accentColor = "#9747ff",
  image,
  smallTitle,
  title,
  subtitle,
  description,
}) => {
  const containerStyle: React.CSSProperties = {
    background,
    color: "#ffffff",
    borderRadius: "1rem",
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const textContainerStyle: React.CSSProperties = {
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const smallTitleStyle: React.CSSProperties = {
    color: accentColor,
    fontWeight: 700,
    fontSize: "0.9rem",
    textTransform: "uppercase",
  };

  const bigTitleStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: 800,
    lineHeight: 1.2,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 600,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    opacity: 0.9,
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "300px",
    borderRadius: "0.5rem",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <div style={smallTitleStyle}>{smallTitle}</div>
        <div style={bigTitleStyle}>{title}</div>
        <div style={subtitleStyle}>{subtitle}</div>
        <div style={descriptionStyle}>{description}</div>
      </div>
      {image && <img src={image} alt="Card visual" style={imageStyle} />}
    </div>
  );
};

export default CardValuation;
//EXEMPLO DE USO NO CONFIGS
//theme
// {
//   <CardValuation
//     {...props}
//     background={theme.colors.primary}
//     accentColor={theme.colors.secondary}
//   />
// // }
// CardsInfo
//   {
//     smallTitle: "FLÁVIO AUGUSTO REVELA",
//     bigTitle: "SEGREDO DO VALUATION 10×",
//     subtitle: "VALOR DE 0 a 10x",
//     description:
//       "Descubra na Super Aula Ao Vivo com Flávio Augusto. Vagas são limitadas – garanta sua inscrição GRATUITA!",
//     image: fluxoImage, // ou use `require` se for import local
//   },
