import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { SparklesCore } from "./sparkles";

interface CTAProps {
  badge?: {
    text: string;
  };
  title: string;
  description: string;
  action?: {
    text: string;
    href: string;
    variant: "default" | "secondary" | "outline";
  };
  withGlow?: boolean;
}

export function CTASection({
  badge,
  title,
  description,
  withGlow = false,
}: CTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.us2.make.com/bpbvqweu4flp6q9vc1r71jedidgv316u', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'website_cta'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full py-12 relative">
      <SparklesCore
        id="tsparticles-cta"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0"
        particleColor="#ef4444"
        speed={0.5}
      />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {badge && (
            <div className="inline-block">
              <Badge
                className="bg-red-600 text-white hover:bg-red-700 transition-colors"
                variant="secondary"
              >
                {badge.text}
              </Badge>
            </div>
          )}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-kulim">
              {title}
            </h2>
            <p className="mx-auto max-w-[900px] text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[100px]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                } ${withGlow ? 'shadow-glow' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm">Thank you! We'll contact you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}