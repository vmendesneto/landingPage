import CTA1 from "../../componentes/cta/cta-1";
import Dor1 from "../../componentes/dor/dor-1";
import { Gancho1 } from "../../componentes/ganchos/gancho-1";
import ProvaSocial1 from "../../componentes/provaSocial/provaSocial-1";
import Rodape1 from "../../componentes/rodape/rodape-1";
import Solucao1 from "../../componentes/solucao/solucao-1";
import logo from "./assets/logo.png";
import fluxoImage from "./assets/fluxo-caixa.png";
import { ReactComponent as PlaneIcon } from "../assets/icons/outline/plane-arrival.svg";
import { ReactComponent as Cifrao } from "../assets/icons/outline/brand-cashapp.svg";
import { ReactComponent as Admin } from "../assets/icons/outline/report-analytics.svg";
import { ReactComponent as Grafico } from "../assets/icons/outline/graph.svg";

import { ReactComponent as Edit } from "../assets/icons/outline/edit.svg";
import CardWithIcon, {
  CardWithIconProps,
} from "../../componentes/cards/cardWithIcon";
import CardLight, { CardLightProps } from "../../componentes/cards/light";
import CardServico, {
  CardServicoProps,
} from "../../componentes/cards/cardservico";
import CardDepoimento, {
  CardDepoimentoProps,
} from "../../componentes/cards/cardDepoiment";
const ThemedCard: React.FC<CardWithIconProps> = (props) => (
  <CardWithIcon
    bottomLineColor={theme.colors.secondary}
    {...props}
    backgroundColor={theme.colors.primary}
    borderColor={theme.colors.secondary}
    textColor={theme.colors.white}
  />
);
export const theme = {
  components: {
    gancho: Gancho1,
    rodape: Rodape1,
    cta: CTA1,
    dor: Dor1,
    solucao: Solucao1,
    provaSocial: ProvaSocial1,
    card: ThemedCard,
  },

  colors: {
    primary: "#003366",
    secondary: "#0055a5",
    solucao: "#0d1140",
    provaSocial: "#f3f4f6",
    rodape: "#cce8ff",
    white: "#ffffff",
    gradient: "linear-gradient(to bottom right, #003366, #0055a5)",
    gradientCta: "linear-gradient(to bottom right, #0055a5, #0077cc)",
  },

  contatos: {
    whatsapp: "https://wa.me/553798766651",
    instagram: "APC_consultoria",
  },
  icons: {
    icon: "✔️",
  },
  imagens: {
    imagemPrincipal: logo,
    imagem: fluxoImage,
  },
  textos: {
    gancho: {
      titulo:
        "Conhecer Sua empresa e realizar seu planejamento é essencial. Com ele, você tem em mãos informações fundamentais para tomada de decisões certeiras",
      subtitulo: "",
      botao: "Quero uma consultoria personalizada",
    },
    dor: {
      titulo: "A importância do gerenciamento de contas",
      subtitulo:
        "O gerenciamento adequado das contas é um recurso essencial para a gestão estratégica de uma empresa. Afinal, quem deseja crescer deve ter um bom controle sobre suas finanças, baseado em dados concretos para direcionar a tomada de decisões, incluindo projetos de expansão dos negócios.",
    },
    provaSocial: {
      titulo: "PLANEJAMENTO DE MELHORIAS",
      subtitulo:
        "O planejamento é fundamental para todo e qualquer projeto. Quando temos um desejo ou uma necessidade, por mais complexa que possa ser, programar-se e elaborar um passo a passo é o caminho mais seguro e mais eficiente para conseguir realizá-la.",
      lista: [],
    },
    solucao: {
      titulo: "Nossos Serviços",
    },
    ctaFinal: {
      titulo: "Vamos profissionalizar sua empresa juntos?",
      subtitulo:
        "Fale com um de nossos especialistas e descubra como aplicar gestão estratégica e financeira no seu negócio.",
      botao: "Entrar em contato agora",
    },
    rodape: `© ${new Date().getFullYear()} APC Consultoria. Todos os direitos reservados.`,
  },
};
export const cardsInfo = [
  // {
  //   image: <Edit fill="currentColor" />,
  //   name: "Pauie Oliveira",
  //   company: "Teck Solutions",
  //   quote: "“Excriente serviço! Superou todas de minhas expectativas.”",
  // },

  {
    icon: <Grafico fill={theme.colors.secondary} width={24} height={24} />,
    title: "Planejamento Estratégico",
    description:
      "Criamos um plano de ação para sua empresa crescer de forma sólida, com metas, indicadores e foco no resultado.",
  },
  {
    icon: <Cifrao fill={theme.colors.secondary} width={24} height={24} />,
    title: "Controle Financeiro",
    description:
      "Implantamos ferramentas e rotinas para você dominar o fluxo de caixa, os custos e a lucratividade.",
  },
  {
    icon: <Admin fill={theme.colors.secondary} width={24} height={24} />,
    title: "Consultoria Administrativa",
    description:
      "Organização de processos internos, estrutura administrativa e apoio à gestão para decisões mais assertivas.",
  },
];
