import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-border/30 z-50 shadow-subtle">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Reino Style */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 bg-reino-brown rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-500">
                <img 
                  src={logo} 
                  alt="COGIC3" 
                  className="h-8 w-8 brightness-0 invert transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-foreground text-sm font-medium tracking-wide transition-all duration-300 relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-reino-gold group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-muted/50 p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <Menu 
                className={`h-5 w-5 absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`h-5 w-5 absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} 
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 pb-8' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border/30 pt-8">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground/70 hover:text-foreground font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'fadeIn 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;