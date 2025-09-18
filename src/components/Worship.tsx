import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Mic, Users, Play, Headphones, Heart } from "lucide-react";

const Worship = () => {
  const musicMinistries = [
    {
      icon: Music,
      title: "Coral Principal",
      description: "Nosso coral principal que lidera a adoração nos cultos dominicais",
      highlight: "40+ vozes",
      gradient: "from-reino-gold to-reino-warm"
    },
    {
      icon: Mic,
      title: "Ministério de Louvor",
      description: "Equipe de louvor contemporâneo para cultos semanais",
      highlight: "Louvor moderno",
      gradient: "from-reino-brown to-reino-brown-light"
    },
    {
      icon: Users,
      title: "Coral Jovem",
      description: "Grupo musical para jovens de 15 a 30 anos",
      highlight: "Nova geração",
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  const songs = [
    "Nome sobre todo nome",
    "Ele é o leão", 
    "Sobe aqui",
    "Nossa canção",
    "Seu nome é Jesus",
    "Graça",
    "Mesmo sentimento"
  ];

  return (
    <section id="worship" className="py-32 bg-reino-brown text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-reino-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Music className="h-8 w-8 text-reino-gold" />
              <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase">
                NOSSA PAIXÃO
              </p>
              <Music className="h-8 w-8 text-reino-gold" />
            </div>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Adoração é a nossa <span className="font-bold text-reino-gold">essência!</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Na tradição da COGIC, a adoração coral é o coração pulsante da nossa igreja. 
              Através da música poderosa, experimentamos a presença de Deus que transforma vidas.
            </p>
          </div>

          {/* Music Ministries Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {musicMinistries.map((ministry, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 rounded-3xl overflow-hidden group hover:scale-105">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${ministry.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <ministry.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white text-xl">{ministry.title}</h3>
                    <span className="bg-reino-gold/20 text-reino-gold px-3 py-1 rounded-full text-xs font-semibold">
                      {ministry.highlight}
                    </span>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed mb-6">{ministry.description}</p>
                  
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Songs Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
                Nossos <span className="font-bold text-reino-gold">louvores</span>
              </h3>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Conheça algumas das canções que mais tocam nossos corações e elevam nossa adoração.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {songs.map((song, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-reino-gold/20 rounded-full flex items-center justify-center group-hover:bg-reino-gold/30 transition-colors">
                      <Headphones className="h-5 w-5 text-reino-gold" />
                    </div>
                    <span className="text-white font-medium group-hover:text-reino-gold transition-colors">{song}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <div className="w-32 h-32 bg-gradient-to-r from-reino-gold to-reino-warm rounded-full flex items-center justify-center mx-auto mb-8 shadow-warm">
                  <Music className="h-16 w-16 text-white" />
                </div>
                <h4 className="text-white text-2xl font-bold mb-4">Faça Parte do Coral</h4>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Tem paixão pela música? Venha fazer parte dos nossos ministérios musicais 
                  e use seu talento para glorificar a Deus.
                </p>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-reino-gold hover:bg-reino-warm text-reino-brown font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Mic className="mr-2 h-5 w-5" />
                    Quero Participar
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Nossos Ensaios
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Worship;