import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Calendar, MapPin, MessageCircle, ChevronUp } from "lucide-react";
import verboVersoLogo from "@/assets/verbo-verso-logo-original.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navigation = [
    { name: "Início", href: "#home", icon: BookOpen },
    { name: "Sobre Nós", href: "#about", icon: Users },
    { name: "Programa", href: "#programa", icon: BookOpen },
    { name: "Livros", href: "#books", icon: BookOpen },
    { name: "Encontros", href: "#meetings", icon: Calendar },
    { name: "Cronograma", href: "#cronograma", icon: Calendar },
    { name: "Local", href: "#location", icon: MapPin },
  ];

  // Smooth scroll functionality
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-burgundy/10 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => handleNavClick('#home')}>
              <img 
                src={verboVersoLogo} 
                alt="Clube do Livro Verbo & Verso" 
                className="h-16 w-16 md:h-20 md:w-20 transition-transform hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="font-playfair text-xl md:text-2xl font-bold text-burgundy">
                  Verbo & Verso
                </h1>
                <p className="text-sm md:text-base text-muted-foreground font-inter">
                  Clube do Livro
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-foreground hover:text-gold transition-all duration-300 font-medium font-inter relative ${
                    activeSection === item.href.slice(1) 
                      ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gold' 
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                size="sm" 
                className="bg-burgundy hover:bg-burgundy/90 text-white font-medium font-inter hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://chat.whatsapp.com/CZtfBZlRd5i0nmH0NrLBkE', '_blank')}
              >
                Participar
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-burgundy hover:bg-burgundy/5 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-burgundy/10 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center space-x-3 text-foreground hover:text-gold transition-colors duration-300 py-2 font-inter ${
                        activeSection === item.href.slice(1) ? 'text-gold' : ''
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
                <Button 
                  size="sm" 
                  className="bg-burgundy hover:bg-burgundy/90 text-white font-medium mt-4 w-fit font-inter"
                  onClick={() => window.open('https://chat.whatsapp.com/CZtfBZlRd5i0nmH0NrLBkE', '_blank')}
                >
                  Participar
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-burgundy hover:bg-burgundy/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Header;