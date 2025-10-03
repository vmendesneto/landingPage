// flowers.tsx
import AppApc from "./apc_consultoria/App";
import AppCasaFertil from "./casa_fertil/App";
import AppJuniaMendes from "./junia_mendes/App";
import ThanksJunia from "../flowers/junia_mendes/thanksPage";
import ThanksFertil from "../flowers/casa_fertil/thanksPage";
const flowers: Record<string, React.FC> = {
  apc_consultoria: AppApc,
  junia_mendes: AppJuniaMendes,
  casa_fertil: AppCasaFertil,
};

// 👉 mapeie pelos MESMOS nomes acima:
export const PIXELS_BY_FLOWER: Record<string, string> = {
  apc_consultoria: "111111111111111", // <-- substitua pelo ID real
  junia_mendes: "599824865860805",
  casa_fertil: "599824865860805",
};
export const FLOWER_HAS_THANKS: Record<string, boolean> = {
  apc_consultoria: false,
  junia_mendes: true,
  casa_fertil: true,
};
export const thanksPages: Record<string, React.FC> = {
  junia_mendes: ThanksJunia,
  casa_fertil: ThanksFertil,
};
export default flowers;
