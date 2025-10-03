// src/componentes/solucao/solucao-1.tsx
import React from "react";

interface CardInfo {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface Solucao1Props {
  sessionColor: string;
  cardsInfo: any[];
  titulo: string;
  CardComponent: React.ComponentType<any>;
}

const Solucao1: React.FC<Solucao1Props> = ({
  sessionColor,
  cardsInfo,
  titulo,
  CardComponent,
}) => {
  const containerStyle: React.CSSProperties = {
    padding: "6rem 1.5rem",
    backgroundColor: sessionColor,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.25rem",
    fontWeight: 800,
    textAlign: "center",
    color: "white",
    marginBottom: "4rem",
    paddingBottom: "2rem",
    paddingTop: "2rem",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "3rem",
    maxWidth: "80rem",
    margin: "0 auto",
  };

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>{titulo}</h2>
      <div style={gridStyle}>
        {cardsInfo.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Solucao1;
