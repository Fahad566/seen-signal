import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/seen-signals-logo.png";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[15%] ${isRTL ? 'left-[10%]' : 'right-[10%]'} w-24 h-24 border-2 border-primary/20 rounded-2xl rotate-12 animate-float`} />
        <div className={`absolute top-[60%] ${isRTL ? 'right-[8%]' : 'left-[8%]'} w-16 h-16 bg-primary/10 rounded-xl rotate-45 animate-float`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{t.hero.badge}</span>
            </div>
          </div>

          {/* Logo Display */}
          <div className="flex justify-center mb-10 animate-slide-up">
            <img 
              src={logo} 
              alt="Seen Signals" 
              className="h-28 md:h-36 w-auto rounded-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block mb-2">{t.hero.title1} <span className="text-primary">{t.hero.title2}</span>,</span>
            <span className="block">{t.hero.title3} <span className="relative inline-block">
              <span className="text-primary">{t.hero.title4}</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span></span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up ${isRTL ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="rounded-full px-8 group">
              {t.hero.cta1}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Button>
            <Button variant="outline" size="xl" className="rounded-full px-8 group">
              <Play className="w-4 h-4 mr-2" />
              {t.hero.cta2}
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="max-w-3xl mx-auto bg-card/50 rounded-3xl border border-border/50">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 px-6">
                <div className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110">{t.hero.stat1}</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stat1Label}</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-border" />
                <div className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110">{t.hero.stat2}</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stat2Label}</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-border" />
                <div className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110">{t.hero.stat3}</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stat3Label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
