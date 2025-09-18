import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import worshipImage from "@/assets/worship-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${worshipImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-reino-brown/85 via-reino-brown/70 to-reino-brown/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-32">
        <div className="max-w-4xl">
          {/* Small Intro Text */}
          <div className="mb-8">
            <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase">
              Descubra mais maneiras de se conectar
            </p>
          </div>

          {/* Main Headline - Reino Style */}
          <div className="mb-12">
            <div className="mb-4">
              <p className="text-reino-gold font-medium tracking-[0.3em] text-lg md:text-xl uppercase">
                IGREJA DE DEUS EM CRISTO
              </p>
            </div>
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-6">
              <span className="font-bold text-reino-gold">PROSTRADOS</span>{" "}
              AOS TEUS PÉS
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-0.5 bg-reino-gold"></div>
              <p className="text-reino-gold font-medium tracking-[0.2em] text-lg uppercase">
                Oração • Palavra • Adoração
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16 max-w-2xl">
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light">
              Uma igreja na tradição da <span className="font-semibold text-reino-gold">COGIC</span>, 
              onde a diversidade se une em adoração. Fundamentados na oração, firmes na Palavra 
              e apaixonados pela presença de Deus.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              className="bg-reino-gold hover:bg-reino-warm text-reino-brown font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-warm border-0 group"
            >
              Venha nos Visitar
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg rounded-full backdrop-blur-sm font-medium transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Assista Online
            </Button>
          </div>

          {/* Service Times - Minimal Display */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
            {[
              { day: "Segunda", time: "19h30", type: "Oração" },
              { day: "Quinta", time: "19h30", type: "Vitória" },
              { day: "Domingo", time: "10h00", type: "Família" }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-reino-gold font-semibold text-lg mb-2">{service.day}</h3>
                  <p className="text-white text-2xl font-light mb-1">{service.time}</p>
                  <p className="text-white/70 text-sm">{service.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-reino-gold/10 rounded-full blur-3xl animate-pulse"></div>
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