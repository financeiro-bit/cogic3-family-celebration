import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Car, Accessibility, Sparkles, Phone, Mail } from "lucide-react";

const Location = () => {
  const features = [
    {
      icon: Car,
      title: "Estacionamento",
      description: "Vagas disponíveis para visitantes",
      color: "text-church-accent"
    },
    {
      icon: Accessibility,
      title: "Acessibilidade",
      description: "Acesso facilitado para todos",
      color: "text-church-electric"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cultos começam sempre no horário",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="location" className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-church-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-church-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-church-electric mr-2" />
              <span className="text-church-electric font-semibold text-lg tracking-wide">VENHA NOS VISITAR</span>
              <Sparkles className="h-6 w-6 text-church-electric ml-2" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-church-hero mb-8 tracking-tight">
              Como Chegar
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Estamos localizados na Casa Verde Alta, em São Paulo. 
              Venha nos visitar e seja parte da nossa família.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Address Information */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-medium rounded-3xl overflow-hidden group hover:shadow-strong transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="bg-gradient-electric p-4 rounded-2xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-church-hero mb-4">
                        Nosso Endereço
                      </h3>
                      <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                        <p className="font-semibold text-foreground">Rua Benedetto Bonfigli, 385</p>
                        <p>Casa Verde Alta</p>
                        <p>São Paulo - SP</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-8">
                    <h4 className="font-bold text-church-hero mb-6 text-xl">Referências:</h4>
                    <div className="space-y-4">
                      {[
                        "Próximo ao Terminal Casa Verde",
                        "Região da Casa Verde Alta",
                        "Acesso por transporte público"
                      ].map((ref, index) => (
                        <div key={index} className="flex items-center space-x-3 group/ref">
                          <div className="w-3 h-3 bg-gradient-accent rounded-full group-hover/ref:scale-125 transition-transform duration-300"></div>
                          <span className="text-muted-foreground group-hover/ref:text-foreground transition-colors">{ref}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button 
                      className="w-full bg-gradient-electric hover:shadow-glow text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 border-0"
                      onClick={() => window.open('https://maps.google.com/?q=Benedetto+Bonfigli+385+Casa+Verde+Alta+São+Paulo', '_blank')}
                    >
                      <Navigation className="h-5 w-5 mr-3" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-500 rounded-2xl overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-r from-white to-gray-50 p-3 rounded-xl shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                        <div>
                          <h5 className="font-bold text-church-hero text-lg">{feature.title}</h5>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map and Contact */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-medium rounded-3xl overflow-hidden group">
                <CardContent className="p-0">
                  <div className="bg-gradient-hero h-80 flex items-center justify-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-16 h-16 bg-church-accent/20 rounded-full"></div>
                    
                    <div className="text-center text-white relative z-10">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6 mx-auto w-fit">
                        <MapPin className="h-16 w-16 text-church-accent mx-auto drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Localização da Igreja</h3>
                      <p className="text-church-accent font-semibold">Benedetto Bonfigli, 385</p>
                      <p className="text-white/80">Casa Verde Alta - São Paulo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-medium rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h4 className="font-serif text-2xl font-bold text-church-hero mb-6">
                    Informações de Contato
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-church-accent mt-1" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Horários dos Cultos:</h5>
                        <div className="text-muted-foreground space-y-1 text-sm">
                          <p>Segunda: 19h30 (Online)</p>
                          <p>Quinta: 19h30</p>
                          <p>Domingo: 10h</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-muted-foreground leading-relaxed">
                        Para mais informações sobre nossos cultos e atividades, 
                        entre em contato conosco através das redes sociais ou venha nos visitar pessoalmente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;