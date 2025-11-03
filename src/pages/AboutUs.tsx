import { SparklesCore } from "@/components/ui/sparkles"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/LanguageContext"

export function AboutUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      timestamp: new Date().toISOString(),
      language: language
    };

    try {
      const response = await fetch('https://hook.us2.make.com/qxpovjpl9sc1ydfsmq4fyclhvuqp5v0p', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Thank you for subscribing!');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      <div className="relative min-h-screen flex items-center">
        <footer className="text-neutral-100 py-10 px-5 font-sans w-full">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
            <div className="flex-1 min-w-[250px] mb-8 pr-8">
              <h3 className="text-4xl font-semibold mb-4 text-white">{t('about.title')}</h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="flex-1 min-w-[250px] mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">{t('about.contact')}</h3>
              <div className="space-y-2 text-neutral-200">
                <a href="mailto:topgsolutionscorp@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  topgsolutionscorp@gmail.com
                </a>
                <a href="tel:+16468079083" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  (646) 807-9083
                </a>
              </div>
            </div>

            <div className="flex-1 min-w-[250px] mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">{t('about.stayUpdated')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t('about.namePlaceholder')}
                  className="w-full max-w-xs px-4 py-2 rounded bg-black/40 backdrop-blur-sm border border-neutral-600 focus:outline-none focus:border-red-500 text-white placeholder-neutral-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('about.emailPlaceholder')}
                  className="w-full max-w-xs px-4 py-2 rounded bg-black/40 backdrop-blur-sm border border-neutral-600 focus:outline-none focus:border-red-500 text-white placeholder-neutral-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? t('about.subscribing') : t('about.subscribe')}
                </button>
              </form>
            </div>

            <div className="w-full border-t border-neutral-700/50 mt-8 pt-8 text-center">
              <div className="space-x-4 mb-4">
                <a href="/legal-disclaimer" className="text-neutral-300 hover:text-white transition-colors">{t('about.legalDisclaimer')}</a>
                <span className="text-neutral-600">|</span>
                <a href="/privacy-policy" className="text-neutral-300 hover:text-white transition-colors">{t('about.privacyPolicy')}</a>
                <span className="text-neutral-600">|</span>
                <a href="/terms-of-use" className="text-neutral-300 hover:text-white transition-colors">{t('about.termsOfUse')}</a>
                <span className="text-neutral-600">|</span>
                <a href="/cookie-policy" className="text-neutral-300 hover:text-white transition-colors">{t('about.cookiePolicy')}</a>
              </div>
              <p className="text-neutral-400 text-sm">
                {t('about.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
