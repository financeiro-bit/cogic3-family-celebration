import { Instagram, Facebook, Youtube, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/cogic3_prostradosaosteuspes", 
      label: "Instagram"
    },
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook"
    },
    { 
      icon: Youtube, 
      href: "#", 
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-reino-brown text-white relative overflow-hidden">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            
            {/* Left - Logo and Description */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <img src={logo} alt="COGIC3" className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold">COGIC3</h3>
                  <p className="text-reino-gold text-lg">Prostrados aos Teus Pés</p>
                </div>
              </div>
              
              <p className="text-white/80 text-xl leading-relaxed max-w-lg mb-6">
                Igreja de Deus em Cristo - Um lugar onde vidas são transformadas 
                através do amor e poder de Jesus Cristo.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-white/90 text-sm mb-2">
                  <span className="text-reino-gold font-semibold">Filiada à COGIC</span>
                </p>
                <p className="text-white/70 text-sm">
                  Church of God in Christ - Memphis, Tennessee, EUA
                </p>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-reino-gold/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Address */}
              <div>
                <h4 className="font-bold text-reino-gold mb-6 text-xl">Localização</h4>
                <div className="space-y-3 text-white/80">
                  <p className="font-medium">Rua Benedetto Bonfigli, 385</p>
                  <p>Casa Verde Alta</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h4 className="font-bold text-reino-gold mb-6 text-xl">Horários</h4>
                <div className="space-y-3 text-white/80">
                  <div>
                    <p className="font-medium">Segunda - 19h30</p>
                    <p className="text-sm text-white/60">Culto de Oração (Online)</p>
                  </div>
                  <div>
                    <p className="font-medium">Quinta - 19h30</p>
                    <p className="text-sm text-white/60">Culto da Vitória</p>
                  </div>
                  <div>
                    <p className="font-medium">Domingo - 10h00</p>
                    <p className="text-sm text-white/60">Celebração da Família</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-white/70">
                  © 2024 Igreja de Deus em Cristo - Prostrados aos Teus Pés
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Todos os direitos reservados
                </p>
              </div>
              
              {/* Navigation */}
              <div className="flex space-x-8 text-white/70">
                {["Início", "Sobre", "Cultos", "Localização"].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-reino-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bible Verse - Reino Style */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 max-w-4xl mx-auto">
              <Heart className="h-8 w-8 text-reino-gold mx-auto mb-6" />
              <blockquote className="text-reino-gold text-2xl md:text-3xl font-light italic leading-relaxed mb-4">
                "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês."
              </blockquote>
              <cite className="text-white/60 font-medium tracking-wide">— Mateus 11:28</cite>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;