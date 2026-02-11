import { ArrowLeft, Check, Layers, Monitor, Database, Users, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceOdoo = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    { icon: Monitor, title: "Sales & CRM", desc: "Manage leads, opportunities, and customer relationships" },
    { icon: Database, title: "Inventory Management", desc: "Real-time stock tracking and warehouse operations" },
    { icon: Users, title: "HR & Payroll", desc: "Employee management, attendance, and payroll processing" },
    { icon: BarChart3, title: "Accounting", desc: "Complete financial management and reporting" },
    { icon: Settings, title: "Manufacturing", desc: "Production planning and quality control" },
    { icon: Layers, title: "Project Management", desc: "Task tracking and team collaboration" },
  ];

  const benefits = [
    "Unified platform for all business operations",
    "Reduce manual data entry by 80%",
    "Real-time insights and reporting",
    "Scalable as your business grows",
    "Mobile-friendly interface",
    "Saudi localization included",
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
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold">{isRTL ? 'من 1,990 ر.س' : 'From SAR 1,990'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.services.service1}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {isRTL 
                ? 'نظام أودو هو حل متكامل لإدارة موارد المؤسسات يجمع جميع عمليات عملك في منصة واحدة قوية. من المبيعات والمخزون إلى المحاسبة والموارد البشرية، نقوم بتخصيص أودو ليناسب احتياجات عملك الفريدة.'
                : 'Odoo ERP is a comprehensive enterprise resource planning solution that brings all your business operations into one powerful platform. From sales and inventory to accounting and HR, we customize Odoo to fit your unique business needs.'
              }
            </p>
            
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'الوحدات المتضمنة' : 'Modules Included'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'نقوم بتنفيذ الوحدات التي تحتاجها فقط، مع إمكانية التوسع في المستقبل'
              : 'We implement only the modules you need, with the flexibility to expand later'
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isRTL ? 'لماذا تختار أودو؟' : 'Why Choose Odoo?'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {isRTL 
                  ? 'أودو هو نظام ERP مفتوح المصدر يستخدمه أكثر من 12 مليون مستخدم حول العالم. نحن شركاء معتمدون ولدينا خبرة واسعة في تنفيذه للشركات السعودية.'
                  : 'Odoo is an open-source ERP used by over 12 million users worldwide. We are certified partners with extensive experience implementing it for Saudi businesses.'
                }
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">
                {isRTL ? 'عملية التنفيذ' : 'Implementation Process'}
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: isRTL ? "تحليل الأعمال" : "Business Analysis", time: isRTL ? "أسبوع 1-2" : "Week 1-2" },
                  { step: "2", title: isRTL ? "التخصيص والإعداد" : "Customization & Setup", time: isRTL ? "أسبوع 3-4" : "Week 3-4" },
                  { step: "3", title: isRTL ? "نقل البيانات" : "Data Migration", time: isRTL ? "أسبوع 5" : "Week 5" },
                  { step: "4", title: isRTL ? "التدريب والإطلاق" : "Training & Go-Live", time: isRTL ? "أسبوع 6" : "Week 6" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-primary-foreground/70 text-sm">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isRTL ? 'جاهز لتحويل عملك؟' : 'Ready to Transform Your Business?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'احصل على استشارة مجانية واكتشف كيف يمكن لنظام أودو أن يساعد في نمو عملك'
              : 'Get a free consultation and discover how Odoo can help grow your business'
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

export default ServiceOdoo;
