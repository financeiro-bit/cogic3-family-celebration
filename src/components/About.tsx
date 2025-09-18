import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Book, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor e Compaixão",
      description: "Demonstramos o amor de Cristo através de ações concretas e cuidado genuíno por cada pessoa.",
      gradient: "from-red-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Somos uma família unida em Cristo, onde todos são bem-vindos e encontram seu lugar.",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      icon: Globe,
      title: "Missão Global",
      description: "Prostrados aos Seus pés, levamos o evangelho até os confins da terra.",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: Book,
      title: "Palavra de Deus",
      description: "Fundamentamos nossa fé e prática nas Sagradas Escrituras, vivendo segundo os ensinamentos bíblicos.",
      gradient: "from-amber-400 to-orange-400"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-church-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-church-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-church-electric mr-2" />
              <span className="text-church-electric font-semibold text-lg tracking-wide">NOSSA HISTÓRIA</span>
              <Sparkles className="h-6 w-6 text-church-electric ml-2" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-church-hero mb-8 tracking-tight">
              Sobre Nossa Igreja
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              A Igreja de Deus em Cristo - Prostrados aos Teus Pés é uma comunidade de fé 
              dedicada à adoração, crescimento espiritual e serviço ao próximo.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-4xl font-bold text-church-hero mb-6">
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
                    buscamos ser uma comunidade que reflete o amor, a graça e o poder de Jesus Cristo 
                    em nossa região e além.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-10"></div>
                <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-soft">
                  <blockquote className="text-church-hero font-medium italic text-xl leading-relaxed">
                    "Prostrados aos Seus pés, encontramos nossa força, nossa direção e nossa esperança."
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-electric rounded-3xl blur-2xl opacity-10"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-medium rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <h3 className="font-serif text-3xl font-bold text-church-hero mb-8">
                    Nossa Visão
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Ser uma igreja que transforma vidas através do poder do evangelho",
                      "Formar discípulos comprometidos com os valores do Reino de Deus",
                      "Impactar nossa comunidade com amor e serviço cristão",
                      "Expandir o Reino de Deus através da oração, adoração e missões"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-3 h-3 bg-gradient-electric rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group bg-white/70 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-500 rounded-2xl overflow-hidden hover:scale-105">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${value.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-church-hero mb-4 text-xl">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;