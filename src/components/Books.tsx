import { BookOpen, Star, Calendar, Users, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Books = () => {
  const currentBook = {
    title: "Cristianismo Puro e Simples",
    author: "C.S. Lewis",
    category: "Teologia & Apologética",
    description: "Uma obra clássica que apresenta os fundamentos da fé cristã de forma clara e acessível, explorando as verdades centrais do cristianismo.",
    startDate: "1º de Novembro",
    endDate: "30 de Novembro",
    progress: 65,
    nextMeeting: "30 de Novembro - 16h"
  };

  const bookHistory = [
    {
      title: "O Peregrino",
      author: "John Bunyan",
      category: "Literatura Cristã Clássica",
      rating: 4.8,
      completed: true
    },
    {
      title: "Conhecendo a Deus",
      author: "J.I. Packer",
      category: "Teologia",
      rating: 4.9,
      completed: true
    },
    {
      title: "A Cabana",
      author: "William P. Young",
      category: "Romance Cristão",
      rating: 4.2,
      completed: true
    }
  ];

  const upcomingBooks = [
    {
      title: "Desiring God",
      author: "John Piper",
      category: "Espiritualidade",
      month: "Dezembro 2024"
    },
    {
      title: "As Confissões",
      author: "Santo Agostinho",
      category: "Biografia Espiritual",
      month: "Janeiro 2025"
    }
  ];

  const categories = [
    { name: "Teologia & Espiritualidade", count: 12, color: "bg-burgundy" },
    { name: "Biografias Cristãs", count: 8, color: "bg-gold" },
    { name: "Literatura Clássica", count: 6, color: "bg-navy" },
    { name: "Desenvolvimento Pessoal", count: 5, color: "bg-burgundy/70" }
  ];

  return (
    <section id="books" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-bold text-burgundy mb-6">
            Nossa Biblioteca
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Descubra os livros que estão transformando nossa comunidade e junte-se às discussões 
            que enriquecem nossa fé e conhecimento.
          </p>
        </div>

        {/* Current Book - Featured */}
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden mb-20">
          <div className="bg-gradient-elegant p-2">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-gold text-burgundy font-medium mb-4">
                    📖 Leitura Atual
                  </Badge>
                  <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold text-burgundy mb-4">
                    {currentBook.title}
                  </h3>
                  <p className="text-gold font-medium text-lg mb-2">por {currentBook.author}</p>
                  <Badge variant="outline" className="border-burgundy text-burgundy mb-6">
                    {currentBook.category}
                  </Badge>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {currentBook.description}
                  </p>

                  <div className="space-y-6">
                    {/* Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-burgundy">Progresso da Leitura</span>
                        <span className="text-sm text-muted-foreground">{currentBook.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-gold h-3 rounded-full transition-all duration-500" 
                          style={{ width: `${currentBook.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg"
                        className="bg-burgundy hover:bg-burgundy/90 text-white font-medium group"
                      >
                        Participar da Discussão
                        <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
                      >
                        Ver Cronograma
                        <Calendar className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Key Dates */}
                  <div className="bg-burgundy-light/10 rounded-2xl p-6 border border-burgundy/10">
                    <h4 className="font-semibold text-burgundy mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Cronograma de Leitura
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Início:</span>
                        <span className="font-medium text-burgundy">{currentBook.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Término:</span>
                        <span className="font-medium text-burgundy">{currentBook.endDate}</span>
                      </div>
                      <div className="border-t border-burgundy/10 pt-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Próximo Encontro:</span>
                          <span className="font-medium text-gold">{currentBook.nextMeeting}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-gold-light/10 rounded-2xl p-6 border border-gold/20">
                    <h4 className="font-semibold text-burgundy mb-4">Categorias dos Livros</h4>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                            <span className="text-sm text-muted-foreground">{category.name}</span>
                          </div>
                          <span className="text-sm font-medium text-burgundy">{category.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Books History */}
          <div>
            <h3 className="font-serif-elegant text-2xl font-bold text-burgundy mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-gold" />
              Livros Já Lidos
            </h3>
            <div className="space-y-6">
              {bookHistory.map((book, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-gold transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-serif-elegant text-lg font-bold text-burgundy group-hover:text-gold transition-colors">
                        {book.title}
                      </h4>
                      <p className="text-muted-foreground">por {book.author}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-gold">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-burgundy/30 text-burgundy/70 text-xs">
                    {book.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Books */}
          <div>
            <h3 className="font-serif-elegant text-2xl font-bold text-burgundy mb-8 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-gold" />
              Próximas Leituras
            </h3>
            <div className="space-y-6">
              {upcomingBooks.map((book, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-gold transition-all duration-300 border-l-4 border-gold group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-serif-elegant text-lg font-bold text-burgundy group-hover:text-gold transition-colors">
                        {book.title}
                      </h4>
                      <p className="text-muted-foreground">por {book.author}</p>
                    </div>
                    <Badge className="bg-gold/10 text-gold border-gold/20">
                      {book.month}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="border-burgundy/30 text-burgundy/70 text-xs">
                    {book.category}
                  </Badge>
                </div>
              ))}
              
              <div className="bg-gradient-elegant rounded-xl p-6 text-white text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-4 text-gold" />
                <h4 className="font-serif-elegant text-lg font-bold mb-2">
                  Sugira um Livro
                </h4>
                <p className="text-white/90 text-sm mb-4">
                  Tem alguma sugestão de leitura? Compartilhe conosco!
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white/30 text-white hover:bg-white hover:text-burgundy"
                >
                  Enviar Sugestão
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;