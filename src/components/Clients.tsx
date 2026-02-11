import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  "Level Arabia",
  "The Midest",
  "Builmix",
  "Silicon Oasis",
  "Jatco",
  "AlJehat Company",
  "Firefly",
  "Knife Limited",
  "Edtech One",
  "Butcher Boutique",
];

const Clients = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="clients" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.clients.title} <span className="text-gradient">{t.clients.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.clients.subtitle}
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <div
                key={client}
                className="glass rounded-xl p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-muted-foreground font-medium text-center group-hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="mt-16 text-center glass rounded-2xl p-8">
            <p className="text-lg text-muted-foreground">
              {t.clients.trustStatement}{" "}
              <span className="text-primary font-semibold">
                {lang === 'ar' ? 'سين سيجنالز' : 'Seen Signals'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
