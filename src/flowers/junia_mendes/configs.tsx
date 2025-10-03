import CTA1 from "../../componentes/cta/cta-1";
import Dor1 from "../../componentes/dor/dor-1";
import { Gancho1 } from "../../componentes/ganchos/gancho-1";
import ProvaSocial1 from "../../componentes/provaSocial/provaSocial-1";
import Rodape1 from "../../componentes/rodape/rodape-1";
import Solucao1 from "../../componentes/solucao/solucao-1";
import Fundo from "./assets/tecido_branco.jpg";
import Flor from "./assets/flor.png";
import Tecido from "./assets/tecido.jpg";
import Vela from "./assets/mulher_vela.jpg";
import Meditar from "./assets/mulher_costa.jpg";
import Cama from "./assets/mulher_cama.jpg";
import Flores from "./assets/flores.jpg";
import Mistica from "./assets/mistica.jpg";
import Bandeiras from "./assets/bandeiras.jpg";
import Junia from "./assets/junia.jpg";

export const theme = {
  components: {
    gancho: Gancho1,
    rodape: Rodape1,
    cta: CTA1,
    dor: Dor1,
    solucao: Solucao1,
    provaSocial: ProvaSocial1,
  },

  colors: {
    primary: "#6e4171",
    rodape: "#cce8ff",
  },
  // ESTE BUILD ESTÁ NO NETFLY PELO LOGIN DO EMAIL ZITURIMMENDES
  contatos: {
    whatsapp: "https://wa.me/5537999862193",
    instagram: "juniamendesn",
    linkPagto: "https://pag.ae/814pye5B3",
    linkKiwify: "https://pay.kiwify.com.br/xUpZ12F",
    tiktok: "https://www.tiktok.com/@juniamendesn",
    youtube: "https://www.youtube.com/@juniamendesn",
    site: "https://juniamendes.com.br",
  },
  icons: {
    icon: "✔️",
  },
  imagens: {
    imagemPrincipal: Fundo,
    imagemGancho: Flor,
    imagemSecundaria: Tecido,
    imagemVela: Vela,
    imagemMeditar: Meditar,
    imagemCama: Cama,
    imagemFlores: Flores,
    imagemMistica: Mistica,
    imagemJunia: Junia,
  },
  textos: {
    gancho: {
      textoBotao: "QUERO MEU SOS AGORA",
      titulo: "SOS ENERGÉTICO",
      subtitulo: `Ansiedade, cansaço e noites mal dormidas?
Receba harmonização energética diária à distância para restaurar seu bem-estar, acalmar suas emoções e recuperar sua disposição — sem mudar nada na sua rotina.`,
    },
    dor: {
      titulo: "Benefícios do\n SOS Energético:",
      subtitulo: `• Alívio imediato, como se tirasse um peso dos ombros.
• Sono profundo e restaurador, acordando renovada.
• Redução da ansiedade, estresse e agitação.
• Mais disposição e vitalidade para encarar o dia.
• Equilíbrio emocional e sensação de paz interior.
• Proteção energética contra ambientes e pessoas pesadas.
• Imagine ter essa sensação de bem-estar e clareza todos os dias`,
    },
    ctaFinal: {
      titulo: "Recupere seu equilíbrio agora mesmo",
      subtitulo:
        "Em poucos minutos, você pode sentir sua energia mais leve, alinhada e protegida.",
    },
    arguments1: {
      titulo: "Restaure sua energia e transforme sua vida!",
      subtitulo: "O que é o SOS Energético?",
      texto: `Sabe aqueles dias em que você acorda drenada, sem energia, ansiosa ou irritada?
O SOS Energético é como um pronto-socorro vibracional: um cuidado diário que atua no seu campo emocional, espiritual e energético, trazendo alívio e equilíbrio — sem que você precise estar online ou parar o que está fazendo.
 É simples, profundo e acessível. Você só precisa se permitir receber.`,
    },
    arguments2: {
      subtitulo: "Como funciona na prática?",
      texto: `✔ Você recebe harmonizações energéticas diárias por 30 dias.
✔ Cada sessão traz mais leveza, clareza mental e serenidade.
✔ Funciona 100% à distância — você continua sua rotina normalmente.
✔ Acompanhamento pelo WhatsApp para tirar dúvidas e compartilhar percepções.
✔ Em poucas semanas, você já nota mudanças reais no seu sono, energia e equilíbrio emocional.`,
    },
    arguments3: {
      subtitulo: "O que dizem minhas clientes:",
      texto: `💬 “Desde o primeiro dia já senti uma leveza
enorme! Meu sono melhorou e percebi que minha
vida ficou mais tranquila.” – Ana P.

💬 “Foi transformador! Me senti mais conectada
com minha família, e percebi mudanças até no
meu humor.” – Juliana M.

💬 “Eu não imaginava que um tratamento à
distância pudesse ter tanto impacto. Me sinto
renovada!” – Camila S.`,
    },
    investimento: {
      titulo: "De R$ 47,00 por apenas",
      preco: "R$ 29,00",
      textSubPreco: "por 30 dias de cuidado energético diário.",
      promo: "VALORES PROMOCIONAIS POR TEMPO LIMITADO",
      pagamento:
        "Isso significa menos de R$ 1,00 por dia para sentir mais leveza, equilíbrio e disposição.",
      bandeiras: Bandeiras,
    },
    arguments4: {
      subtitulo: "Quem está por trás do SOS Energético?",
      texto: `Sou Júnia Mendes, terapeuta holística e criadora da Ressonância Terapêutica, um método de harmonização profunda que atua no campo energético, emocional e espiritual das pessoas e ambientes.
Minha missão é ajudar você a restaurar sua energia, clareza e equilíbrio para que viva mais leve e em paz.
O SOS Energético nasceu como uma versão simples e acessível desse trabalho, um socorro vibracional imediato, para que você experimente na prática como a energia pode transformar o seu bem-estar em minutos.`,
    },
    faq: {
      titulo: "Perguntas Frequentes:",
      items: [
        {
          pergunta: "Preciso estar disponível em algum horário específico?",
          resposta:
            "Não! O tratamento é feito à distância e a energia é enviada para você onde quer que esteja. Você pode seguir sua rotina normalmente.",
        },
        {
          pergunta: "Funciona mesmo à distância?",
          resposta:
            "Sim. A atuação é vibracional e não depende de proximidade física para ter resultado.",
        },
        {
          pergunta: "Preciso acreditar para funcionar?",
          resposta: "Não. A energia atua independentemente da sua crença.",
        },
        {
          pergunta: "O que acontece depois da compra?",
          resposta: `Assim que sua inscrição for confirmada, você receberá uma mensagem minha no WhatsApp informando o início do seu SOS.\n👉 Durante os 30 dias, você pode me chamar no mesmo WhatsApp para tirar dúvidas ou compartilhar seus relatos.\n👉 No final do período, você também receberá minha mensagem de encerramento com orientações sobre os próximos passos.`,
        },
        {
          pergunta: "Quanto tempo dura o efeito?",
          resposta:
            "Muitas pessoas relatam alívio imediato e percebem benefícios contínuos nos dias seguintes.",
        },
        {
          pergunta: "Substitui tratamento médico?",
          resposta:
            "Não. A harmonização energética é complementar e não substitui consultas médicas ou psicológicas.",
        },
        {
          pergunta: "É um tratamento espírita?",
          resposta:
            "Não. O SOS Energético é realizado através de Terapias Integrativas, sem vínculo religioso.",
        },
      ],
    },
    rodape: `© ${new Date().getFullYear()} Júnia Mendes. Todos os direitos reservados.`,
  },
};
