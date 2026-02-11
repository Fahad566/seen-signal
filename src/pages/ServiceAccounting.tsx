import { ArrowLeft, Check, Calculator, FileSpreadsheet, TrendingUp, PiggyBank, Receipt, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceAccounting = () => {
  const { isRTL } = useLanguage();

  const services = [
    { icon: FileSpreadsheet, title: isRTL ? "إمساك الدفاتر" : "Bookkeeping", desc: isRTL ? "تسجيل جميع المعاملات المالية بدقة" : "Accurate recording of all financial transactions" },
    { icon: Receipt, title: isRTL ? "إعداد الفواتير" : "Invoice Management", desc: isRTL ? "إصدار ومتابعة الفواتير" : "Issue and track invoices" },
    { icon: TrendingUp, title: isRTL ? "التقارير المالية" : "Financial Reports", desc: isRTL ? "تقارير شهرية وربع سنوية" : "Monthly and quarterly reports" },
    { icon: PiggyBank, title: isRTL ? "إدارة التدفق النقدي" : "Cash Flow Management", desc: isRTL ? "مراقبة وتحسين التدفق النقدي" : "Monitor and improve cash flow" },
    { icon: Building, title: isRTL ? "الإقرارات الضريبية" : "Tax Returns", desc: isRTL ? "إعداد وتقديم الإقرارات" : "Prepare and submit tax returns" },
    { icon: Calculator, title: isRTL ? "الرواتب" : "Payroll", desc: isRTL ? "معالجة الرواتب والمستحقات" : "Process salaries and benefits" },
  ];

  const plans = [
    {
      name: isRTL ? "أساسي" : "Basic",
      price: "1,500",
      period: isRTL ? "/شهر" : "/month",
      features: [
        isRTL ? "حتى 50 معاملة شهرياً" : "Up to 50 transactions/month",
        isRTL ? "إمساك الدفاتر الأساسي" : "Basic bookkeeping",
        isRTL ? "تقرير شهري" : "Monthly report",
        isRTL ? "دعم عبر البريد" : "Email support",
      ]
    },
    {
      name: isRTL ? "نمو" : "Growth",
      price: "3,000",
      period: isRTL ? "/شهر" : "/month",
      featured: true,
      features: [
        isRTL ? "حتى 150 معاملة شهرياً" : "Up to 150 transactions/month",
        isRTL ? "محاسبة شاملة" : "Full accounting",
        isRTL ? "تقارير أسبوعية" : "Weekly reports",
        isRTL ? "إدارة الرواتب" : "Payroll management",
        isRTL ? "دعم أولوية" : "Priority support",
      ]
    },
    {
      name: isRTL ? "مؤسسي" : "Enterprise",
      price: isRTL ? "مخصص" : "Custom",
      period: "",
      features: [
        isRTL ? "معاملات غير محدودة" : "Unlimited transactions",
        isRTL ? "CFO افتراضي" : "Virtual CFO",
        isRTL ? "تقارير مخصصة" : "Custom reports",
        isRTL ? "استشارات مالية" : "Financial consulting",
        isRTL ? "دعم 24/7" : "24/7 support",
      ]
    }
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
                <Calculator className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'المحاسبة وإمساك الدفاتر' : 'Accounting & Bookkeeping'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {isRTL 
                ? 'خدمات محاسبية احترافية للشركات الصغيرة والمتوسطة. نتولى جميع أعمالك المحاسبية حتى تركز على نمو عملك.'
                : 'Professional accounting services for SMEs. We handle all your accounting work so you can focus on growing your business.'
              }
            </p>
            
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'خدماتنا المحاسبية' : 'Our Accounting Services'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'حلول محاسبية شاملة لجميع احتياجاتك المالية'
              : 'Comprehensive accounting solutions for all your financial needs'
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

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'خطط الأسعار' : 'Pricing Plans'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'خطط مرنة تناسب حجم عملك'
              : 'Flexible plans that fit your business size'
            }
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured 
                    ? 'bg-gradient-primary text-primary-foreground scale-105' 
                    : 'bg-card border border-border/50'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                    {isRTL ? 'الأكثر شعبية' : 'Most Popular'}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className={plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                    {plan.period || (isRTL ? 'ر.س' : 'SAR')}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.featured ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' : ''}`}
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  {isRTL ? 'ابدأ الآن' : 'Get Started'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'دع المحاسبة علينا' : 'Leave the Accounting to Us'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا اليوم لمناقشة احتياجاتك المحاسبية'
              : 'Contact us today to discuss your accounting needs'
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

export default ServiceAccounting;
