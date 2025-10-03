import React from "react";

export interface CardWithIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  bottomLineColor?: string; // nova prop opcional
}

const CardWithIcon: React.FC<CardWithIconProps> = ({
  icon,
  title,
  description,
  backgroundColor = "#002244",
  borderColor = "#004488",
  textColor = "#ffffff",
  bottomLineColor = "#00ccff",
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor,
    border: `1px solid ${borderColor}`,
    borderBottom: `4px solid ${bottomLineColor}`,
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    color: textColor,
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    height: "100%",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    lineHeight: 1,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: 1.4,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    margin: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <div style={titleStyle}>{title}</div>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default CardWithIcon;
//Exemplo de theme no configsd.ts
//  <CardWithIcon
//     {...props}
//     backgroundColor={theme.colors.primary}
//     borderColor={theme.colors.secondary}
//     textColor={theme.colors.white}
//     bottomLineColor={theme.colors.secondary}
//   />
//CardsInfo
//   {
//     icon: <PlaneIcon fill="#a81515" width={24} height={24} />,
//     title: "Análise Financeira",
//     description:
//       "Diagnóstico completo da saúde financeira da sua empresa. Enxergue com clareza onde está o problema.",
//   },
