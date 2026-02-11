import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/seen-signals-logo.png";

const Footer = () => {
  const { t, lang, isRTL } = useLanguage();

  const footerLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#industries", label: t.nav.industries },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center justify-between gap-10 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Logo & Description */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <img 
                src={logo} 
                alt="Seen Signals" 
                className="h-12 w-auto"
              />
              <p className="text-sm text-muted-foreground text-center lg:text-left max-w-xs">
                {lang === 'ar' 
                  ? 'نساعد المنشآت السعودية على العمل بذكاء' 
                  : 'Helping Saudi SMEs run smarter'}
              </p>
            </div>

            {/* Quick Links */}
            <div className={`flex flex-wrap items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-muted-foreground">
                {lang === 'ar' ? 'المنطقة الشرقية، السعودية' : 'Eastern Province, Saudi Arabia'}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} {lang === 'ar' ? 'سين سيجنالز' : 'Seen Signals'}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
