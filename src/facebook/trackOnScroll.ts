// src/facebook/trackOnScroll.ts
import { mpTrack } from "./metaPixels";

/**
 * Dispara ViewContent quando o usuário atingir o threshold de scroll (ex.: 40%)
 * Calcula baseado no SCROLL REAL da página, não no conteúdo visto
 * Envia parâmetros opcionais, SEM time_on_page_sec e SEM flower.
 * Retorna uma função de cleanup para remover o listener.
 */
export function trackViewContentOnScroll(
  thresholdPercent = 40,
  extraParams?: Record<string, any>
) {
  let fired = false;
  let initialCheckInterval: NodeJS.Timeout | null = null;
  const passive = { passive: true } as AddEventListenerOptions;

  const pagePath = () => {
    if (typeof window === "undefined") return "";
    const { pathname, search } = window.location;
    return `${pathname}${search}`;
  };

  const measure = () => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const doc = document.documentElement;
    const body = document.body;

    const scrollTop = window.scrollY ?? doc.scrollTop ?? body.scrollTop ?? 0;
    const fullHeight = Math.max(
      doc.scrollHeight,
      body.scrollHeight,
      doc.offsetHeight,
      body.offsetHeight
    );
    const viewport = window.innerHeight ?? doc.clientHeight ?? 0;
    const maxScroll = fullHeight - viewport;

    // Se a página não tem scroll, considerar como 100%
    if (maxScroll <= 0) {
      console.log(`[Scroll Debug] Página sem scroll - considerando 100%`);
      if (!fired && thresholdPercent <= 100) {
        fired = true;
        cleanup();
        console.log("✅ Disparou ViewContent (página sem scroll)");
        mpTrack("ViewContent", {
          content_category: "landing",
          scroll_percent: 100,
          page_path: pagePath(),
          page_title: document.title,
          ...(extraParams || {}),
        });
      }
      return;
    }

    const scrollPercent = Math.min(
      100,
      Math.round((scrollTop / maxScroll) * 100)
    );

    console.log(
      `[Scroll Debug] ${scrollPercent}% (scrollTop: ${scrollTop}, maxScroll: ${maxScroll})`
    );

    if (!fired && scrollPercent >= thresholdPercent) {
      fired = true;
      cleanup();
      console.log("✅ Disparou ViewContent em:", scrollPercent, "%");
      mpTrack("ViewContent", {
        content_category: "landing",
        scroll_percent: scrollPercent,
        page_path: pagePath(),
        page_title: document.title,
        ...(extraParams || {}),
      });
    }
  };

  const onScroll = () => requestAnimationFrame(measure);

  const cleanup = () => {
    if (initialCheckInterval) {
      clearInterval(initialCheckInterval);
      initialCheckInterval = null;
    }
    window.removeEventListener("scroll", onScroll, passive);
  };

  // Adicionar listener de scroll
  window.addEventListener("scroll", onScroll, passive);

  // Verificação inicial com polling para garantir que a página carregou completamente
  let checksCount = 0;
  const maxChecks = 20; // máximo 20 verificações (4 segundos)

  const initialCheck = () => {
    checksCount++;
    measure();

    // Se já disparou ou atingiu o máximo de verificações, parar o polling
    if (fired || checksCount >= maxChecks) {
      if (initialCheckInterval) {
        clearInterval(initialCheckInterval);
        initialCheckInterval = null;
      }
    }
  };

  // Verificação imediata
  requestAnimationFrame(initialCheck);

  // Polling inicial a cada 200ms para casos onde a página ainda está carregando
  initialCheckInterval = setInterval(initialCheck, 200);

  return cleanup;
}

/**
 * Versão alternativa que dispara múltiplos eventos em diferentes percentuais
 * Útil para tracking mais granular do comportamento do usuário
 */
export function trackMultipleScrollEvents(
  thresholds: number[] = [25, 40, 60, 80, 100],
  extraParams?: Record<string, any>
) {
  const firedThresholds = new Set<number>();
  let initialCheckInterval: NodeJS.Timeout | null = null;
  const passive = { passive: true } as AddEventListenerOptions;

  const pagePath = () => {
    if (typeof window === "undefined") return "";
    const { pathname, search } = window.location;
    return `${pathname}${search}`;
  };

  const measure = () => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const doc = document.documentElement;
    const body = document.body;
    const scrollTop = window.scrollY ?? doc.scrollTop ?? body.scrollTop ?? 0;
    const fullHeight = Math.max(
      doc.scrollHeight,
      body.scrollHeight,
      doc.offsetHeight,
      body.offsetHeight
    );
    const viewport = window.innerHeight ?? doc.clientHeight ?? 0;
    const maxScroll = fullHeight - viewport;

    if (maxScroll <= 0) {
      // Disparar todos os thresholds para páginas sem scroll
      thresholds.forEach((threshold) => {
        if (!firedThresholds.has(threshold)) {
          firedThresholds.add(threshold);
          mpTrack("ViewContent", {
            content_category: "landing",
            scroll_percent: threshold,
            page_path: pagePath(),
            page_title: document.title,
            ...(extraParams || {}),
          });
        }
      });
      cleanup();
      return;
    }

    const scrollPercent = Math.min(
      100,
      Math.round((scrollTop / maxScroll) * 100)
    );

    // Verificar se algum threshold foi atingido
    thresholds.forEach((threshold) => {
      if (!firedThresholds.has(threshold) && scrollPercent >= threshold) {
        firedThresholds.add(threshold);
        console.log(
          `✅ Disparou ViewContent em: ${threshold}% (atual: ${scrollPercent}%)`
        );
        mpTrack("ViewContent", {
          content_category: "landing",
          scroll_percent: threshold,
          page_path: pagePath(),
          page_title: document.title,
          ...(extraParams || {}),
        });
      }
    });

    // Se todos os thresholds foram disparados, remover listener
    if (firedThresholds.size === thresholds.length) {
      cleanup();
      console.log("✅ Todos os thresholds de scroll foram disparados");
    }
  };

  const onScroll = () => requestAnimationFrame(measure);

  const cleanup = () => {
    if (initialCheckInterval) {
      clearInterval(initialCheckInterval);
      initialCheckInterval = null;
    }
    window.removeEventListener("scroll", onScroll, passive);
  };

  window.addEventListener("scroll", onScroll, passive);

  // Verificação inicial com polling
  let checksCount = 0;
  const maxChecks = 20;

  const initialCheck = () => {
    checksCount++;
    measure();

    if (
      firedThresholds.size === thresholds.length ||
      checksCount >= maxChecks
    ) {
      if (initialCheckInterval) {
        clearInterval(initialCheckInterval);
        initialCheckInterval = null;
      }
    }
  };

  requestAnimationFrame(initialCheck);
  initialCheckInterval = setInterval(initialCheck, 200);

  return cleanup;
}
