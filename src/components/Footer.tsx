import { MapPin, Clock, Instagram, Facebook, Youtube, Heart, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { day: "Segunda", time: "19h30", name: "Culto de Oração (Online)" },
    { day: "Quinta", time: "19h30", name: "Culto da Vitória" },
    { day: "Domingo", time: "10h00", name: "Celebração da Família" }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/cogic3_prostradosaosteuspes", 
      label: "Instagram",
      gradient: "from-pink-500 to-purple-600"
    },
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook",
      gradient: "from-blue-600 to-blue-700"
    },
    { 
      icon: Youtube, 
      href: "#", 
      label: "YouTube",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-church-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-church-electric/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Logo and Description */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-8 group">
                  <div className="relative">
                    <img src={logo} alt="COGIC3 Logo" className="h-16 w-16 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-church-electric/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold">COGIC3</h3>
                    <p className="text-church-accent text-lg font-medium">Prostrados aos Teus Pés</p>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed mb-8 text-lg">
                  Igreja de Deus em Cristo - Um lugar onde vidas são transformadas 
                  através do amor e poder de Jesus Cristo. Venha fazer parte da nossa família.
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className={`bg-gradient-to-r ${social.gradient} p-3 rounded-xl shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Service Times */}
              <div>
                <h4 className="font-bold text-church-accent mb-6 text-xl">Horários dos Cultos</h4>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="group hover:bg-white/5 rounded-lg p-3 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className="h-5 w-5 text-church-accent" />
                        <span className="font-semibold">{service.day} - {service.time}</span>
                      </div>
                      <p className="text-white/70 text-sm pl-8 group-hover:text-white/90 transition-colors">{service.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="font-bold text-church-accent mb-6 text-xl">Localização</h4>
                <div className="space-y-4">
                  <div className="group hover:bg-white/5 rounded-lg p-3 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-church-accent mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-white/90 font-medium">Rua Benedetto Bonfigli, 385</p>
                        <p className="text-white/70">Casa Verde Alta</p>
                        <p className="text-white/70">São Paulo - SP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-white/70 text-sm">
                    © 2024 Igreja de Deus em Cristo - Prostrados aos Teus Pés
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Todos os direitos reservados
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-white/70">
                  {["Início", "Sobre", "Cultos", "Localização"].map((item, index) => (
                    <a 
                      key={index}
                      href={`#${item.toLowerCase()}`} 
                      className="hover:text-church-accent transition-colors duration-300 relative group"
                    >
                      {item}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-church-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bible Verse */}
            <div className="mt-12 text-center relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
                <Heart className="h-8 w-8 text-church-accent mx-auto mb-4" />
                <blockquote className="text-church-accent italic text-lg md:text-xl font-light">
                  "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês."
                </blockquote>
                <cite className="text-white/60 text-sm mt-3 block font-medium">— Mateus 11:28</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;