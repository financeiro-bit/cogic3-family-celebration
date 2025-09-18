import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Car, Accessibility } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase mb-6">
              VENHA NOS VISITAR
            </p>
            <h2 className="text-reino-brown text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Como <span className="font-bold">chegar</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left - Address */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex items-start space-x-6 mb-10">
                    <div className="bg-reino-brown p-4 rounded-2xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-reino-brown mb-4">
                        Nosso Endereço
                      </h3>
                      <div className="text-lg leading-relaxed space-y-2">
                        <p className="font-semibold text-foreground">Rua Benedetto Bonfigli, 385</p>
                        <p className="text-muted-foreground">Casa Verde Alta</p>
                        <p className="text-muted-foreground">São Paulo - SP</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-8 mb-8">
                    <h4 className="font-bold text-reino-brown mb-6 text-xl">Referências:</h4>
                    <div className="space-y-4">
                      {[
                        "Próximo ao Terminal Casa Verde",
                        "Região da Casa Verde Alta",
                        "Acesso por transporte público"
                      ].map((ref, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-reino-gold rounded-full"></div>
                          <span className="text-muted-foreground">{ref}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-reino-gold hover:bg-reino-warm text-reino-brown font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 border-0"
                    onClick={() => window.open('https://maps.google.com/?q=Benedetto+Bonfigli+385+Casa+Verde+Alta+São+Paulo', '_blank')}
                  >
                    <Navigation className="h-5 w-5 mr-3" />
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid gap-4">
                {[
                  { icon: Car, title: "Estacionamento", desc: "Vagas disponíveis" },
                  { icon: Accessibility, title: "Acessibilidade", desc: "Acesso facilitado" },
                  { icon: Clock, title: "Pontualidade", desc: "Horários rigorosos" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-subtle">
                    <div className="flex items-center space-x-4">
                      <div className="bg-reino-beige p-3 rounded-xl">
                        <feature.icon className="h-6 w-6 text-reino-brown" />
                      </div>
                      <div>
                        <h5 className="font-bold text-reino-brown">{feature.title}</h5>
                        <p className="text-muted-foreground text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Map and Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-hero h-80 flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 mb-6 mx-auto w-fit">
                        <MapPin className="h-16 w-16 text-reino-gold mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Localização da Igreja</h3>
                      <p className="text-reino-gold font-semibold">Benedetto Bonfigli, 385</p>
                      <p className="text-white/80">Casa Verde Alta - São Paulo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft rounded-3xl">
                <CardContent className="p-8">
                  <h4 className="font-serif text-2xl font-bold text-reino-brown mb-6">
                    Horários dos Cultos
                  </h4>
                  <div className="space-y-6">
                    {[
                      { day: "Segunda", time: "19h30", type: "Culto de Oração (Online)" },
                      { day: "Quinta", time: "19h30", type: "Culto da Vitória" },
                      { day: "Domingo", time: "10h00", type: "Celebração da Família" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border/20 last:border-b-0">
                        <div>
                          <p className="font-semibold text-reino-brown">{schedule.day}</p>
                          <p className="text-muted-foreground text-sm">{schedule.type}</p>
                        </div>
                        <p className="text-xl font-bold text-reino-gold">{schedule.time}</p>
                      </div>
                    ))}
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