import { Users, Heart, BookOpen, Target, Lightbulb, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cogicLibraryStudy from "@/assets/cogic-library-study.jpg";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Verbo",
      subtitle: "Palavra de Deus",
      description: "Fundamentação bíblica em todas as nossas discussões e escolhas"
    },
    {
      icon: Heart,
      title: "Verso",
      subtitle: "Literatura & Poesia",
      description: "Apreciação da riqueza literária e sabedoria dos grandes autores"
    },
    {
      icon: Users,
      title: "Irmandade",
      subtitle: "Comunhão COGIC",
      description: "Ambiente seguro para crescimento e apoio mútuo entre homens cristãos COGIC"
    },
    {
      icon: Target,
      title: "Crescimento",
      subtitle: "Desenvolvimento Integral",
      description: "Transformação pessoal através do conhecimento e da fé cristã"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-bold text-burgundy mb-6">
            Sobre o Clube
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Um ministério masculino cristão exclusivo para membros das <strong className="text-burgundy">igrejas COGIC no Brasil</strong>, 
            dedicado ao crescimento espiritual e intelectual através da literatura, fundamentado na Palavra de Deus.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={cogicLibraryStudy} 
                alt="Homens COGIC de diferentes etnias estudando juntos" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-elegant opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-burgundy p-6 rounded-2xl shadow-gold">
              <Lightbulb className="h-8 w-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif-elegant text-3xl font-bold text-burgundy mb-6">
                Nossa História
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  O <strong className="text-burgundy">Clube do Livro Verbo & Verso</strong> nasceu 
                  da visão de criar um espaço exclusivo onde homens cristãos <strong className="text-burgundy">membros 
                  das igrejas COGIC no Brasil</strong> pudessem unir o amor pela Palavra de Deus com a paixão pela literatura.
                </p>
                <p>
                  Conectado à <strong className="text-burgundy">COGIC3 Prostrados aos Teus Pés</strong>, 
                  nosso ministério busca formar homens de todas as etnias através da leitura, discussão e irmandade, 
                  promovendo crescimento espiritual e intelectual dentro da tradição COGIC.
                </p>
                <p>
                  <strong className="text-gold">Requisito:</strong> Para participar, é necessário ser membro ativo 
                  de uma das igrejas COGIC (Church of God in Christ) no Brasil, garantindo a unidade 
                  doutrinária e espiritual do grupo.
                </p>
                <p>
                  Cada encontro é uma oportunidade de descobrir como a sabedoria dos livros 
                  pode enriquecer nossa compreensão da fé e da vida cristã.
                </p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-burgundy hover:bg-burgundy/90 text-white font-medium group"
            >
              Conheça Nossa Comunidade
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-burgundy-light/10 rounded-2xl p-8 border border-burgundy/10">
            <h4 className="font-serif-elegant text-2xl font-bold text-burgundy mb-4">
              Nossa Missão
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Promover o crescimento espiritual e intelectual de homens cristãos membros das 
              igrejas COGIC no Brasil através da leitura, discussão e irmandade, unindo a Palavra 
              de Deus com a riqueza da literatura.
            </p>
          </div>

          <div className="bg-gold-light/10 rounded-2xl p-8 border border-gold/20">
            <h4 className="font-serif-elegant text-2xl font-bold text-burgundy mb-4">
              Nossa Visão
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em formação masculina cristã através da literatura dentro da tradição COGIC, 
              criando uma comunidade de homens de todas as etnias transformados pelo conhecimento e pela fé, 
              fortalecendo a irmandade entre as igrejas COGIC no Brasil.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-serif-elegant text-3xl font-bold text-burgundy text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-gold transition-all duration-300 group-hover:scale-105 border border-burgundy/10">
                    <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-serif-elegant text-xl font-bold text-burgundy mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gold font-medium mb-3">{value.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COGIC Requirement Notice */}
        <div className="mt-20 bg-gradient-elegant rounded-3xl p-12 text-center text-white">
          <Users className="h-16 w-16 mx-auto mb-6 text-gold" />
          <h3 className="font-serif-elegant text-2xl font-bold mb-4">
            Exclusivo para Membros COGIC
          </h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Este ministério é destinado exclusivamente a homens cristãos que são membros ativos 
            das igrejas COGIC (Church of God in Christ) no Brasil. Esta exclusividade garante 
            nossa unidade doutrinária, espiritual e fortalece os laços entre os irmãos da denominação.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-gold" />
              <p className="font-medium">Unidade Doutrinária</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <Heart className="h-8 w-8 mx-auto mb-2 text-gold" />
              <p className="font-medium">Irmandade COGIC</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <Target className="h-8 w-8 mx-auto mb-2 text-gold" />
              <p className="font-medium">Crescimento Conjunto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;