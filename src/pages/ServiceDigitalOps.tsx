import { ArrowLeft, Check, Settings, Workflow, Zap, Cloud, Cog, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceDigitalOps = () => {
  const { isRTL } = useLanguage();

  const solutions = [
    { 
      icon: Workflow, 
      title: isRTL ? "أتمتة سير العمل" : "Workflow Automation", 
      desc: isRTL ? "أتمتة المهام المتكررة وتوفير الوقت" : "Automate repetitive tasks and save time",
      examples: isRTL ? ["الموافقات التلقائية", "إشعارات الموظفين", "تحديث البيانات"] : ["Auto approvals", "Staff notifications", "Data updates"]
    },
    { 
      icon: Cloud, 
      title: isRTL ? "الأنظمة السحابية" : "Cloud Systems", 
      desc: isRTL ? "انتقل للسحابة وادخل للبيانات من أي مكان" : "Move to cloud and access data from anywhere",
      examples: isRTL ? ["Google Workspace", "Microsoft 365", "أنظمة مخصصة"] : ["Google Workspace", "Microsoft 365", "Custom systems"]
    },
    { 
      icon: Cog, 
      title: isRTL ? "تكامل الأنظمة" : "System Integration", 
      desc: isRTL ? "ربط أنظمتك المختلفة معاً" : "Connect your different systems together",
      examples: isRTL ? ["CRM + ERP", "الموقع + المحاسبة", "APIs مخصصة"] : ["CRM + ERP", "Website + Accounting", "Custom APIs"]
    },
    { 
      icon: RefreshCw, 
      title: isRTL ? "التحول الرقمي" : "Digital Transformation", 
      desc: isRTL ? "تحويل العمليات الورقية لرقمية" : "Transform paper processes to digital",
      examples: isRTL ? ["نماذج إلكترونية", "توقيع رقمي", "أرشفة إلكترونية"] : ["E-forms", "Digital signature", "E-archiving"]
    },
  ];

  const benefits = [
    { stat: "80%", label: isRTL ? "توفير في الوقت" : "Time Saved" },
    { stat: "50%", label: isRTL ? "تقليل الأخطاء" : "Fewer Errors" },
    { stat: "3x", label: isRTL ? "زيادة الإنتاجية" : "Productivity Boost" },
    { stat: "24/7", label: isRTL ? "وصول للبيانات" : "Data Access" },
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
                <Settings className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isRTL ? 'العمليات الرقمية للمنشآت' : 'Digital Operations for SMEs'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {isRTL 
                ? 'نساعدك في تحويل عملياتك اليدوية إلى عمليات رقمية مؤتمتة. وفّر الوقت، قلل الأخطاء، وركّز على نمو عملك.'
                : 'We help you transform manual operations into automated digital processes. Save time, reduce errors, and focus on growing your business.'
              }
            </p>
            
            <Button size="xl" className="bg-gradient-primary">
              {isRTL ? 'احصل على تقييم مجاني' : 'Get Free Assessment'}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{benefit.stat}</p>
                <p className="text-muted-foreground">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {isRTL ? 'حلولنا' : 'Our Solutions'}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isRTL 
              ? 'حلول رقمية مخصصة لتحسين كفاءة عملياتك'
              : 'Custom digital solutions to improve your operational efficiency'
            }
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.examples.map((example, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
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
            <div className="space-y-8">
              {[
                { 
                  step: "1", 
                  title: isRTL ? "تحليل العمليات الحالية" : "Analyze Current Processes", 
                  desc: isRTL ? "نفهم كيف تعمل عملياتك الحالية ونحدد فرص التحسين" : "We understand your current processes and identify improvement opportunities" 
                },
                { 
                  step: "2", 
                  title: isRTL ? "تصميم الحل" : "Design Solution", 
                  desc: isRTL ? "نصمم حلاً رقمياً مخصصاً لاحتياجاتك" : "We design a custom digital solution for your needs" 
                },
                { 
                  step: "3", 
                  title: isRTL ? "التنفيذ والتدريب" : "Implementation & Training", 
                  desc: isRTL ? "ننفذ الحل وندرب فريقك على استخدامه" : "We implement the solution and train your team" 
                },
                { 
                  step: "4", 
                  title: isRTL ? "الدعم المستمر" : "Ongoing Support", 
                  desc: isRTL ? "نقدم دعماً مستمراً لضمان نجاح التحول" : "We provide ongoing support to ensure success" 
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
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
            {isRTL ? 'جاهز للتحول الرقمي؟' : 'Ready for Digital Transformation?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا اليوم للحصول على تقييم مجاني لعملياتك'
              : 'Contact us today for a free assessment of your operations'
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

export default ServiceDigitalOps;
