import { Button } from "@/components/ui/button";
import { MapPin, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/church-hero.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-church-hero/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 shadow-gold">
              <img src={logo} alt="COGIC3 Logo" className="h-20 w-20 mx-auto" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-church-accent">COGIC3</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
              Prostrados aos Teus Pés
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-slide-up">
            Igreja de Deus em Cristo
          </p>

          {/* Welcome Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 animate-scale-in">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-church-accent mr-2" />
              <span className="text-church-accent font-semibold text-lg">Seja Bem-Vindo</span>
            </div>
            <p className="text-lg text-white/95 leading-relaxed">
              "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês."
            </p>
            <p className="text-sm text-church-accent mt-2 font-medium">Mateus 11:28</p>
          </div>

          {/* Service Times */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="h-6 w-6 text-church-accent mx-auto mb-2" />
              <h3 className="font-semibold text-church-accent">Segunda-feira</h3>
              <p className="text-sm">Culto de Oração</p>
              <p className="text-lg font-bold">19h30</p>
              <p className="text-xs text-white/75">Online</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="h-6 w-6 text-church-accent mx-auto mb-2" />
              <h3 className="font-semibold text-church-accent">Quinta-feira</h3>
              <p className="text-sm">Culto da Vitória</p>
              <p className="text-lg font-bold">19h30</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="h-6 w-6 text-church-accent mx-auto mb-2" />
              <h3 className="font-semibold text-church-accent">Domingo</h3>
              <p className="text-sm">Celebração da Família</p>
              <p className="text-lg font-bold">10h00</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 animate-scale-in">
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-church-accent mr-2" />
              <span className="text-lg">Benedetto Bonfigli, 385 - Casa Verde Alta</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-church-accent hover:bg-church-accent-light text-church-hero font-semibold px-8 py-3 text-lg shadow-gold"
            >
              Venha nos Visitar
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg backdrop-blur-sm"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;