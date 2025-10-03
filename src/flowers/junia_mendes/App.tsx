import React from "react";
import "../../App.css";
import LandingPageSkeleton from "../../home";

import { theme } from "./configs";
import { GanchoJM } from "../../componentes/ganchos/gancho_jm";
import Arg1 from "../../componentes/arguments/arg1-jm";
import Investimento from "../../componentes/arguments/arg2-jm";
import FAQ from "../../componentes/faq/faq1-jm";
const { rodape: Rodape } = theme.components;
export default function AppJuniaMendes(): JSX.Element {
  return (
    <LandingPageSkeleton
      color={theme.colors.primary}
      gancho={
        <GanchoJM
          backgroundUrl={theme.imagens.imagemPrincipal}
          imageUrl={theme.imagens.imagemGancho}
          titulo={theme.textos.gancho.titulo}
          subtitulo={theme.textos.gancho.subtitulo}
          botao={theme.textos.gancho.textoBotao}
          url={theme.contatos.linkKiwify}
          primaryColor={theme.colors.primary}
        />
      }
      argumentos1={
        <Arg1
          backgroundUrl={theme.imagens.imagemSecundaria}
          imageUrl={theme.imagens.imagemVela}
          titulo={theme.textos.arguments1.titulo}
          subtitulo={theme.textos.arguments1.subtitulo}
          texto={theme.textos.arguments1.texto}
        />
      }
      argumentos2={
        <Arg1
          backgroundUrl={theme.imagens.imagemPrincipal}
          imageUrl={theme.imagens.imagemMeditar}
          subtitulo={theme.textos.arguments2.subtitulo}
          texto={theme.textos.arguments2.texto}
          inverter={true}
        />
      }
      dorSolucao={
        <Arg1
          backgroundUrl={theme.imagens.imagemSecundaria}
          imageUrl={theme.imagens.imagemCama}
          texto={theme.textos.dor.subtitulo}
          subtitulo={theme.textos.dor.titulo}
          inverter={true}
        />
      }
      argumentos3={
        <Arg1
          backgroundUrl={theme.imagens.imagemSecundaria}
          imageUrl={theme.imagens.imagemFlores}
          subtitulo={theme.textos.arguments3.subtitulo}
          texto={theme.textos.arguments3.texto}
        />
      }
      provaSocial={
        <Investimento
          backgroundUrl={theme.imagens.imagemMistica}
          titulo={theme.textos.investimento.titulo}
          preco={theme.textos.investimento.preco}
          textSubPreco={theme.textos.investimento.textSubPreco}
          promo={theme.textos.investimento.promo}
          pagamento={theme.textos.investimento.pagamento}
          bandeiras={theme.textos.investimento.bandeiras}
          url={theme.contatos.linkKiwify}
        />
      }
      argumentos4={
        <Arg1
          backgroundUrl={theme.imagens.imagemSecundaria}
          imageUrl={theme.imagens.imagemJunia}
          subtitulo={theme.textos.arguments4.subtitulo}
          texto={theme.textos.arguments4.texto}
        />
      }
      solucao={
        <FAQ
          backgroundUrl={theme.imagens.imagemSecundaria}
          titulo={theme.textos.faq.titulo}
          items={theme.textos.faq.items}
        />
      }
      ctaFinal={
        <GanchoJM
          backgroundUrl={theme.imagens.imagemPrincipal}
          imageUrl={theme.imagens.imagemGancho}
          titulo={theme.textos.ctaFinal.titulo}
          subtitulo={theme.textos.ctaFinal.subtitulo}
          botao={theme.textos.gancho.textoBotao}
          url={theme.contatos.linkKiwify}
          primaryColor={theme.colors.primary}
        />
      }
      rodape={
        <Rodape
          primaryColor={theme.colors.primary}
          rodapeColor={theme.colors.rodape}
          whatsapp={theme.contatos.whatsapp}
          instagram={theme.contatos.instagram}
          rodape={theme.textos.rodape}
          tiktok={theme.contatos.tiktok}
          youtube={theme.contatos.youtube}
          site={theme.contatos.site}
        />
      }
    />
  );
}
