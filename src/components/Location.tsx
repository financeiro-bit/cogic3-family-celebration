import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Car, Accessibility } from "lucide-react";

const Location = () => {
  const features = [
    {
      icon: Car,
      title: "Estacionamento",
      description: "Vagas disponíveis para visitantes"
    },
    {
      icon: Accessibility,
      title: "Acessibilidade",
      description: "Acesso facilitado para todos"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cultos começam sempre no horário"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-church-hero mb-6">
              Como Chegar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos localizados na Casa Verde Alta, em São Paulo. 
              Venha nos visitar e seja parte da nossa família.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Address Information */}
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-church">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-church-accent/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-church-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-church-hero mb-2">
                        Nosso Endereço
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Rua Benedetto Bonfigli, 385<br />
                        Casa Verde Alta<br />
                        São Paulo - SP
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-church-hero mb-4">Referências:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                        <span>Próximo ao Terminal Casa Verde</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                        <span>Região da Casa Verde Alta</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                        <span>Acesso por transporte público</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Button 
                      className="w-full bg-church-accent hover:bg-church-accent-light text-church-hero font-semibold"
                      onClick={() => window.open('https://maps.google.com/?q=Benedetto+Bonfigli+385+Casa+Verde+Alta+São+Paulo', '_blank')}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-church-accent/10 p-2 rounded-full">
                          <feature.icon className="h-5 w-5 text-church-accent" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-church-hero">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <Card className="bg-white border-0 shadow-church overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-hero h-64 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 text-church-accent mx-auto mb-4" />
                      <p className="text-lg font-semibold mb-2">Localização da Igreja</p>
                      <p className="text-sm text-white/75">Benedetto Bonfigli, 385</p>
                      <p className="text-sm text-white/75">Casa Verde Alta - São Paulo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-white border-0 shadow-church">
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-semibold text-church-hero mb-4">
                    Informações de Contato
                  </h4>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-church-accent" />
                      <span>Segunda: 19h30 (Online) | Quinta: 19h30 | Domingo: 10h</span>
                    </p>
                    <p className="text-sm leading-relaxed">
                      Para mais informações sobre nossos cultos e atividades, 
                      entre em contato conosco através das redes sociais ou venha nos visitar pessoalmente.
                    </p>
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