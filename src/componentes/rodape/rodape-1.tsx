import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

interface Rodape1Props {
  primaryColor: string;
  rodapeColor: string;
  whatsapp: string;
  instagram: string;
  rodape: string;
  tiktok?: string;
  youtube?: string;
  site?: string;
}
const Rodape1: React.FC<Rodape1Props> = ({
  primaryColor,
  rodapeColor,
  whatsapp,
  instagram,
  rodape,
  tiktok,
  youtube,
  site,
}) => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: primaryColor,
    textAlign: "center",
    padding: "1.5rem",
    marginTop: "2.5rem",
    color: "white",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "0.875rem",
  };

  const iconRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginBottom: "1rem",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    color: rodapeColor,
  };
  return (
    <footer style={footerStyle}>
      <div style={iconRowStyle}>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaWhatsapp />
        </a>
        <a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaInstagram />
        </a>
        {tiktok && (
          <a
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaTiktok />
          </a>
        )}
        {youtube && (
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaYoutube />
          </a>
        )}
        {site && (
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaGlobe />
          </a>
        )}
      </div>
      <p style={textStyle}>{rodape}</p>
    </footer>
  );
};
export default Rodape1;
