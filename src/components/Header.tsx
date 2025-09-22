import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Calendar, MapPin, MessageCircle } from "lucide-react";
import verboVersoLogo from "@/assets/verbo-verso-logo-original.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#home", icon: BookOpen },
    { name: "Sobre Nós", href: "#about", icon: Users },
    { name: "Livros", href: "#books", icon: BookOpen },
    { name: "Encontros", href: "#meetings", icon: Calendar },
    { name: "Local", href: "#location", icon: MapPin },
    { name: "Contato", href: "#contact", icon: MessageCircle },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-burgundy/10 shadow-elegant">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={verboVersoLogo} 
              alt="Clube do Livro Verbo & Verso" 
              className="h-12 w-12"
            />
            <div className="hidden md:block">
              <h1 className="font-serif-elegant text-xl font-bold text-burgundy">
                Verbo & Verso
              </h1>
              <p className="text-sm text-muted-foreground">
                COGIC3 Prostrados aos Teus Pés
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="bg-burgundy hover:bg-burgundy/90 text-white font-medium"
            >
              Participar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-burgundy"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-burgundy/10">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-foreground hover:text-gold transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <Button 
                size="sm" 
                className="bg-burgundy hover:bg-burgundy/90 text-white font-medium mt-4 w-fit"
              >
                Participar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;