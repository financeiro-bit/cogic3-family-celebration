import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content - Reino Style Layout */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            
            {/* Left Side - Large Text */}
            <div className="space-y-12">
              <div>
                <h2 className="text-reino-brown text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                  <span className="font-bold">Vivendo</span> o ordinário de forma{" "}
                  <span className="font-bold text-reino-gold">extraordinária</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  Nossa essência não está em doutrinas ou rituais, mas em uma cultura de excelência, 
                  que nos leva a manifestar a vida de Cristo em todos os aspectos da nossa existência.
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-0.5 bg-reino-gold"></div>
                  <p className="text-reino-brown font-medium tracking-wide">
                    com liberdade, relevância e profundidade na palavra
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-soft border border-white/50">
                <h3 className="font-serif text-3xl font-bold text-reino-brown mb-6">
                  Nossa História
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Fundada com o propósito de ser um lugar onde as pessoas podem se prostrar 
                    diante da presença de Deus, nossa igreja é um espaço de adoração genuína, 
                    crescimento espiritual e transformação de vidas.
                  </p>
                  <p>
                    Seguindo os ensinamentos bíblicos e a tradição da Igreja de Deus em Cristo, 
                    buscamos ser uma comunidade que reflete o amor, a graça e o poder de Jesus Cristo.
                  </p>
                </div>
              </div>
              
              <div className="bg-reino-beige/50 rounded-3xl p-8 border border-reino-beige">
                <blockquote className="text-reino-brown font-medium italic text-xl leading-relaxed">
                  "Prostrados aos Seus pés, encontramos nossa força, nossa direção e nossa esperança."
                </blockquote>
              </div>
            </div>
          </div>

          {/* COGIC Affiliation Section */}
          <div className="mb-32">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-soft border border-white/50">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-0.5 bg-reino-gold"></div>
                    <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase">
                      NOSSA FILIAÇÃO
                    </p>
                  </div>
                  <h3 className="text-reino-brown text-4xl md:text-5xl font-light leading-tight mb-6">
                    Parte da <span className="font-bold">COGIC</span>
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Somos orgulhosamente filiados à Church of God in Christ (COGIC), 
                    uma das maiores denominações pentecostais do mundo, fundada em 1907 
                    e sediada em Memphis, Tennessee - EUA.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-reino-gold rounded-full"></div>
                      <span className="text-muted-foreground">Fundada em 1907 nos Estados Unidos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-reino-gold rounded-full"></div>
                      <span className="text-muted-foreground">Sede mundial em Memphis, Tennessee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-reino-gold rounded-full"></div>
                      <span className="text-muted-foreground">Tradição pentecostal histórica</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-reino-brown/5 rounded-2xl p-8 mb-6">
                    <div className="w-24 h-24 bg-reino-brown rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">COGIC</span>
                    </div>
                    <h4 className="font-bold text-reino-brown text-xl mb-2">Church of God in Christ</h4>
                    <p className="text-muted-foreground">Memphis, Tennessee - EUA</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-2 border-reino-brown text-reino-brown hover:bg-reino-brown hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://www.cogic.org/', '_blank')}
                  >
                    Visite o Site Oficial
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid - Clean Design */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase mb-4">
                NOSSOS VALORES
              </p>
              <h3 className="text-reino-brown text-4xl md:text-5xl font-light">
                O que nos <span className="font-bold">move</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Amor",
                  description: "Demonstramos o amor de Cristo através de ações concretas.",
                },
                {
                  icon: Users,
                  title: "Comunidade",
                  description: "Uma família unida em Cristo, onde todos encontram seu lugar.",
                },
                {
                  icon: Globe,
                  title: "Missão",
                  description: "Levamos o evangelho até os confins da terra.",
                },
                {
                  icon: BookOpen,
                  title: "Palavra",
                  description: "Fundamentados nas Sagradas Escrituras.",
                }
              ].map((value, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-subtle hover:shadow-soft transition-all duration-500 border border-white/50 group-hover:scale-105">
                    <div className="bg-reino-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-reino-gold/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-reino-gold" />
                    </div>
                    <h4 className="font-bold text-reino-brown mb-4 text-xl">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action - Reino Style */}
          <div className="text-center bg-reino-brown rounded-3xl p-16 text-white">
            <h3 className="text-4xl md:text-5xl font-light mb-6">
              Adorar é a <span className="font-bold text-reino-gold">nossa essência!</span>
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Venha fazer parte de uma comunidade que vive a presença de Deus de forma autêntica e transformadora.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-0.5 bg-reino-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;