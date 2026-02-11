import { ArrowLeft, Check, FileCheck, Shield, Clock, Zap, FileText, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceZatca = () => {
  const { isRTL } = useLanguage();

  const phases = [
    {
      title: isRTL ? "المرحلة الأولى" : "Phase 1",
      subtitle: isRTL ? "مرحلة الإنشاء" : "Generation Phase",
      status: isRTL ? "مكتملة" : "Completed",
      items: [
        isRTL ? "إصدار الفواتير الإلكترونية" : "Electronic invoice generation",
        isRTL ? "رموز QR" : "QR codes",
        isRTL ? "التنسيق المطلوب" : "Required format",
      ]
    },
    {
      title: isRTL ? "المرحلة الثانية" : "Phase 2",
      subtitle: isRTL ? "مرحلة التكامل" : "Integration Phase",
      status: isRTL ? "إلزامي الآن" : "Mandatory Now",
      items: [
        isRTL ? "الربط المباشر مع هيئة الزكاة" : "Direct ZATCA integration",
        isRTL ? "التوقيع الرقمي" : "Digital signatures",
        isRTL ? "التحقق الفوري" : "Real-time validation",
      ]
    }
  ];

  const features = [
    { icon: Shield, title: isRTL ? "100% متوافق" : "100% Compliant", desc: isRTL ? "ضمان الامتثال الكامل" : "Guaranteed full compliance" },
    { icon: Clock, title: isRTL ? "تنفيذ سريع" : "Fast Implementation", desc: isRTL ? "جاهز خلال أيام" : "Ready within days" },
    { icon: Zap, title: isRTL ? "تكامل سلس" : "Seamless Integration", desc: isRTL ? "يعمل مع نظامك الحالي" : "Works with your existing system" },
    { icon: FileText, title: isRTL ? "جميع أنواع الفواتير" : "All Invoice Types", desc: isRTL ? "ضريبية ومبسطة وإشعارات" : "Tax, simplified, and notes" },
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
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold">{isRTL ? 'من 1,290 ر.س' : 'From SAR 1,290'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'تكامل المرحلة الثانية من هيئة الزكاة' : 'ZATCA Phase 2 Integration'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {isRTL 
                ? 'نساعدك في الامتثال الكامل لمتطلبات الفوترة الإلكترونية من هيئة الزكاة والضريبة والجمارك. نقوم بربط نظامك مباشرة مع منصة فاتورة لضمان التحقق الفوري من جميع فواتيرك.'
                : 'We help you achieve full compliance with ZATCA e-invoicing requirements. We connect your system directly to the Fatoora platform for real-time validation of all your invoices.'
              }
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-destructive/10 rounded-xl mb-8">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              <p className="text-sm">
                {isRTL 
                  ? 'المرحلة الثانية إلزامية الآن! تجنب الغرامات واجعل أعمالك متوافقة اليوم.'
                  : 'Phase 2 is mandatory now! Avoid penalties and make your business compliant today.'
                }
              </p>
            </div>
            
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'احصل على تقييم مجاني' : 'Get Free Assessment'}
            </Button>
          </div>
        </div>
      </section>

      {/* Phases Comparison */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {isRTL ? 'مراحل الفوترة الإلكترونية' : 'E-Invoicing Phases'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <div key={index} className={`rounded-3xl p-8 ${index === 1 ? 'bg-gradient-primary text-primary-foreground' : 'bg-card border border-border/50'}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${index === 1 ? 'bg-primary-foreground/20' : 'bg-primary/10 text-primary'}`}>
                  {phase.status}
                </div>
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <p className={`mb-6 ${index === 1 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{phase.subtitle}</p>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${index === 1 ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'خبرة واسعة في تكامل الأنظمة مع هيئة الزكاة والضريبة'
              : 'Extensive experience in system integration with ZATCA'
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
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

      {/* Supported Systems */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isRTL ? 'أنظمة نعمل معها' : 'Systems We Work With'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isRTL 
                ? 'نقوم بربط هيئة الزكاة مع مختلف الأنظمة المحاسبية'
                : 'We integrate ZATCA with various accounting systems'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Odoo', 'SAP', 'QuickBooks', 'Zoho', 'Microsoft Dynamics', 'Custom Systems'].map((system) => (
                <span key={system} className="px-6 py-3 bg-card rounded-full border border-border/50">
                  {system}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'اجعل أعمالك متوافقة اليوم' : 'Make Your Business Compliant Today'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا للحصول على تقييم مجاني لنظامك ومعرفة ما تحتاجه للامتثال'
              : 'Contact us for a free assessment of your system and learn what you need for compliance'
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

export default ServiceZatca;
