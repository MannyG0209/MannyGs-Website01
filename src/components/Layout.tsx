import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "@/lib/LanguageContext"
import { Globe, X } from "lucide-react"

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowCookieConsent(true);
    }

    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 3000);

    window.VG_CONFIG = {
      ID: "cnunzex2xods76s0",
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

    const checkForButton = setInterval(() => {
      const whatsappButton = document.getElementById('vg_whatsapp_toggle');
      if (whatsappButton) {
        whatsappButton.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open('https://wa.me/16468079083', '_blank');
        };
        clearInterval(checkForButton);
      }
    }, 1000);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      clearTimeout(timer);
      clearInterval(checkForButton);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  return (
    <>
      <div className="relative z-20 w-full p-4 fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/image.png" 
                alt="Top G Solutions" 
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-white hover:text-red-500 transition-colors font-medium ${
                  location.pathname === '/' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/services"
                className={`text-white hover:text-red-500 transition-colors font-medium ${
                  location.pathname === '/services' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-red-500 transition-colors font-medium ${
                  location.pathname === '/about' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className={`text-white hover:text-red-500 transition-colors font-medium ${
                  location.pathname === '/contact' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
          <div className="flex md:hidden justify-center mt-2">
            <nav className="flex items-center gap-4">
              <Link
                to="/"
                className={`text-white hover:text-red-500 transition-colors text-sm ${
                  location.pathname === '/' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/services"
                className={`text-white hover:text-red-500 transition-colors text-sm ${
                  location.pathname === '/services' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-red-500 transition-colors text-sm ${
                  location.pathname === '/about' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className={`text-white hover:text-red-500 transition-colors text-sm ${
                  location.pathname === '/contact' ? 'text-red-500' : ''
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
          <button
            onClick={toggleLanguage}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
          >
            <Globe className="w-6 h-6" />
            <span className="text-sm font-medium">
              {language === 'en' ? 'ES' : 'EN'}
            </span>
          </button>
        </div>
      </div>

      {children}

      {showPromo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 rounded-xl max-w-md w-full p-6 relative animate-scale-in">
            <button
              onClick={() => setShowPromo(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="inline-block bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {t('promo.badge')}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t('promo.title')}
              </h2>
              <p className="text-neutral-300 mb-6">
                {t('promo.description')}
              </p>
              <div className="space-x-4">
                <Link
                  to="/services"
                  onClick={() => setShowPromo(false)}
                  className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  {t('nav.services')}
                </Link>
                <button
                  onClick={() => setShowPromo(false)}
                  className="px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  {t('promo.later')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex justify-between items-center z-50">
          <p className="text-sm flex-1 mr-4">
            {t('about.cookieText')}{' '}
            <a href="/cookie-policy" className="text-red-500 hover:text-red-400 underline">
              {t('about.cookiePolicy')}
            </a>
            .
          </p>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            {t('about.acceptCookies')}
          </button>
        </div>
      )}
    </>
  );
}
