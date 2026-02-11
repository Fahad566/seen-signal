import { 
  ShoppingBag, 
  ShoppingCart, 
  Truck, 
  Building2, 
  Factory, 
  Hammer,
  UtensilsCrossed,
  Stethoscope,
  Palette,
  Tag
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { icon: ShoppingBag, name: t.industries.retail },
    { icon: ShoppingCart, name: t.industries.ecommerce },
    { icon: Building2, name: t.industries.trading },
    { icon: Truck, name: t.industries.distribution },
    { icon: Tag, name: t.industries.localBrands },
    { icon: Palette, name: t.industries.creativeStudios },
    { icon: Factory, name: t.industries.manufacturing },
    { icon: Hammer, name: t.industries.construction },
    { icon: UtensilsCrossed, name: t.industries.restaurants },
    { icon: Stethoscope, name: t.industries.medical },
  ];

  return (
    <section id="industries" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in">
              {t.industries.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              {t.industries.titleHighlight}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t.industries.subtitle}
            </p>
          </div>

          {/* Industries - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="group bg-card border border-border/50 rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground whitespace-nowrap">{industry.name}</span>
              </div>
            ))}
          </div>

          {/* Founders Note */}
          <div className="text-center bg-card border border-border/50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">{t.industries.founders}</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.industries.foundersSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
