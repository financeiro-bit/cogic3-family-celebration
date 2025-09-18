import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Wifi, Users, Hand, Star } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header - Reino Style */}
          <div className="text-center mb-20">
            <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase mb-6">
              MOMENTOS DE ADORAÇÃO
            </p>
            <h2 className="text-reino-brown text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Como se <span className="font-bold">conectar</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Descubra as diferentes formas de fazer parte da nossa comunidade jovem e vibrante.
            </p>
          </div>

          {/* Services Grid - Clean Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                day: "Segunda-feira",
                name: "Culto de Oração",
                time: "19h30",
                icon: Hand,
                description: "Momento especial de intercessão, oração e presença de Deus",
                isOnline: true,
                gradient: "from-reino-gold to-reino-warm"
              },
              {
                day: "Quinta-feira",
                name: "Culto da Vitória",
                time: "19h30",
                icon: Star,
                description: "Celebração com louvor coral, palavra poderosa e comunhão",
                isOnline: false,
                gradient: "from-reino-brown to-reino-brown-light"
              },
              {
                day: "Domingo",
                name: "Celebração da Família",
                time: "10h00",
                icon: Users,
                description: "Culto especial para toda família com coral e atividades para jovens",
                isOnline: false,
                gradient: "from-reino-warm to-reino-gold"
              }
            ].map((service, index) => (
              <Card key={index} className="group bg-white border-0 shadow-subtle hover:shadow-medium transition-all duration-700 rounded-3xl overflow-hidden hover:scale-105">
                <CardContent className="p-0">
                  
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${service.gradient} text-white p-8 relative`}>
                    <div className="absolute top-4 right-4">
                      {service.isOnline && (
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                          <Wifi className="h-4 w-4" />
                          <span className="text-xs font-medium">Online</span>
                        </div>
                      )}
                    </div>
                    
                    <service.icon className="h-12 w-12 text-white/90 mb-6" />
                    
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

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-reino-gold" />
                      <span className="font-medium">
                        {service.isOnline ? "Transmissão Online" : "Benedetto Bonfigli, 385"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section - Reino Style CTA */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Text */}
            <div>
              <h3 className="text-reino-brown text-4xl md:text-5xl font-light leading-tight mb-8">
                Primeira vez <span className="font-bold">conosco?</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Ficaremos felizes em recebê-lo! Não se preocupe com códigos de vestimenta ou 
                protocolos - venha como está e seja parte da nossa família.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-reino-gold"></div>
                <p className="text-reino-brown font-medium">
                  ambiente acolhedor e receptivo
                </p>
              </div>
            </div>

            {/* Right - Features */}
            <div className="bg-reino-beige/30 rounded-3xl p-8">
              <div className="space-y-6">
                {[
                  "Ambiente acolhedor e familiar",
                  "Estacionamento disponível",
                  "Recepção especial para visitantes",
                  "Ministério infantil"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-reino-gold rounded-full"></div>
                    <span className="text-reino-brown font-medium">{feature}</span>
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