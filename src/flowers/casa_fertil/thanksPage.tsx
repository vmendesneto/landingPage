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
        <h1 style={title}>✨ Obrigada por confiar no Casa Fértil!</h1>
        <p style={paragraph}>Sua compra foi confirmada com sucesso ✨</p>
        <p style={paragraph}>
          Em poucos minutos você receberá no e-mail usado na compra o acesso ao
          curso pela Kiwify (validade de 1 ano). Se não encontrar, verifique as
          pastas <strong>Spam</strong> e <strong>Promoções</strong>. Qualquer
          dúvida estamos a disposição no suporte 37-98418-0203 (WhatsApp).
        </p>
        <p style={paragraph}>
          Assim que entrar na plataforma, comece pelo módulo de{" "}
          <strong>Apresentação e Liberação de aulas</strong> — neles eu vou te
          guiar pela melhor forma de integrar o conhecimento com a prática.
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
          para inspirações diárias e dicas rápidas para preparar seu ninho.
        </p>
        <div style={signature}>
          ✨ Com carinho, <br /> Júnia Mendes
        </div>
      </div>
        
    </main>
  );
}
