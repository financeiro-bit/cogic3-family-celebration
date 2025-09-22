import { Card, CardContent } from "@/components/ui/card";
import pastorImage from "@/assets/pastor-paulo-cezar.png";

const Founder = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-burgundy/10 to-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">
            📚 Biografia do Idealizador
          </h2>
          <p className="text-xl text-burgundy/80 font-medium">
            Clube do Livro Verbo & Verso
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-gold/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-burgundy mb-6">
                  Pastor Paulo Cezar Nogueira
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Paulo Cezar Nogueira é pastor da Igreja COGIC 3 Prostrados aos Teus Pés, 
                    onde serve com dedicação há mais de 14 anos. Reconhecido por sua liderança 
                    firme e sensível ao Espírito, é também um apaixonado por leitura — 
                    especialmente por livros que aprofundam a fé, o caráter cristão e a 
                    liderança espiritual.
                  </p>
                  <p>
                    Sua paixão pela Palavra de Deus e pela formação de homens íntegros e 
                    instruídos o levou a idealizar o Clube do Livro Verbo & Verso. Mais do 
                    que um projeto, trata-se de um movimento que une literatura cristã e 
                    discipulado, fortalecendo os laços entre homens comprometidos com o Reino 
                    e com a tradição doutrinária da COGIC no Brasil.
                  </p>
                  <p>
                    Com visão, constância e amor pelo ensino, o pastor Paulo tem inspirado 
                    outros homens a crescerem espiritualmente e intelectualmente por meio da 
                    leitura, do debate saudável e da comunhão fraterna.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-gold/20 rounded-2xl transform rotate-3"></div>
                  <img
                    src={pastorImage}
                    alt="Pastor Paulo Cezar Nogueira - Idealizador do Clube do Livro Verbo & Verso"
                    className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Founder;