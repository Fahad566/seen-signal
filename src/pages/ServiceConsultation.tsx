import { ArrowLeft, Check, LineChart, Target, Lightbulb, TrendingUp, Users, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceConsultation = () => {
  const { isRTL } = useLanguage();

  const services = [
    { 
      icon: FileSearch, 
      title: isRTL ? "تحليل العمليات" : "Process Analysis", 
      desc: isRTL ? "تحليل شامل لعملياتك الحالية وتحديد نقاط الضعف" : "Comprehensive analysis of your current processes and identifying weaknesses" 
    },
    { 
      icon: Target, 
      title: isRTL ? "تخطيط استراتيجي" : "Strategic Planning", 
      desc: isRTL ? "وضع خطط استراتيجية لتحقيق أهدافك" : "Create strategic plans to achieve your goals" 
    },
    { 
      icon: Lightbulb, 
      title: isRTL ? "حلول مبتكرة" : "Innovative Solutions", 
      desc: isRTL ? "اقتراح حلول مبتكرة لتحسين الأداء" : "Propose innovative solutions to improve performance" 
    },
    { 
      icon: TrendingUp, 
      title: isRTL ? "تحسين الأداء" : "Performance Optimization", 
      desc: isRTL ? "استراتيجيات لزيادة الكفاءة والربحية" : "Strategies to increase efficiency and profitability" 
    },
    { 
      icon: Users, 
      title: isRTL ? "إدارة التغيير" : "Change Management", 
      desc: isRTL ? "دعم فريقك في التكيف مع التغييرات" : "Support your team in adapting to changes" 
    },
    { 
      icon: LineChart, 
      title: isRTL ? "قياس النتائج" : "Measure Results", 
      desc: isRTL ? "تتبع وقياس نتائج التحسينات" : "Track and measure improvement results" 
    },
  ];

  const approach = [
    {
      phase: isRTL ? "المرحلة 1" : "Phase 1",
      title: isRTL ? "الاكتشاف" : "Discovery",
      duration: isRTL ? "1-2 أسابيع" : "1-2 weeks",
      activities: isRTL 
        ? ["مقابلات مع أصحاب القرار", "تحليل البيانات الحالية", "فهم التحديات"]
        : ["Stakeholder interviews", "Current data analysis", "Understanding challenges"]
    },
    {
      phase: isRTL ? "المرحلة 2" : "Phase 2",
      title: isRTL ? "التحليل" : "Analysis",
      duration: isRTL ? "2-3 أسابيع" : "2-3 weeks",
      activities: isRTL 
        ? ["تحليل العمليات", "تحديد الفجوات", "المقارنة المعيارية"]
        : ["Process mapping", "Gap identification", "Benchmarking"]
    },
    {
      phase: isRTL ? "المرحلة 3" : "Phase 3",
      title: isRTL ? "التوصيات" : "Recommendations",
      duration: isRTL ? "1 أسبوع" : "1 week",
      activities: isRTL 
        ? ["تقرير مفصل", "خطة تنفيذ", "تحديد الأولويات"]
        : ["Detailed report", "Implementation plan", "Prioritization"]
    },
    {
      phase: isRTL ? "المرحلة 4" : "Phase 4",
      title: isRTL ? "الدعم" : "Support",
      duration: isRTL ? "مستمر" : "Ongoing",
      activities: isRTL 
        ? ["متابعة التنفيذ", "تقييم النتائج", "تعديل الخطط"]
        : ["Implementation follow-up", "Results evaluation", "Plan adjustments"]
    },
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
                <LineChart className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'تحليل العمليات والاستشارات' : 'Business Process Analysis & Consultation'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {isRTL 
                ? 'نحلل عملياتك التجارية بعمق ونقدم توصيات استراتيجية لتحسين الأداء وزيادة الكفاءة. خبرة عملية في تحويل الأعمال.'
                : 'We deeply analyze your business processes and provide strategic recommendations to improve performance and increase efficiency. Practical experience in business transformation.'
              }
            </p>
            
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'احجز استشارة' : 'Book a Consultation'}
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'ماذا نقدم؟' : 'What We Offer?'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'خدمات استشارية شاملة لتحسين أداء عملك'
              : 'Comprehensive consulting services to improve your business performance'
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'منهجيتنا' : 'Our Approach'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'نتبع منهجية مثبتة لضمان نتائج ملموسة'
              : 'We follow a proven methodology to ensure tangible results'
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {approach.map((item, index) => (
              <div key={index} className="bg-card rounded-3xl p-6 border border-border/50">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {item.phase}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary text-sm mb-4">{item.duration}</p>
                <ul className="space-y-2">
                  {item.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                {isRTL ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  isRTL ? "خبرة عملية في السوق السعودي" : "Practical experience in the Saudi market",
                  isRTL ? "فهم عميق لتحديات المنشآت الصغيرة" : "Deep understanding of SME challenges",
                  isRTL ? "توصيات قابلة للتطبيق فوراً" : "Immediately actionable recommendations",
                  isRTL ? "دعم مستمر حتى تحقيق النتائج" : "Ongoing support until results are achieved",
                  isRTL ? "تقارير واضحة وشفافة" : "Clear and transparent reports",
                  isRTL ? "أسعار تنافسية ومرنة" : "Competitive and flexible pricing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'جاهز لتحسين أعمالك؟' : 'Ready to Improve Your Business?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'احجز استشارة مجانية اليوم واكتشف كيف يمكننا مساعدتك'
              : 'Book a free consultation today and discover how we can help you'
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

export default ServiceConsultation;
