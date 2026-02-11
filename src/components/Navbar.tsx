import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/seen-signals-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#industries", label: t.nav.industries },
    { href: "#clients", label: t.nav.clients },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Seen Signals" 
            className={`h-10 w-auto transition-all duration-500 rounded-lg ${
              isScrolled 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </div>

        <div className={`hidden lg:flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-secondary transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-rotate-12 transition-all duration-300" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-secondary transition-all duration-300 text-muted-foreground hover:text-foreground group"
          >
            <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-medium">{lang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          <Button variant="hero" size="sm" className="rounded-full px-6">
            {t.nav.getStarted}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            className="text-foreground p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 mt-2 shadow-2xl animate-scale-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 text-base font-medium py-3 px-4 rounded-xl hover:bg-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4 rounded-full">
              {t.nav.getStarted}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
