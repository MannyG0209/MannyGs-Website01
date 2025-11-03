import { useLanguage } from "@/lib/LanguageContext"
import { SparklesCore } from "@/components/ui/sparkles"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect"

export function Home() {
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

      <div className="relative h-screen flex flex-col justify-center items-center bg-transparent">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <div className="h-32 md:h-40 mb-6">
                  <VaporizeTextCycle
                    texts={t('hero.texts')}
                    font={{
                      fontFamily: "Kulim Park, sans-serif",
                      fontSize: "64px",
                      fontWeight: 700
                    }}
                    color="rgb(255, 255, 255)"
                    spread={3}
                    density={7}
                    animation={{
                      vaporizeDuration: 2.5,
                      fadeInDuration: 1.2,
                      waitDuration: 1
                    }}
                    direction="left-to-right"
                    alignment="left"
                    tag={Tag.H1}
                  />
                </div>
                <p className="mt-6 text-neutral-300 max-w-lg text-lg">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}