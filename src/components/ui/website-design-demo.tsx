import { useState, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, Globe, Zap } from 'lucide-react';

const websiteDesigns = [
  {
    name: "E-Commerce Store",
    type: "Online Store",
    color: "from-blue-500 to-purple-600",
    accentColor: "bg-blue-500",
    layout: "grid",
    features: ["Shopping Cart", "Product Gallery", "Payment Integration"]
  },
  {
    name: "Restaurant Website",
    type: "Food & Dining",
    color: "from-orange-500 to-red-600",
    accentColor: "bg-orange-500",
    layout: "hero",
    features: ["Online Menu", "Reservations", "Location Map"]
  },
  {
    name: "Tech Startup",
    type: "SaaS Platform",
    color: "from-green-500 to-teal-600",
    accentColor: "bg-green-500",
    layout: "modern",
    features: ["Dashboard", "Analytics", "User Management"]
  },
  {
    name: "Portfolio Site",
    type: "Creative Agency",
    color: "from-pink-500 to-rose-600",
    accentColor: "bg-pink-500",
    layout: "portfolio",
    features: ["Gallery", "Contact Form", "Blog"]
  },
  {
    name: "Medical Practice",
    type: "Healthcare",
    color: "from-cyan-500 to-blue-600",
    accentColor: "bg-cyan-500",
    layout: "professional",
    features: ["Appointments", "Patient Portal", "Services"]
  }
];

export function WebsiteDesignDemo() {
  const [currentDesign, setCurrentDesign] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGenerating(true);
      
      setTimeout(() => {
        setCurrentDesign((prev) => (prev + 1) % websiteDesigns.length);
        setIsGenerating(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const design = websiteDesigns[currentDesign];

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">AI WEBSITE GENERATOR</span>
        </div>
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-white" />
          <Smartphone className="w-4 h-4 text-white/60" />
          <Tablet className="w-4 h-4 text-white/60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {isGenerating ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
              <div className="text-white text-sm">Generating AI Website...</div>
              <div className="text-white/60 text-xs mt-1">Powered by Artificial Intelligence</div>
            </div>
          </div>
        ) : (
          <div className="h-full space-y-4 animate-fade-in-up">
            {/* Website Preview */}
            <div className={`h-32 rounded-lg bg-gradient-to-br ${design.color} p-4 relative overflow-hidden`}>
              <div className="absolute top-2 left-2 right-2 h-6 bg-white/20 rounded flex items-center px-2">
                <Globe className="w-3 h-3 text-white mr-2" />
                <div className="h-2 bg-white/40 rounded flex-1 mr-2" />
                <div className="w-2 h-2 bg-white/60 rounded-full" />
              </div>
              
              {design.layout === 'grid' && (
                <div className="mt-10 grid grid-cols-3 gap-2">
                  <div className="h-8 bg-white/20 rounded" />
                  <div className="h-8 bg-white/20 rounded" />
                  <div className="h-8 bg-white/20 rounded" />
                </div>
              )}
              
              {design.layout === 'hero' && (
                <div className="mt-10 space-y-2">
                  <div className="h-4 bg-white/30 rounded w-3/4" />
                  <div className="h-2 bg-white/20 rounded w-1/2" />
                  <div className="h-6 bg-white/40 rounded w-1/3 mt-4" />
                </div>
              )}
              
              {design.layout === 'modern' && (
                <div className="mt-10 flex gap-2">
                  <div className="flex-1 h-12 bg-white/20 rounded" />
                  <div className="w-12 h-12 bg-white/30 rounded" />
                </div>
              )}
              
              {design.layout === 'portfolio' && (
                <div className="mt-10 grid grid-cols-2 gap-2">
                  <div className="h-10 bg-white/20 rounded" />
                  <div className="h-10 bg-white/20 rounded" />
                </div>
              )}
              
              {design.layout === 'professional' && (
                <div className="mt-10 space-y-2">
                  <div className="h-3 bg-white/30 rounded w-2/3" />
                  <div className="h-2 bg-white/20 rounded w-1/2" />
                  <div className="flex gap-2 mt-3">
                    <div className="h-4 bg-white/25 rounded flex-1" />
                    <div className="h-4 bg-white/25 rounded flex-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Design Info */}
            <div className="bg-black/40 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-medium text-sm">{design.name}</div>
                  <div className="text-white/60 text-xs">{design.type}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-yellow-400 text-xs">AI Generated</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {design.features.map((feature, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 ${design.accentColor} text-white rounded-full opacity-80`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-1">
              {websiteDesigns.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentDesign ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}