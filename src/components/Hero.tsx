import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Calendar } from "lucide-react";
import bookClubHero from "@/assets/book-club-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bookClubHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-32">
        <div className="max-w-4xl">
          {/* Intro Text */}
          <div className="mb-8">
            <p className="text-gold font-medium tracking-[0.2em] text-sm uppercase">
              Ministério Masculino Cristão
            </p>
          </div>

          {/* Main Headline */}
          <div className="mb-12">
            <div className="mb-6">
              <h1 className="font-serif-elegant text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-gold">Verbo</span> & <span className="text-gold">Verso</span>
              </h1>
              <h2 className="font-serif-elegant text-white text-2xl md:text-3xl font-normal leading-relaxed">
                Clube do Livro
              </h2>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-0.5 bg-gold"></div>
              <p className="text-gold font-medium tracking-[0.2em] text-lg uppercase">
                COGIC3 Prostrados aos Teus Pés
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16 max-w-3xl">
            <p className="text-white/95 text-xl md:text-2xl leading-relaxed font-light">
              Onde a <span className="font-semibold text-gold">Palavra de Deus</span> encontra 
              a sabedoria dos livros. Um ministério masculino dedicado ao crescimento espiritual 
              e intelectual através da leitura, discussão e irmandade cristã.
            </p>
          </div>

          {/* Main CTA */}
          <div className="mb-20">
            <p className="text-white/80 text-lg mb-6 font-medium">
              <span className="text-gold">Verbo</span> = Palavra de Deus | <span className="text-gold">Verso</span> = Literatura & Poesia
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-burgundy font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-gold border-0 group"
              >
                Quero Participar
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg rounded-full backdrop-blur-sm font-medium transition-all duration-300 hover:scale-105 group"
              >
                <BookOpen className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { 
                icon: BookOpen, 
                title: "Leitura Mensal", 
                subtitle: "Um livro por mês",
                description: "Seleção democrática" 
              },
              { 
                icon: Users, 
                title: "Encontros Presenciais", 
                subtitle: "Últimos sábados",
                description: "Discussões profundas" 
              },
              { 
                icon: Calendar, 
                title: "Próximo Encontro", 
                subtitle: "30 de Novembro",
                description: "16h na igreja" 
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-105 shadow-elegant">
                    <Icon className="h-8 w-8 text-gold mx-auto mb-4" />
                    <h3 className="text-gold font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-white text-xl font-light mb-1">{item.subtitle}</p>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;