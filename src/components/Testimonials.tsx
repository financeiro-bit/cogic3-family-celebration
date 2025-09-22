import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcos Silva",
      role: "Participante da 1ª Turma",
      text: "O Clube do Livro transformou minha visão sobre leitura cristã. As discussões são profundas e edificantes. Recomendo a todos os irmãos!",
      rating: 5,
      image: "🙂"
    },
    {
      name: "João Santos",
      role: "Líder de Ministério",
      text: "Excelente metodologia! O Pastor Paulo conduz com sabedoria e as reflexões quinzenais são muito enriquecedoras.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Roberto Oliveira",
      role: "Pai de Família",
      text: "Consegui conciliar a leitura com minha rotina corrida. O cronograma é perfeito para homens trabalhadores como eu.",
      rating: 5,
      image: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gold/5 to-burgundy/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy mb-6">
            O Que Dizem Nossos Participantes
          </h2>
          <p className="text-xl text-burgundy/80 max-w-2xl mx-auto font-inter">
            Depoimentos reais de homens que foram transformados pela leitura cristã direcionada
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <p className="text-gray-700 leading-relaxed font-inter italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-burgundy font-playfair">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 font-inter">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-burgundy mb-2 font-playfair">50+</div>
              <p className="text-gray-600 font-inter">Homens Participando</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-gold mb-2 font-playfair">3</div>
              <p className="text-gray-600 font-inter">Turmas Realizadas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-burgundy mb-2 font-playfair">95%</div>
              <p className="text-gray-600 font-inter">Taxa de Conclusão</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-gold mb-2 font-playfair">4.9</div>
              <p className="text-gray-600 font-inter">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;