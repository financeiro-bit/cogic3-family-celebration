import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Wifi, Users, Hand } from "lucide-react";

const Services = () => {
  const services = [
    {
      day: "Segunda-feira",
      name: "Culto de Oração",
      time: "19h30",
      icon: Hand,
      description: "Momento especial de intercessão e busca pela presença de Deus",
      isOnline: true,
      features: ["Transmissão Online", "Oração Intercessória", "Ministração"]
    },
    {
      day: "Quinta-feira", 
      name: "Culto da Vitória",
      time: "19h30",
      icon: Users,
      description: "Celebração com louvor, palavra e comunhão fraternal",
      isOnline: false,
      features: ["Louvor e Adoração", "Pregação da Palavra", "Comunhão"]
    },
    {
      day: "Domingo",
      name: "Celebração da Família",
      time: "10h00",
      icon: Calendar,
      description: "Culto especial para toda a família com atividades para todas as idades",
      isOnline: false,
      features: ["Programa Infantil", "Louvor Especial", "Palavra de Edificação"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-church-hero mb-6">
              Nossos Cultos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Venha adorar conosco! Temos momentos especiais durante a semana para 
              crescimento espiritual, oração e comunhão.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-subtle border-0 shadow-church hover:shadow-gold transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with day and time */}
                  <div className="bg-gradient-hero text-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-8 w-8 text-church-accent" />
                      {service.isOnline && (
                        <div className="bg-church-accent/20 px-3 py-1 rounded-full flex items-center space-x-1">
                          <Wifi className="h-4 w-4" />
                          <span className="text-xs font-medium">Online</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-2">{service.name}</h3>
                    <div className="flex items-center space-x-4 text-church-accent">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{service.day}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-bold text-lg">{service.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-church-hero mb-3">O que esperar:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Location */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {service.isOnline ? "Transmissão Online" : "Benedetto Bonfigli, 385"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-church-accent/5 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-church-hero mb-4">
              Primeira vez conosco?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ficaremos felizes em recebê-lo! Não se preocupe com códigos de vestimenta ou 
              protocolos - venha como está e seja parte da nossa família.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                <span>Ambiente acolhedor</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                <span>Estacionamento disponível</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-church-accent rounded-full"></div>
                <span>Recepção especial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;