declare global {
  interface Window {
    fbq?: ((...args: any[]) => void) & {
      queue?: any[];
      loaded?: boolean;
      version?: string;
      push?: any;
      callMethod?: (...args: any[]) => void;
    };
    _fbq?: any;
    __metaPixelInjected__?: boolean;
    __metaPixelInitializedWith__?: string;
  }
}

function injectMetaPixelScript() {
  if (typeof window === "undefined") return;
  if (window.__metaPixelInjected__) return;
  window.__metaPixelInjected__ = true;

  (function (f: any, d: Document, v: string) {
    if (f.fbq) return;

    const n: any = function (this: any) {
      // 👇 usamos "arguments" como no snippet oficial
      if (n.callMethod) {
        n.callMethod.apply(n, arguments as any);
      } else {
        n.queue.push(arguments as any);
      }
    };

    f.fbq = n;
    if (!f._fbq) f._fbq = n;

    n.push = n; // compat: fbq.push(...) chama o próprio fbq
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    const t = d.createElement("script");
    (t as HTMLScriptElement).async = true;
    (t as HTMLScriptElement).src = v;

    const s = d.getElementsByTagName("script")[0];
    s?.parentNode?.insertBefore(t, s);
  })(window, document, "https://connect.facebook.net/en_US/fbevents.js");
}

export function initMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;
  if (!pixelId) return;

  injectMetaPixelScript();

  if (window.__metaPixelInitializedWith__ === pixelId) return;

  window.fbq?.("init", pixelId);
  window.__metaPixelInitializedWith__ = pixelId;
}

export function mpTrack(event: string, params?: Record<string, any>) {
  try {
    window.fbq?.("track", event, params || {});
  } catch {
    /* silencioso */
  }
}

export function mpConsent(status: "grant" | "revoke") {
  window.fbq?.("consent", status);
}
