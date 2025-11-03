import { useLanguage } from "@/lib/LanguageContext"
import { Link } from "react-router-dom"
import { SparklesCore } from "@/components/ui/sparkles"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { Phone, Bot, Zap, Globe } from "lucide-react"

export function Services() {
  const { t, language } = useLanguage();

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

      <div className="relative">
        <div className="relative z-10">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-kulim">
                  {t('services.title')}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                  {t('services.subtitle')}
                </p>
              </>
            }
          >
            <div className="h-full w-full bg-black rounded-2xl p-4 md:p-8 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {/* AI Phone Callers Service */}
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <h3 className="text-xl font-semibold text-white">{t('services.aiPhone.title')}</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4">
                    {t('services.aiPhone.description')}
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src="/image copy.png"
                      alt="AI Robot Technology"
                     className="w-full h-full object-contain bg-neutral-800"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex-grow"></div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center font-medium block"
                  >
                    {t('services.contactSales')}
                  </Link>
                </div>

                {/* Smart Chatbots Service */}
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <h3 className="text-xl font-semibold text-white">{t('services.chatbots.title')}</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4">
                    {t('services.chatbots.description')}
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-neutral-800 p-3 flex flex-col">
                      <div className="flex-1 space-y-2 overflow-y-auto">
                        <div className="flex justify-start">
                          <div className="bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            {language === 'en' ? 'Hi! How can I help you today?' : '¡Hola! ¿Cómo puedo ayudarte hoy?'}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-red-600 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            {language === 'en' ? "I'm interested in your services" : 'Estoy interesado en sus servicios'}
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            {language === 'en' ? 'Great! What type of business do you have?' : '¡Excelente! ¿Qué tipo de negocio tienes?'}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-red-600 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            {language === 'en' ? 'Real estate agency' : 'Agencia inmobiliaria'}
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-neutral-700 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                            {language === 'en' ? 'Perfect! Our AI can help qualify leads 24/7. Would you like to schedule a demo?' : '¡Perfecto! Nuestra IA puede ayudar a calificar leads 24/7. ¿Te gustaría programar una demo?'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-neutral-600">
                        <div className="flex-1 bg-neutral-700 rounded px-2 py-1">
                          <span className="text-neutral-400 text-xs">{language === 'en' ? 'Type your message...' : 'Escribe tu mensaje...'}</span>
                        </div>
                        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center font-medium block"
                  >
                    {t('services.contactSales')}
                  </Link>
                </div>

                {/* Web Development Service */}
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-2xl">
                      🌐
                    </div>
                    <h3 className="text-xl font-semibold text-white">{t('services.webDev.title')}</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-4">
                    {t('services.webDev.description')}
                  </p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60"
                      alt="Website Design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="flex-grow"></div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center font-medium block"
                  >
                    {t('services.contactSales')}
                  </Link>
                </div>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </div>
    </>
  );
}