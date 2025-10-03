import React from "react";

interface ProvaSocial1Props {
  provaSocialColor: string;
  primaryColor: string;
  icon: string;
  listItems: string[];
  titulo: string;
  subtitulo: string;
}
const ProvaSocial1: React.FC<ProvaSocial1Props> = ({
  provaSocialColor,
  primaryColor,
  icon,
  listItems,
  titulo,
  subtitulo,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: provaSocialColor,
    color: primaryColor,
    padding: "6rem 1.5rem",
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "40rem",
    margin: "0 auto",
    paddingBottom: "2rem",
    paddingTop: "2rem",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "2.25rem",
    fontWeight: 800,
    textAlign: "center",
    color: primaryColor,
    marginBottom: "2rem",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.125rem",
    marginTop: "1rem",
  };

  const listStyle: React.CSSProperties = {
    textAlign: "left",
    marginTop: "1.5rem",
    paddingLeft: "1rem",
    listStyle: "none",
  };

  const listItemStyle: React.CSSProperties = {
    position: "relative",
    paddingLeft: "1.5rem",
    marginBottom: "0.5rem",
  };
  return (
    <section style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={sectionTitleStyle}>{titulo}</h2>
        <p style={paragraphStyle}>{subtitulo}</p>
        <ul style={listStyle}>
          {listItems &&
            listItems.map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={listItemStyle}>{icon}</span> {item}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default ProvaSocial1;
