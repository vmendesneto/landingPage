// src/providers/MetaPixelProvider.tsx
import React, { useEffect, useRef } from "react";
import { initMetaPixel, mpTrack } from "../facebook/metaPixels";
import { PIXELS_BY_FLOWER } from "../flowers";
import { trackViewContentOnScroll } from "../facebook/trackOnScroll";

type Props = {
  flowerKey: string;
  children?: React.ReactNode;
  scrollThreshold?: number;
};

const MetaPixelProvider: React.FC<Props> = ({
  flowerKey,
  children,
  scrollThreshold = 40,
}) => {
  const pixelId = PIXELS_BY_FLOWER[flowerKey];
  const bootOnce = useRef(false);
  const detachScrollRef = useRef<null | (() => void)>(null);

  useEffect(() => {
    if (!pixelId) {
      console.warn(
        `[MetaPixel] Pixel ID não encontrado para flower: ${flowerKey}`
      );
      return;
    }

    console.log(
      `[MetaPixel] Inicializando pixel: ${pixelId} para flower: ${flowerKey}`
    );
    initMetaPixel(pixelId);

    if (!bootOnce.current) {
      console.log(`[MetaPixel] Primeira execução - enviando PageView`);

      // 1) PageView imediato
      mpTrack("PageView");

      // 2) Setup scroll tracking com um pequeno delay para garantir que o DOM esteja pronto
      const setupScrollTracking = () => {
        console.log(
          `[MetaPixel] Configurando tracking de scroll em ${scrollThreshold}%`
        );
        detachScrollRef.current = trackViewContentOnScroll(scrollThreshold, {
          flower_key: flowerKey,
        });
      };

      // Executar imediatamente e também com delay como fallback
      setupScrollTracking();

      // Fallback: tentar novamente após 500ms caso o DOM ainda não esteja pronto
      setTimeout(() => {
        if (detachScrollRef.current === null) {
          console.log(`[MetaPixel] Fallback: reconfigurar tracking de scroll`);
          setupScrollTracking();
        }
      }, 500);

      bootOnce.current = true;
    }

    // Cleanup function
    return () => {
      console.log(`[MetaPixel] Limpando listeners de scroll`);
      if (detachScrollRef.current) {
        detachScrollRef.current();
        detachScrollRef.current = null;
      }
    };
  }, [pixelId, flowerKey, scrollThreshold]);

  // useEffect adicional para detectar mudanças na rota (SPA)
  useEffect(() => {
    const handleRouteChange = () => {
      if (bootOnce.current && pixelId) {
        console.log(
          `[MetaPixel] Mudança de rota detectada - enviando novo PageView`
        );
        mpTrack("PageView");

        // Reconfigurar scroll tracking para nova página
        if (detachScrollRef.current) {
          detachScrollRef.current();
        }
        detachScrollRef.current = trackViewContentOnScroll(scrollThreshold, {
          flower_key: flowerKey,
        });
      }
    };

    // Detectar mudanças de URL (para SPAs)
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      setTimeout(handleRouteChange, 100);
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      setTimeout(handleRouteChange, 100);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pixelId, flowerKey, scrollThreshold]);

  return <>{children}</>;
};

export default MetaPixelProvider;
