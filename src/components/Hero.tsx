import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Calendar, Clock, Trophy, Star } from "lucide-react";
import cogicMenDiscussion from "@/assets/cogic-men-discussion.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Urgency Banner */}
      <div className="absolute top-0 left-0 right-0 bg-burgundy text-white py-3 z-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base font-bold animate-pulse">
            🔥 ÚLTIMOS DIAS - Inscrições abertas para a nova turma de 4 meses!
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cogicMenDiscussion})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-32 pt-20">
        <div className="max-w-4xl">
          {/* Intro Text */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-gold/90 text-burgundy text-sm font-bold rounded-full mb-4 animate-scale-in">
              <Trophy className="h-4 w-4 mr-2" />
              CLUBE EXCLUSIVO PARA HOMENS CRISTÃOS
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-12">
            <div className="mb-6">
              <h1 className="font-playfair text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                <span className="block text-gold animate-fade-in">Estude 1 Livro</span>
                <span className="block text-white animate-fade-in">em 4 Meses</span>
                <span className="block text-gold animate-fade-in">Com Profundidade</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-0.5 bg-gold"></div>
              <p className="text-gold font-medium tracking-[0.2em] text-lg uppercase font-inter">
                Leitura Quinzenal | 7 Encontros em 4 Meses
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16 max-w-3xl">
            <p className="text-white/95 text-xl md:text-2xl leading-relaxed font-light font-inter">
              Junte-se a homens cristãos para estudar <span className="font-semibold text-gold">1 livro em 4 meses</span> 
              com profundidade e discussões quinzenais. Uma jornada de <strong className="text-gold">crescimento espiritual 
              e intelectual exclusiva para membros das igrejas COGIC no Brasil.</strong>
            </p>
          </div>

          {/* Main CTA */}
          <div className="mb-20">
            <div className="flex flex-col gap-4 mb-8">
              <Button
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-white font-bold px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-0 group font-inter"
                onClick={() => window.open('https://chat.whatsapp.com/CZtfBZlRd5i0nmH0NrLBkE', '_blank')}
              >
                QUERO PARTICIPAR AGORA
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { 
                icon: BookOpen, 
                title: "Leitura Quinzenal", 
                subtitle: "14 dias para ler",
                description: "Capítulos programados" 
              },
              { 
                icon: Users, 
                title: "7 Encontros Online", 
                subtitle: "De 15 em 15 dias",
                description: "Google Meet às 20h" 
              },
              { 
                icon: Calendar, 
                title: "Próximo Encontro", 
                subtitle: "01 de Outubro",
                description: "20h - Reunião de Abertura" 
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