import { MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { day: "Segunda", time: "19h30", name: "Culto de Oração (Online)" },
    { day: "Quinta", time: "19h30", name: "Culto da Vitória" },
    { day: "Domingo", time: "10h00", name: "Celebração da Família" }
  ];

  return (
    <footer className="bg-church-hero text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="COGIC3 Logo" className="h-12 w-12" />
                <div>
                  <h3 className="font-serif text-xl font-semibold">COGIC3</h3>
                  <p className="text-church-accent text-sm">Prostrados aos Teus Pés</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Igreja de Deus em Cristo - Um lugar onde vidas são transformadas 
                através do amor e poder de Jesus Cristo. Venha fazer parte da nossa família.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/cogic3_prostradosaosteuspes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-church-accent/20 p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-church-accent/20 p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-church-accent/20 p-2 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Service Times */}
            <div>
              <h4 className="font-semibold text-church-accent mb-4">Horários dos Cultos</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="h-4 w-4 text-church-accent" />
                      <span className="font-medium">{service.day} - {service.time}</span>
                    </div>
                    <p className="text-white/70 text-xs pl-6">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-church-accent mb-4">Localização</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-church-accent mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white/90">Rua Benedetto Bonfigli, 385</p>
                    <p className="text-white/70">Casa Verde Alta</p>
                    <p className="text-white/70">São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/70 text-sm">
                  © 2024 Igreja de Deus em Cristo - Prostrados aos Teus Pés
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Todos os direitos reservados
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/70">
                <a href="#home" className="hover:text-church-accent transition-colors">Início</a>
                <a href="#about" className="hover:text-church-accent transition-colors">Sobre</a>
                <a href="#services" className="hover:text-church-accent transition-colors">Cultos</a>
                <a href="#location" className="hover:text-church-accent transition-colors">Localização</a>
              </div>
            </div>
          </div>

          {/* Bible Verse */}
          <div className="mt-8 text-center">
            <p className="text-church-accent italic text-sm">
              "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês."
            </p>
            <p className="text-white/60 text-xs mt-1">Mateus 11:28</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;