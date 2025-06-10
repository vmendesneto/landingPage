import React from "react";
import "./App.css";
import fluxoImage from "./assets/fluxo-caixa.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="apc-page">
      {/* 1. Promessa (Gancho) */}
      <section className="apc-hero">
        <div className="apc-hero-content">
          <h1 className="apc-hero-title">
            Aumente seu Faturamento agora com gestão profissional e decisões
            estratégicas
          </h1>
          <p className="apc-hero-subtitle">
            A APC Consultoria oferece Análise, Planejamento e Controle
            Financeiro e Administrativo para empresas que querem crescer com
            segurança e inteligência.
          </p>
          <a
            href="https://wa.me/553798766651"
            className="apc-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero uma consultoria personalizada
          </a>
        </div>
      </section>

      {/* 2. Explicação da dor e solução */}
      <section className="apc-section apc-dark">
        <h2 className="apc-section-title">
          Você sente que sua empresa poderia estar crescendo mais?
        </h2>
        <div className="apc-section-row">
          <p className="apc-section-text">
            Muitos empreendedores lutam com problemas de fluxo de caixa, falta
            de controle financeiro e decisões tomadas sem base em dados reais.
            Nós ajudamos você a mudar esse cenário.
          </p>

          <div className="apc-section-image">
            <img
              src={fluxoImage}
              alt="Exemplo de Fluxo de Caixa"
              className="apc-illustration"
            />
          </div>
        </div>
      </section>

      {/* 3. Prova social ou reforço de autoridade */}
      <section className="apc-section apc-light">
        <div className="apc-cta-content">
          <h2 className="apc-section-title">Quem já confiou na APC</h2>
          <p className="apc-section-paragraph">
            Já apoiamos dezenas de empresas a estruturarem sua gestão e
            multiplicarem seus resultados com visão estratégica.
          </p>
          <ul className="apc-client-list">
            <li> Mais de 100 diagnósticos financeiros realizados</li>
            <li> Clientes nos setores de comércio, serviços e indústria</li>
            <li>Equipe com experiência em controladoria e gestão de risco</li>
          </ul>
        </div>
      </section>

      {/* 4. Serviços (a solução em detalhes) */}
      <section className="apc-services">
        <h2 className="apc-section-title">Nossos Serviços</h2>
        <div className="apc-services-grid">
          <div className="apc-service-card">
            <h3 className="apc-service-title">Análise Financeira</h3>
            <p>
              Diagnóstico completo da saúde financeira da sua empresa. Enxergue
              com clareza onde está o problema.
            </p>
          </div>
          <div className="apc-service-card">
            <h3 className="apc-service-title">Planejamento Estratégico</h3>
            <p>
              Criamos um plano de ação para sua empresa crescer de forma sólida,
              com metas, indicadores e foco no resultado.
            </p>
          </div>
          <div className="apc-service-card">
            <h3 className="apc-service-title">Controle Financeiro</h3>
            <p>
              Implantamos ferramentas e rotinas para você dominar o fluxo de
              caixa, os custos e a lucratividade.
            </p>
          </div>
          <div className="apc-service-card">
            <h3 className="apc-service-title">Consultoria Administrativa</h3>
            <p>
              Organização de processos internos, estrutura administrativa e
              apoio à gestão para decisões mais assertivas.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section id="contato" className="apc-cta">
        <div className="apc-cta-content">
          <h2 className="apc-cta-title">
            Vamos profissionalizar sua empresa juntos?
          </h2>
          <p className="apc-cta-text">
            Fale com um de nossos especialistas e descubra como aplicar gestão
            estratégica e financeira no seu negócio.
          </p>
          <a
            href="https://wa.me/553798766651"
            className="apc-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contato agora
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="apc-footer">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="apc-footer-text mb-4 md:mb-0">
            © {new Date().getFullYear()} APC Consultoria. Todos os direitos
            reservados.
          </p>
          <div className="apc-footer-social flex space-x-6">
            <a
              href="https://instagram.com/APC_consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="apc-footer-icon"
            >
              {React.createElement(FaInstagram)}
            </a>
            <a
              href="https://wa.me/553798766651"
              target="_blank"
              rel="noopener noreferrer"
              className="apc-footer-icon"
            >
              {React.createElement(FaWhatsapp)}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
