import { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
  }
}

export function Chatbot() {
  useEffect(() => {
    window.VG_CONFIG = {
      ID: "txq1bqv8cipcr684",
      region: 'na',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}