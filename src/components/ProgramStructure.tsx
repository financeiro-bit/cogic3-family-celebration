import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Users, MessageCircle, Calendar, Download, ArrowRight } from "lucide-react";

const ProgramStructure = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-burgundy/5 to-gold/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">
            Como Funciona o Programa?
          </h2>
          <p className="text-xl text-burgundy/80 max-w-3xl mx-auto">
            Uma metodologia testada e aprovada para transformação através da leitura cristã direcionada
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-burgundy mb-2">Meses</h3>
              <p className="text-burgundy/70">Duração total do programa</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-burgundy mb-2">4 Livros</h3>
              <p className="text-burgundy/70">1 livro cuidadosamente selecionado por mês</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-burgundy mb-2">8 Encontros</h3>
              <p className="text-burgundy/70">2 encontros presenciais por mês</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-burgundy mb-2">WhatsApp</h3>
              <p className="text-burgundy/70">Grupo exclusivo para discussões</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Download className="h-12 w-12 text-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-burgundy mb-3">PDFs Gratuitos</h3>
              <p className="text-gray-600">
                Todos os livros disponibilizados em PDF gratuitamente via WhatsApp
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-burgundy mb-3">Cronograma Flexível</h3>
              <p className="text-gray-600">
                Horários adaptados para homens trabalhadores e pais de família
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-burgundy mb-3">Comunidade Exclusiva</h3>
              <p className="text-gray-600">
                Apenas para homens das igrejas COGIC comprometidos com o crescimento
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-burgundy rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Esta Jornada de Transformação?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Não perca a oportunidade de crescer espiritualmente e intelectualmente 
            ao lado de homens comprometidos com o Reino de Deus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-burgundy hover:bg-white/90 px-10 py-6 text-xl font-bold"
            >
              GARANTIR MINHA VAGA
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-10 py-6 text-xl font-bold"
            >
              BAIXAR CRONOGRAMA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;