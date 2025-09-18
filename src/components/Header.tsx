import { useState } from "react";
import { Menu, X, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Cultos", href: "#services" },
    { label: "Localização", href: "#location" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border/50 z-50 shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="COGIC3 Logo" 
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-church-electric/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-church-hero tracking-tight">COGIC3</span>
              <span className="text-xs text-muted-foreground -mt-1 font-medium tracking-wide">Prostrados aos Teus Pés</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-church-hero transition-all duration-300 font-medium text-sm group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-electric transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground group hover:text-church-electric transition-colors">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Casa Verde Alta</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground group hover:text-church-accent transition-colors">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Dom 10h | Qui 19h30</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative p-2 hover:bg-church-electric/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu 
                className={`h-5 w-5 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} 
              />
              <X 
                className={`h-5 w-5 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} 
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-border/50 bg-gradient-glass backdrop-blur-sm">
            <nav className="py-6 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-6 text-foreground/80 hover:text-church-hero hover:bg-church-electric/5 rounded-lg mx-2 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-6 space-y-3 border-t border-border/20 mt-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-church-electric" />
                  <span>Casa Verde Alta</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-church-accent" />
                  <span>Dom 10h | Qui 19h30</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;