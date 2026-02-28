import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const PageContent = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{lang === 'ar' ? 'سين سيجنالز | حلول رقمية للمنشآت السعودية' : 'Seen Signals | Digital Solutions for Saudi SMEs'}</title>
        <meta name="description" content={lang === 'ar' 
          ? 'سين سيجنالز تساعد المنشآت السعودية على العمل بذكاء من خلال أنظمة أودو، تكامل الزكاة والضريبة، المواقع الإلكترونية، المحاسبة، والعمليات الرقمية.'
          : 'Seen Signals helps Saudi SMEs run smarter through Odoo ERP, ZATCA integration, websites, accounting, and digital operations. Technology that works quietly, performs loudly.'
        } />
        <meta name="keywords" content={lang === 'ar'
          ? 'أودو ERP، تكامل الزكاة والضريبة، المملكة العربية السعودية، المنشآت الصغيرة والمتوسطة، التحول الرقمي، الفوترة الإلكترونية، المحاسبة'
          : 'Odoo ERP, ZATCA integration, Saudi Arabia, SME, digital transformation, e-invoicing, accounting, websites'
        } />
        {/* Open Graph tags for social previews */}
        <meta property="og:title" content={lang === 'ar' ? 'سين سيجنالز | حلول رقمية للمنشآت السعودية' : 'Seen Signals | Digital Solutions for Saudi SMEs'} />
        <meta property="og:description" content={lang === 'ar'
          ? 'سين سيجنالز تساعد المنشآت السعودية على العمل بذكاء من خلال أنظمة أودو، تكامل الزكاة والضريبة، المواقع الإلكترونية، المحاسبة، والعمليات الرقمية.'
          : 'Seen Signals helps Saudi SMEs run smarter through Odoo ERP, ZATCA integration, websites, accounting, and digital operations. Technology that works quietly, performs loudly.'
        } />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SeenSignalsSA" />
        <meta name="twitter:image" content="/path/to/og-image.png" />
      </Helmet>
      
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Industries />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

const Index = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <PageContent />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Index;
