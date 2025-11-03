import { SparklesCore } from "@/components/ui/sparkles"
import { CTASection } from "@/components/ui/cta"
import { useLanguage } from "@/lib/LanguageContext"

export function Contact() {
  const { t } = useLanguage();

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

      <div className="relative min-h-screen">
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <CTASection
              badge={{
                text: t('cta.badge')
              }}
              title={t('cta.title')}
              description={t('cta.description')}
              action={{
                text: t('cta.button'),
                href: "#",
                variant: "default"
              }}
              withGlow={true}
            />
          </div>
        </div>

        <div className="w-full h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none h-32" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7153485738897!2d-73.98837372346976!3d40.74482597138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3c39371%3A0x3a6b7c2bd532a8d7!2s246%205th%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1710790169909!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
