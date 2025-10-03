// src/componentes/cards/light.tsx
import React from "react";

export interface CardLightProps {
  title: string;
  description: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const CardLight: React.FC<CardLightProps> = ({
  title,
  description,
  backgroundColor = "#003366",
  borderColor = "#0055a5",
  textColor = "#ffffff",
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor,
    padding: "2rem",
    borderRadius: "1.5rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    border: `1px solid ${borderColor}`,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    color: textColor,
  };

  const titleStyle: React.CSSProperties = {
    marginBottom: "1rem",
    fontSize: "1.5rem",
  };

  const descriptionWrapperStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    alignItems: "center",
  };

  const descriptionStyle: React.CSSProperties = {
    margin: 0,
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div style={descriptionWrapperStyle}>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

export default CardLight;
