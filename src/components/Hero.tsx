import { Button } from "@/components/ui/button";
import { MapPin, Clock, Heart, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/church-hero.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-church-hero/85 via-church-hero/70 to-church-hero/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-church-electric/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-church-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-church-electric/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-full p-8 shadow-glow border border-white/20">
                <img src={logo} alt="COGIC3 Logo" className="h-24 w-24 mx-auto drop-shadow-xl" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8 animate-slide-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
              <span className="block bg-gradient-to-r from-church-accent via-church-accent-light to-church-accent bg-clip-text text-transparent">
                COGIC3
              </span>
            </h1>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/95 mb-2">
                Prostrados aos Teus Pés
              </h2>
              <p className="text-lg md:text-xl text-church-electric font-medium tracking-wide">
                Igreja de Deus em Cristo
              </p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mb-12 animate-scale-in">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-strong max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-church-accent mr-3" />
                <Sparkles className="h-5 w-5 text-church-electric mr-2" />
                <span className="text-church-accent font-bold text-xl">Seja Bem-Vindo</span>
                <Sparkles className="h-5 w-5 text-church-electric ml-2" />
              </div>
              <blockquote className="text-xl md:text-2xl text-white/95 leading-relaxed font-light italic mb-4">
                "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês."
              </blockquote>
              <cite className="text-church-accent-light font-semibold text-sm tracking-wide">— Mateus 11:28</cite>
            </div>
          </div>

          {/* Service Times */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="group" style={{ animationDelay: '0ms' }}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 shadow-soft hover:shadow-medium">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="h-6 w-6 text-church-electric" />
                  <div className="bg-church-electric/20 px-3 py-1 rounded-full border border-church-electric/30">
                    <span className="text-xs font-semibold text-church-electric">Online</span>
                  </div>
                </div>
                <h3 className="font-bold text-church-electric text-lg mb-2">Culto de Oração</h3>
                <p className="text-white/80 text-sm mb-3">Segunda-feira</p>
                <p className="text-2xl font-bold text-white">19h30</p>
              </div>
            </div>
            
            <div className="group" style={{ animationDelay: '200ms' }}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 shadow-soft hover:shadow-medium">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="h-6 w-6 text-church-accent" />
                </div>
                <h3 className="font-bold text-church-accent text-lg mb-2">Culto da Vitória</h3>
                <p className="text-white/80 text-sm mb-3">Quinta-feira</p>
                <p className="text-2xl font-bold text-white">19h30</p>
              </div>
            </div>
            
            <div className="group" style={{ animationDelay: '400ms' }}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 shadow-soft hover:shadow-medium">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="h-6 w-6 text-church-accent-light" />
                </div>
                <h3 className="font-bold text-church-accent-light text-lg mb-2">Celebração da Família</h3>
                <p className="text-white/80 text-sm mb-3">Domingo</p>
                <p className="text-2xl font-bold text-white">10h00</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-12 animate-scale-in">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-soft max-w-md mx-auto">
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 text-church-accent mr-3" />
                <div className="text-center">
                  <p className="text-white font-medium">Benedetto Bonfigli, 385</p>
                  <p className="text-white/70 text-sm">Casa Verde Alta</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="group bg-gradient-accent hover:shadow-gold text-church-hero font-bold px-10 py-4 text-lg rounded-xl border-0 transition-all duration-300 hover:scale-105"
            >
              Venha nos Visitar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg rounded-xl backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              Saiba Mais
              <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;