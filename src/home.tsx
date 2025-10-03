import React from "react";

interface LandingPageSkeletonProps {
  color?: string;
  gancho: React.ReactNode;
  dorSolucao: React.ReactNode;
  provaSocial: React.ReactNode;
  solucao: React.ReactNode;
  ctaFinal: React.ReactNode;
  rodape: React.ReactNode;
  argumentos1?: React.ReactNode;
  argumentos2?: React.ReactNode;
  argumentos3?: React.ReactNode;
  argumentos4?: React.ReactNode;
}

const LandingPageSkeleton: React.FC<LandingPageSkeletonProps> = ({
  color,
  gancho,
  dorSolucao,
  provaSocial,
  solucao,
  ctaFinal,
  rodape,
  argumentos1,
  argumentos2,
  argumentos3,
  argumentos4,
}) => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: color || "#cce8ff",
    color: "#cce8ff",
    fontFamily: "sans-serif",
    minHeight: "100vh",
  };
  return (
    <div style={pageStyle}>
      {gancho}
      {argumentos1}
      {argumentos2}
      {dorSolucao}
      {argumentos3}
      {provaSocial}
      {argumentos4}
      {solucao}
      {ctaFinal}
      {rodape}
    </div>
  );
};

export default LandingPageSkeleton;
