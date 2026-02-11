import { 
  Layers, 
  FileCheck, 
  Globe, 
  Calculator, 
  Settings, 
  LineChart,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Layers,
      title: t.services.service1,
      description: t.services.service1Desc,
      price: `${t.services.fromPrice} 1,990`,
      featured: true,
      link: "/services/odoo"
    },
    {
      icon: FileCheck,
      title: t.services.service2,
      description: t.services.service2Desc,
      price: `${t.services.fromPrice} 1,290`,
      featured: false,
      link: "/services/zatca"
    },
    {
      icon: Globe,
      title: t.services.service3,
      description: t.services.service3Desc,
      price: t.services.customQuote,
      featured: false,
      link: "/services/websites"
    },
    {
      icon: Calculator,
      title: t.services.service4,
      description: t.services.service4Desc,
      price: t.services.customQuote,
      featured: false,
      link: "/services/accounting"
    },
    {
      icon: Settings,
      title: t.services.service5,
      description: t.services.service5Desc,
      price: t.services.customQuote,
      featured: false,
      link: "/services/digital-operations"
    },
    {
      icon: LineChart,
      title: t.services.service6,
      description: t.services.service6Desc,
      price: t.services.customQuote,
      featured: false,
      link: "/services/consultation"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in">
              {t.services.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              {t.services.titleHighlight}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={service.title}
                className={`group relative animate-slide-up ${service.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden
                  ${service.featured 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                    : 'bg-card border border-border/50 hover:border-primary/30 hover:shadow-primary/10'
                  }`}
                >
                  {!service.featured && (
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                      ${service.featured 
                        ? 'bg-primary-foreground/20' 
                        : 'bg-secondary group-hover:bg-primary/10'
                      }`}
                    >
                      <service.icon className={`w-7 h-7 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className={`mb-6 leading-relaxed ${service.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-lg ${service.featured ? 'text-primary-foreground' : 'text-primary'}`}>
                        {service.price}
                      </span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 ${service.featured ? 'text-primary-foreground' : 'text-primary'} ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
