import { BookOpen, Star, Calendar, Users, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bookCover from "@/assets/o-vinho-novo-capa.jpg";

const Books = () => {
  const currentBook = {
    title: "O Vinho Novo é Melhor",
    author: "Robert Thom",
    category: "Biografia Cristã & Testemunho",
    description: "A história inspirativa de um marinheiro sul-africano e alcoólatra que descobriu o cristianismo e foi transformado em um verdadeiro homem de fé. Uma trajetória que prova que milagres acontecem ainda hoje.",
    startDate: "1º de Outubro de 2025",
    endDate: "15 de Outubro de 2025", 
    progress: 0,
    nextMeeting: "1º de Outubro de 2025 - 20h (Primeira Reunião Presencial)",
    pages: "183 páginas",
    publisher: "Editora Vida",
    isbn: "978-8573671858",
    rating: 4.9,
    reviews: "2.857 avaliações"
  };

  const bookHistory = [
    {
      title: "Cristianismo Puro e Simples",
      author: "C.S. Lewis",
      category: "Teologia & Apologética",
      rating: 4.7,
      completed: true
    },
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
    }
  ];

  const upcomingBooks = [
    {
      title: "Desiring God",
      author: "John Piper",
      category: "Espiritualidade",
      month: "Janeiro 2026"
    },
    {
      title: "As Confissões",
      author: "Santo Agostinho",
      category: "Biografia Espiritual",
      month: "Março 2026"
    }
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
            Descubra os livros que estão transformando nossa comunidade. Todos os livros são 
            <strong className="text-burgundy"> disponibilizados gratuitamente em PDF</strong> para 
            os participantes, e junte-se às discussões que enriquecem nossa fé e conhecimento.
          </p>
        </div>

        {/* Current Book - Featured */}
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden mb-20">
          <div className="bg-gradient-elegant p-2">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Book Cover */}
                <div className="lg:order-1 flex justify-center">
                  <div className="relative">
                    <img 
                      src={bookCover} 
                      alt="Capa do livro O Vinho Novo é Melhor"
                      className="w-64 h-96 object-cover rounded-xl shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gold text-burgundy rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg">
                      PDF<br/>Grátis
                    </div>
                  </div>
                </div>

                {/* Book Info */}
                <div className="lg:col-span-2 lg:order-2">
                  <Badge className="bg-gold text-burgundy font-medium mb-4">
                    📚 Leitura Atual • PDF Gratuito Disponível
                  </Badge>
                  <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold text-burgundy mb-4">
                    {currentBook.title}
                  </h3>
                  <p className="text-gold font-medium text-lg mb-2">por {currentBook.author}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="border-burgundy text-burgundy">
                      {currentBook.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gold">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{currentBook.rating}</span>
                      <span className="text-xs text-muted-foreground">({currentBook.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="bg-gold/10 rounded-xl p-4 border border-gold/20 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-burgundy font-medium">📄 {currentBook.pages}</span>
                      <span className="text-burgundy font-medium">📖 {currentBook.publisher}</span>
                      <span className="text-muted-foreground">ISBN: {currentBook.isbn}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {currentBook.description}
                  </p>

                  <div className="bg-burgundy/10 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-burgundy mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Cronograma do Clube
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Início do Clube:</span>
                        <span className="font-medium text-burgundy">{currentBook.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Primeira Reunião:</span>
                        <span className="font-medium text-gold">{currentBook.nextMeeting}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-burgundy hover:bg-burgundy/90 text-white font-medium group"
                      onClick={() => window.open('https://drive.google.com/file/d/1yqQjswpCiJku7oNEPghAG-AVYSCyJx1y/view?usp=drive_link', '_blank')}
                    >
                      Baixar PDF Gratuito
                      <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
                      onClick={() => window.open('https://chat.whatsapp.com/CZtfBZlRd5i0nmH0NrLBkE', '_blank')}
                    >
                      Participar da Discussão
                      <Users className="ml-2 h-5 w-5" />
                    </Button>
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
                  PDFs Gratuitos para Membros
                </h4>
                <p className="text-white/90 text-sm mb-4">
                  Todos os livros são disponibilizados em PDF gratuitamente via WhatsApp 
                  para membros das igrejas COGIC no Brasil.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white/30 text-white hover:bg-white hover:text-burgundy"
                  onClick={() => window.open('https://drive.google.com/file/d/1yqQjswpCiJku7oNEPghAG-AVYSCyJx1y/view?usp=drive_link', '_blank')}
                >
                  Baixar PDF Atual
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