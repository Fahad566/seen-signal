import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+966 55 83 833 79",
      href: "tel:+966558383379"
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "hello@seensignals.sa",
      href: "mailto:hello@seensignals.sa"
    },
    {
      icon: Globe,
      label: t.contact.website,
      value: "seensignals.sa",
      href: "https://seensignals.sa"
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in">
              {t.contact.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              {t.contact.titleHighlight}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group bg-card border border-border/50 rounded-2xl p-6 flex items-center gap-5 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                    {item.value}
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            ))}
          </div>

          {/* Main CTA Card */}
          <div className="relative bg-primary rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-xl shadow-primary/20 animate-slide-up hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500" style={{ animationDelay: '0.4s' }}>
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-x-1/4 translate-y-1/4" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">{t.contact.ctaTitle}</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                {t.contact.ctaText}
              </h3>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="rounded-full px-10 bg-primary-foreground text-primary border-0 hover:bg-primary-foreground/90 mt-4"
              >
                {t.contact.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
