import { ArrowLeft, Check, Globe, Smartphone, ShoppingCart, Search, Palette, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceWebsites = () => {
  const { isRTL } = useLanguage();

  const packages = [
    {
      name: isRTL ? "موقع أساسي" : "Basic Website",
      price: "2,500",
      features: [
        isRTL ? "5 صفحات" : "5 Pages",
        isRTL ? "تصميم متجاوب" : "Responsive Design",
        isRTL ? "نموذج تواصل" : "Contact Form",
        isRTL ? "تحسين محركات البحث الأساسي" : "Basic SEO",
      ]
    },
    {
      name: isRTL ? "موقع احترافي" : "Professional Website",
      price: "5,000",
      featured: true,
      features: [
        isRTL ? "10 صفحات" : "10 Pages",
        isRTL ? "تصميم مخصص" : "Custom Design",
        isRTL ? "مدونة متكاملة" : "Integrated Blog",
        isRTL ? "تحسين محركات البحث المتقدم" : "Advanced SEO",
        isRTL ? "سرعة محسنة" : "Optimized Speed",
      ]
    },
    {
      name: isRTL ? "متجر إلكتروني" : "E-commerce Store",
      price: "8,000",
      features: [
        isRTL ? "منتجات غير محدودة" : "Unlimited Products",
        isRTL ? "بوابات دفع" : "Payment Gateways",
        isRTL ? "إدارة المخزون" : "Inventory Management",
        isRTL ? "تكامل الشحن" : "Shipping Integration",
        isRTL ? "لوحة تحكم" : "Admin Dashboard",
      ]
    }
  ];

  const features = [
    { icon: Smartphone, title: isRTL ? "تصميم متجاوب" : "Responsive Design", desc: isRTL ? "يعمل على جميع الأجهزة" : "Works on all devices" },
    { icon: Search, title: isRTL ? "تحسين محركات البحث" : "SEO Optimized", desc: isRTL ? "ظهور أفضل في جوجل" : "Better Google visibility" },
    { icon: Palette, title: isRTL ? "تصميم مخصص" : "Custom Design", desc: isRTL ? "يعكس هوية علامتك" : "Reflects your brand" },
    { icon: Rocket, title: isRTL ? "أداء سريع" : "Fast Performance", desc: isRTL ? "تحميل فوري" : "Instant loading" },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {isRTL ? 'العودة للخدمات' : 'Back to Services'}
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'المواقع والتجارة الإلكترونية' : 'Websites & E-commerce'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {isRTL 
                ? 'نصمم ونطور مواقع إلكترونية حديثة ومتاجر إلكترونية تحول الزوار إلى عملاء. مواقع سريعة ومتجاوبة ومحسنة لمحركات البحث.'
                : 'We design and develop modern websites and online stores that convert visitors into customers. Fast, responsive sites optimized for search engines.'
              }
            </p>
            
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'احصل على عرض سعر' : 'Get a Quote'}
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'باقاتنا' : 'Our Packages'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'اختر الباقة المناسبة لاحتياجاتك'
              : 'Choose the package that fits your needs'
            }
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  pkg.featured 
                    ? 'bg-gradient-primary text-primary-foreground scale-105' 
                    : 'bg-card border border-border/50'
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                    {isRTL ? 'الأكثر شعبية' : 'Most Popular'}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className={pkg.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                    {isRTL ? 'ر.س' : 'SAR'}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${pkg.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.featured ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' : ''}`}
                  variant={pkg.featured ? 'default' : 'outline'}
                >
                  {isRTL ? 'ابدأ الآن' : 'Get Started'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {isRTL ? 'كيف نعمل؟' : 'How We Work?'}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: isRTL ? "استشارة" : "Consultation", desc: isRTL ? "نفهم احتياجاتك" : "We understand your needs" },
                { step: "2", title: isRTL ? "تصميم" : "Design", desc: isRTL ? "نصمم موقعك" : "We design your site" },
                { step: "3", title: isRTL ? "تطوير" : "Development", desc: isRTL ? "نبني موقعك" : "We build your site" },
                { step: "4", title: isRTL ? "إطلاق" : "Launch", desc: isRTL ? "نطلق موقعك" : "We launch your site" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'جاهز لإطلاق موقعك؟' : 'Ready to Launch Your Website?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا اليوم للحصول على عرض سعر مخصص لاحتياجاتك'
              : 'Contact us today for a custom quote tailored to your needs'
            }
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </Button>
            <Button size="xl" variant="outline">
              <Link to="/#services">{isRTL ? 'استكشف خدمات أخرى' : 'Explore Other Services'}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceWebsites;
