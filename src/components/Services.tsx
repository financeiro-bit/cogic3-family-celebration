import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Wifi, Users, Hand, Star, Sparkles, Heart, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      day: "Segunda-feira",
      name: "Culto de Oração",
      time: "19h30",
      icon: Hand,
      description: "Momento especial de intercessão e busca pela presença de Deus",
      isOnline: true,
      features: ["Transmissão Online", "Oração Intercessória", "Ministração"],
      gradient: "from-church-electric to-church-electric-light",
      bgPattern: "bg-church-electric/5"
    },
    {
      day: "Quinta-feira",
      name: "Culto da Vitória",
      time: "19h30",
      icon: Star,
      description: "Celebração com louvor, palavra e comunhão fraternal",
      isOnline: false,
      features: ["Louvor e Adoração", "Pregação da Palavra", "Comunhão"],
      gradient: "from-church-accent to-church-accent-light",
      bgPattern: "bg-church-accent/5"
    },
    {
      day: "Domingo",
      name: "Celebração da Família",
      time: "10h00",
      icon: Users,
      description: "Culto especial para toda a família com atividades para todas as idades",
      isOnline: false,
      features: ["Programa Infantil", "Louvor Especial", "Palavra de Edificação"],
      gradient: "from-purple-400 to-purple-600",
      bgPattern: "bg-purple-400/5"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-church-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-church-electric/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-church-accent mr-2" />
              <span className="text-church-accent font-semibold text-lg tracking-wide">MOMENTOS DE ADORAÇÃO</span>
              <Sparkles className="h-6 w-6 text-church-accent ml-2" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-church-hero mb-8 tracking-tight">
              Nossos Cultos
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Venha adorar conosco! Temos momentos especiais durante a semana para 
              crescimento espiritual, oração e comunhão.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-strong transition-all duration-700 rounded-3xl overflow-hidden hover:scale-105">
                <CardContent className="p-0 relative">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 ${service.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-br ${service.gradient} text-white p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <service.icon className="h-10 w-10 text-white drop-shadow-lg" />
                        {service.isOnline && (
                          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 border border-white/30">
                            <Wifi className="h-4 w-4" />
                            <span className="text-sm font-semibold">Online</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="font-serif text-3xl font-bold mb-4">{service.name}</h3>
                      
                      <div className="flex items-center space-x-6 text-white/90">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5" />
                          <span className="font-medium">{service.day}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5" />
                          <span className="font-bold text-xl">{service.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-10">
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-church-hero text-lg mb-4">O que esperar:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                          <div className="w-2 h-2 bg-gradient-electric rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                          <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Location */}
                    <div className="mt-8 pt-6 border-t border-border/50">
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-church-accent" />
                        <span className="font-medium">
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-10"></div>
            <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-12 text-center shadow-medium">
              <h3 className="font-serif text-4xl font-bold text-church-hero mb-6">
                Primeira vez conosco?
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Ficaremos felizes em recebê-lo! Não se preocupe com códigos de vestimenta ou 
                protocolos - venha como está e seja parte da nossa família.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-lg">
                {[
                  { icon: Heart, text: "Ambiente acolhedor" },
                  { icon: Car, text: "Estacionamento disponível" },
                  { icon: Users, text: "Recepção especial" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 group">
                    <div className="w-3 h-3 bg-gradient-electric rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="font-medium group-hover:text-church-hero transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;