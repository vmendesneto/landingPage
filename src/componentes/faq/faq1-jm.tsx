import React from "react";

interface FAQItem {
  pergunta: string;
  resposta: string;
}

interface FAQProps {
  backgroundUrl: string;
  titulo: string;
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ backgroundUrl, titulo, items }) => {
  return (
    <section
      className="faq-container"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="faq-overlay" />
      <div className="faq-content">
        <h2 className="faq-title">{titulo}</h2>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className="faq-item">
              <p className="faq-pergunta">{item.pergunta}</p>
              <p className="faq-resposta">{item.resposta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
