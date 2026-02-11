import { Target, Eye, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in">
              {t.about.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold animate-slide-up">
              {t.about.titleHighlight}
            </h2>
          </div>

          {/* About Content - Bento Style */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Description - Large Card */}
            <div className="lg:col-span-2 group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-full bg-card rounded-3xl p-10 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                <p className="relative text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  {t.about.description}
                </p>
                <div className="relative mt-8 flex items-center gap-2 text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>{t.about.learnMore || 'Learn more'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground flex flex-col justify-center items-center text-center shadow-lg shadow-primary/20 animate-slide-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl font-bold mb-2">2026</div>
              <div className="text-primary-foreground/80 font-medium">{t.about.established || 'Established'}</div>
            </div>

            {/* Mission Card */}
            <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative h-full bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.about.missionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="lg:col-span-2 group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative h-full bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t.about.visionTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t.about.visionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
