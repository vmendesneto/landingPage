import React, { useEffect } from "react";
import { mpTrack } from "../../facebook/metaPixels";
import Fundo from "./assets/tecido_branco.jpg";

export default function ThanksPage() {
  useEffect(() => {
    const { search, pathname } =
      typeof window !== "undefined"
        ? window.location
        : ({ search: "", pathname: "" } as Location);

    const q = new URLSearchParams(search);
    const raw = q.get("v");
    const value = raw ? Number(raw) : 0;
    const currency = q.get("c") || "BRL";

    mpTrack("Purchase", {
      ...(value > 0 ? { value, currency } : {}),
      content_name: "checkout_success",
      page_path: `${pathname}${search}`,
    });
  }, []);

  const container: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
    fontFamily: "'Glacial Indifference', sans-serif",
    color: "#fff",
  };

  const bgLayer: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${Fundo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0,
  };

  const overlay: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  };

  const content: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    maxWidth: "40rem",
    background: "rgba(0, 0, 0, 0.2)", // caixa mais escura (55% preto)
    padding: "2rem",
    borderRadius: "16px",
    backdropFilter: "blur(6px)",
  };

  const title: React.CSSProperties = {
    fontSize: "2.2rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#6e4171",
  };

  const paragraph: React.CSSProperties = {
    fontSize: "1.2rem",
    lineHeight: 1.6,
    marginBottom: "1rem",
  };

  const signature: React.CSSProperties = {
    marginTop: "2rem",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "#6e4171",
  };

  return (
    <main style={container}>
      <div style={bgLayer} aria-hidden="true" />
      <div style={overlay} aria-hidden="true" />
      <div style={content}>
        <h1 style={title}>✨ Obrigada por confiar no SOS Energético!</h1>
        <p style={paragraph}>Sua compra foi confirmada com sucesso ✨</p>
        <p style={paragraph}>
          Em até 24 horas você receberá minha mensagem pessoal pelo WhatsApp e
          E-mail informados na compra, confirmando o início do seu SOS
          Energético.
        </p>
        <p style={paragraph}>
          Durante os 30 dias, estarei acompanhando você de perto por esse mesmo
          canal — você também pode tirar dúvidas ou compartilhar feedbacks
          diretamente comigo por lá.
        </p>
        <p style={paragraph}>
          Agora você tem em mãos um recurso poderoso para restaurar sua energia
          e clareza. Estou honrada em caminhar ao seu lado nessa jornada de
          leveza e equilíbrio.
        </p>
        <p style={paragraph}>
          Enquanto isso, me acompanhe em{" "}
          <a
            href="https://instagram.com/juniamendesn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6e4171", fontWeight: 600, fontSize: "1.3rem" }}
          >
            @juniamendesn
          </a>{" "}
          para mais práticas rápidas e inspirações diárias.
        </p>
        <div style={signature}>
          ✨ Com carinho, <br /> Júnia Mendes
        </div>
      </div>
    </main>
  );
}
