// src/flowers/apc/App.tsx
import React from "react";
import "../../App.css";
import LandingPageSkeleton from "../../home";

import { cardsInfo, theme } from "./configs";
const {
  gancho: Gancho,
  cta: CTA,
  rodape: Rodape,
  dor: Dor,
  solucao: SolucaoComponent,
  provaSocial: ProvaSocialComponent,
  card: CardComponent,
} = theme.components;
export default function AppApc(): JSX.Element {
  return (
    <LandingPageSkeleton
      color={theme.colors.primary}
      gancho={
        <Gancho
          imageUrl={theme.imagens.imagemPrincipal}
          url={theme.contatos.whatsapp}
          primaryColor={theme.colors.primary}
          gradient={theme.colors.gradient}
          titulo={theme.textos.gancho.titulo}
          subtitulo={theme.textos.gancho.subtitulo}
          botao={theme.textos.gancho.botao}
        />
      }
      dorSolucao={
        <Dor
          imageUrl={theme.imagens.imagem}
          primaryColor={theme.colors.primary}
          titulo={theme.textos.dor.titulo}
          subtitulo={theme.textos.dor.subtitulo}
        />
      }
      provaSocial={
        <ProvaSocialComponent
          provaSocialColor={theme.colors.provaSocial}
          primaryColor={theme.colors.primary}
          icon={theme.icons.icon}
          listItems={theme.textos.provaSocial.lista}
          titulo={theme.textos.provaSocial.titulo}
          subtitulo={theme.textos.provaSocial.subtitulo}
        />
      }
      solucao={
        <SolucaoComponent
          sessionColor={theme.colors.solucao}
          cardsInfo={cardsInfo}
          titulo={theme.textos.solucao.titulo}
          CardComponent={CardComponent}
        />
      }
      ctaFinal={
        <CTA
          gradient={theme.colors.gradient}
          secondaryColor={theme.colors.secondary}
          url={theme.contatos.whatsapp}
          titulo={theme.textos.ctaFinal.titulo}
          subtitulo={theme.textos.ctaFinal.subtitulo}
          botao={theme.textos.ctaFinal.botao}
        />
      }
      rodape={
        <Rodape
          primaryColor={theme.colors.primary}
          rodapeColor={theme.colors.rodape}
          whatsapp={theme.contatos.whatsapp}
          instagram={theme.contatos.instagram}
          rodape={theme.textos.rodape}
        />
      }
    />
  );
}
