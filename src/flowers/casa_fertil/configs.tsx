import CTA1 from "../../componentes/cta/cta-1";
import Dor1 from "../../componentes/dor/dor-1";
import { Gancho1 } from "../../componentes/ganchos/gancho-1";
import ProvaSocial1 from "../../componentes/provaSocial/provaSocial-1";
import Rodape1 from "../../componentes/rodape/rodape-1";
import Solucao1 from "../../componentes/solucao/solucao-1";
import Fundo from "./assets/tecido_branco.jpg";
import Tecido from "./assets/tecido.jpg";
import Mistica from "./assets/mistica.jpg";
import Bandeiras from "./assets/bandeiras.jpg";
import Gravida from "./assets/gravida.jpg";
import Logo from "./assets/logo.png";
import Notebook from "./assets/notebook.jpg";
import Sofa from "./assets/sofa.jpg";
import Teste from "./assets/teste.jpg";
import Xicara from "./assets/xicara.jpg";

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
    linkKiwify: "https://pay.kiwify.com.br/yOgFO6J",
    tiktok: "https://www.tiktok.com/@juniamendesn",
    youtube: "https://www.youtube.com/@juniamendesn",
    site: "https://juniamendes.com.br",
  },
  icons: {
    icon: "✔️",
  },
  imagens: {
    imagemPrincipal: Fundo,
    imagemGancho: Logo,
    fundoSecundaria: Tecido,
    imagemSecundaria: Teste,
    imagemTerceira: Notebook,
    imagemQuarta: Xicara,
    imagemQuinta: Sofa,
    imagemMistica: Mistica,
    imagemJunia: Gravida,
  },
  textos: {
    gancho: {
      textoBotao: "QUERO MINHA CASA FÉRTIL",
      titulo: "A CASA FÉRTIL",
      subtitulo: `Transforme sua casa em um espaço acolhedor, harmonioso e fértil.
Alinhe a energia do seu lar ao seu sonho de engravidar — de forma simples, prática e amorosa.`,
    },
    dor: {
      titulo: "Quando a casa muda, você muda com ela",
      subtitulo: `• Sensação de acolhimento, paz e leveza no dia a dia.
• Menos ansiedade e mais confiança na jornada de tentante.
• Clareza emocional e ambiente com energia limpa e protegida.
• Um lar que apoia seus rituais, consultas e cuidados de fertilidade.
• A casa vibrando na mesma frequência do seu desejo de maternar.`,
    },
    ctaFinal: {
      titulo: "Seu lar pode ser o terreno fértil do seu sonho de ser mãe.",
      subtitulo: "Vamos preparar seu ninho juntas?",
    },
    arguments1: {
      titulo: "Mais que decoração: um método para preparar o seu ninho.",
      subtitulo: "O que é o método A Casa Fértil?",
      texto: `O Casa Fértil nasceu na minha jornada de tentante.
Depois de quatro tentativas frustradas de FIV, recebi um direcionamento espiritual: antes de receber uma nova vida, eu precisava preparar o espaço que me acolhia todos os dias — a minha casa.
Uni meus conhecimentos em Neuroarquitetura e Terapias Integrativas e criei um passo a passo para limpar energias, organizar, harmonizar e elevar a vibração do lar.
🌸 Na 5ª transferência — a primeira após aplicar o método em casa — eu engravidei da Elisa.
Hoje, eu compartilho esse caminho com você, para que sua casa vibre junto com o seu sonho de ser mãe.
⚠ Aviso amoroso: este método não promete gravidez nem substitui acompanhamento médico.
Ele apoia sua jornada no campo energético, emocional e ambiental.`,
    },
    arguments2: {
      subtitulo: "Como funciona na prática?",
      texto: `✔ 100% online (vídeo-aulas gravadas) para assistir no seu ritmo por 1 ano.
✔ Passo a passo para limpar, organizar e harmonizar cada ambiente.
✔ Rituais vibracionais simples para elevar a frequência do seu lar.
✔ Aplicável a qualquer casa ou apê — sem reformas e sem trocar tudo.
✔ Materiais de apoio para você colocar em prática no mesmo dia.`,
    },
    arguments3: {
      subtitulo: "O que dizem minhas alunas:",
      texto: `💬 "Quando comecei o curso, percebi como pequenas mudanças no meu lar mudaram também meu emocional. Me sinto muito mais confiante e acolhida na espera.” – Mariana S.

💬 “Transformei minha casa e senti uma paz enorme. O curso me deu clareza e força para continuar a tentar sem me sentir sozinha.” – Cláudia N.

💬 “Nunca pensei que o ambiente pudesse influenciar tanto. Hoje sinto minha casa vibrando junto comigo no meu sonho de engravidar.” – Aline P.`,
    },
    investimento: {
      titulo: "De R$ 297,00 por apenas",
      preco: "R$ 47,00",
      textSubPreco: "acesso por 1 ano ao curso completo online.",
      promo: "VALORES PROMOCIONAIS POR TEMPO LIMITADO",
      pagamento: "Parcele em até 11x no cartão ou pague à vista no Pix/Cartão.",
      bandeiras: Bandeiras,
    },
    arguments4: {
      subtitulo: "Prazer, eu sou a Júnia.",
      texto: `Sou Júnia Mendes, designer de interiores como primeira formação, terapeuta e criadora da Ressonância Terapêutica.
Vivi a dor e a fé da jornada de tentante. Depois de 4 FIVs sem sucesso, transformei a energia da minha casa com o método que criei — e na 5ª tentativa recebi a Elisa.
Minha missão é te ajudar a criar um ambiente fértil e amoroso para acolher o seu bebê.`,
    },
    faq: {
      titulo: "Perguntas Frequentes:",
      items: [
        {
          pergunta:
            "Vou precisar comprar móveis novos ou trocar toda a decoração?",
          resposta:
            "Não. O método prioriza o que você já tem, com ajustes de organização, disposição, luz, aromas e limpeza energética. Se desejar investir em algo, eu indico opções acessíveis.",
        },
        {
          pergunta: "Tem relação com alguma religião?",
          resposta:
            "Não. O Casa Fértil une Neuroarquitetura e Terapias Integrativas em práticas não-religiosas. Ele respeita a sua fé, qualquer que seja.",
        },
        {
          pergunta: "Preciso acreditar para funcionar?",
          resposta: "Não. A energia atua independentemente da sua crença.",
        },
        {
          pergunta: "Funciona em apartamento pequeno ou casa alugada?",
          resposta:
            "Sim! O foco é fluxo, intenção e energia. É totalmente adaptável ao seu espaço.",
        },
        {
          pergunta: "Vou ter acesso imediato ao conteúdo?",
          resposta:
            "Sim, logo após a inscrição você recebe os dados de acesso por e-mail, enviados pela Kiwify, e já pode começar as aulas.",
        },
        {
          pergunta: "Por quanto tempo tenho acesso?",
          resposta:
            "Você terá acesso por 1 ano ao curso, para rever sempre que quiser.",
        },
        {
          pergunta: "Substitui tratamento médico de fertilidade?",
          resposta:
            "Não. É uma prática complementar que atua no campo energético, emocional e ambiental.",
        },
        {
          pergunta: "Preciso ter experiência com terapias?",
          resposta: "Não. É passo a passo, pensado para quem está começando.",
        },
        {
          pergunta: "Como faço para me inscrever?",
          resposta:
            "Basta clicar no botão abaixo e garantir sua inscrição. Após o pagamento, você receberá as instruções sobre os próximos passos no e-mail.",
        },
      ],
    },
    rodape: `© ${new Date().getFullYear()} Júnia Mendes. Todos os direitos reservados.`,
  },
};
