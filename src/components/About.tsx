import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Book } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor e Compaixão",
      description: "Demonstramos o amor de Cristo através de ações concretas e cuidado genuíno por cada pessoa."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Somos uma família unida em Cristo, onde todos são bem-vindos e encontram seu lugar."
    },
    {
      icon: Globe,
      title: "Missão Global",
      description: "Prostrados aos Seus pés, levamos o evangelho até os confins da terra."
    },
    {
      icon: Book,
      title: "Palavra de Deus",
      description: "Fundamentamos nossa fé e prática nas Sagradas Escrituras, vivendo segundo os ensinamentos bíblicos."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-church-hero mb-6">
              Sobre Nossa Igreja
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Igreja de Deus em Cristo - Prostrados aos Teus Pés é uma comunidade de fé 
              dedicada à adoração, crescimento espiritual e serviço ao próximo.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-church-hero">
                Nossa História
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada com o propósito de ser um lugar onde as pessoas podem se prostrar 
                diante da presença de Deus, nossa igreja é um espaço de adoração genuína, 
                crescimento espiritual e transformação de vidas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seguindo os ensinamentos bíblicos e a tradição da Igreja de Deus em Cristo, 
                buscamos ser uma comunidade que reflete o amor, a graça e o poder de Jesus Cristo 
                em nossa região e além.
              </p>
              <div className="bg-church-accent/10 border-l-4 border-church-accent p-6 rounded-r-lg">
                <p className="text-church-hero font-medium italic">
                  "Prostrados aos Seus pés, encontramos nossa força, nossa direção e nossa esperança."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-church">
              <h3 className="font-serif text-2xl font-semibold text-church-hero mb-6">
                Nossa Visão
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-church-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Ser uma igreja que transforma vidas através do poder do evangelho
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-church-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Formar discípulos comprometidos com os valores do Reino de Deus
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-church-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Impactar nossa comunidade com amor e serviço cristão
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-church-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Expandir o Reino de Deus através da oração, adoração e missões
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-0 shadow-church hover:shadow-gold transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-church-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-church-accent/20 transition-colors">
                    <value.icon className="h-8 w-8 text-church-accent" />
                  </div>
                  <h4 className="font-semibold text-church-hero mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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