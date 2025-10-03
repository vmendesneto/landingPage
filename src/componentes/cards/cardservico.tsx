import React from "react";

export interface CardServicoProps {
  icon: React.ReactNode;
  title: string;
  gradient?: string;
  backgroundColor?: string;
  textColor?: string;
}

const CardServico: React.FC<CardServicoProps> = ({
  icon,
  title,
  gradient = "linear-gradient(to right, #ff7e00, #a300ff)",
  backgroundColor = "#0b0b0b",
  textColor = "#ffffff",
}) => {
  const cardStyle: React.CSSProperties = {
    background: backgroundColor,
    borderRadius: "1rem",
    padding: "2rem 1.5rem",
    textAlign: "center",
    color: textColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    border: "2px solid transparent",
    backgroundClip: "padding-box",
    boxShadow: "0 0 0 2px transparent", // placeholder para pseudo-borda
  };

  const wrapperStyle: React.CSSProperties = {
    borderRadius: "1rem",
    background: gradient,
    padding: "4px",
    display: "inline-block",
  };

  const iconStyle: React.CSSProperties = {
    marginBottom: "1rem",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  };

  const underlineStyle: React.CSSProperties = {
    width: "30px",
    height: "2px",
    backgroundColor: "#ff7e00",
    marginTop: "1rem",
    borderRadius: "1px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>{icon}</div>
        <div style={titleStyle}>{title}</div>
        <div style={underlineStyle} />
      </div>
    </div>
  );
};

export default CardServico;
// //Exemplo de uso
// const ThemedCard: React.FC<CardServicoProps> = (props) => (
//     <CardServico
//   {...props}
//   backgroundColor={theme.colors.primary}
//   gradient={`linear-gradient(to right, ${theme.colors.solucao}, ${theme.colors.secondary})`}
// />
// );
// export const cardsInfo = [
//   {
//     icon: <Edit width={80} height={48} fill="currentColor" />,
//     title: "EDIÇÃO\nPROFISSIONAL",
//   },
