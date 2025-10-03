import React from "react";
import { mpTrack } from "../../facebook/metaPixels";

interface InvestimentoProps {
  backgroundUrl: string;
  titulo: string;
  preco: string;
  textSubPreco: string;
  promo: string;
  pagamento: string;
  bandeiras: string;
  url: string;
}

const Investimento: React.FC<InvestimentoProps> = ({
  backgroundUrl,
  titulo,
  preco,
  textSubPreco,
  promo,
  pagamento,
  bandeiras,
  url,
}) => {
  const pagePath =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : "";

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    mpTrack("InitiateCheckout", {
      content_name: titulo,
      content_category: "landing_cta",
      page_path: pagePath,
    });

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      e.preventDefault();
    }
  };

  return (
    <section
      className="investimento-container"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="investimento-overlay" />
      <div className="investimento-card">
        <h2 className="investimento-title">{titulo}</h2>
        <button className="investimento-preco-box" onClick={handleClick}>
          <div className="investimento-preco">
            <strong>{preco}</strong>
            <span>{textSubPreco}</span>
          </div>
        </button>
        <p className="investimento-promo">{promo}</p>
        <p className="investimento-pagamento">{pagamento}</p>
        <div className="investimento-bandeiras">
          <img src={bandeiras} alt="Bandeiras" />
        </div>
      </div>
    </section>
  );
};

export default Investimento;
