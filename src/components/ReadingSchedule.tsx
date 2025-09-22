import { Calendar, Clock, Users, BookOpen, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ReadingSchedule = () => {
  const bookInfo = {
    title: "O Vinho Novo é Melhor",
    author: "Robert Thom",
    totalPages: 183,
    totalChapters: 22,
    duration: "Aproximadamente 4 meses"
  };

  const meetings = [
    {
      number: 1,
      title: "APRESENTAÇÃO E INÍCIO",
      date: "[A DEFINIR]",
      status: "upcoming",
      reading: "Apenas Prefácio e Introdução (páginas 6-7)",
      agenda: [
        "Apresentações pessoais (5 min por pessoa)",
        "Apresentação do livro e autor Robert Thom",
        "Regras e dinâmica do clube",
        "Oração de abertura e consagração do ministério"
      ],
      topics: [],
      questions: []
    },
    {
      number: 2,
      title: "PRIMEIROS PASSOS NA FÉ",
      date: "15º dia após Reunião 1",
      status: "scheduled",
      reading: "Capítulos 1-4 (páginas 8-60)",
      chapters: [
        "Cap. 1: Pobre menino rico",
        "Cap. 2: Uma dose de conhaque mentolado", 
        "Cap. 3: Um beberrão na Terra Santa",
        "Cap. 4: Mudança para pior"
      ],
      topics: [
        "Infância e formação: Como as experiências da infância moldam nossa fé?",
        "Vícios e dependências: O que leva uma pessoa ao alcoolismo?",
        "Busca espiritual: Por que buscamos Deus em momentos de crise?",
        "Transformação inicial: Primeiros sinais de mudança na vida de Robert"
      ],
      questions: [
        "Que paralelos você vê entre a história de Robert e sua própria jornada?",
        "Como Deus usa nossas dificuldades para nos moldar?",
        "Qual foi seu primeiro encontro real com Deus?"
      ]
    },
    {
      number: 3,
      title: "ENCONTRO COM O SOBRENATURAL",
      date: "15º dia após Reunião 2",
      status: "scheduled",
      reading: "Capítulos 5-8 (páginas 61-100)",
      chapters: [
        "Cap. 5: A \"doida\" sra. Webster",
        "Cap. 6: \"Je-Jesus, o qu-que cura e babatiza\"",
        "Cap. 7: A casa com muitas árvores frutíferas",
        "Cap. 8: Mil e seiscentos quilômetros de carona"
      ],
      topics: [
        "Dons espirituais: Como reconhecer e aceitar o sobrenatural?",
        "Preconceitos religiosos: Superando barreiras denominacionais",
        "Provisão divina: Deus supre nossas necessidades de formas inesperadas",
        "Obediência radical: Seguir a direção de Deus mesmo sem entender"
      ],
      questions: [
        "Você já teve experiências sobrenaturais? Como reagiu?",
        "Que preconceitos religiosos você já teve que superar?",
        "Como Deus tem provido para sua família de formas inesperadas?"
      ]
    },
    {
      number: 4,
      title: "VIDA DE FÉ PRÁTICA",
      date: "15º dia após Reunião 3",
      status: "scheduled",
      reading: "Capítulos 9-12 (páginas 101-135)",
      chapters: [
        "Cap. 9: Mas Deus me disse, senhor!",
        "Cap. 10: Na folha de pagamento de Deus",
        "Cap. 11: Quem precisa de quatro travesseiros?",
        "Cap. 12: Adeus a camas e aparelhos ortopédicos"
      ],
      topics: [
        "Direção divina: Como ouvir a voz de Deus?",
        "Sustento pela fé: Viver dependendo totalmente de Deus",
        "Simplicidade: Desapego material e confiança em Deus",
        "Cura divina: Fé para milagres físicos"
      ],
      questions: [
        "Como você discerne entre sua voz e a voz de Deus?",
        "Você já viveu períodos de total dependência de Deus?",
        "Que \"travesseiros\" (confortos) Deus tem pedido para você abrir mão?"
      ]
    },
    {
      number: 5,
      title: "MINISTÉRIO E CHAMADO",
      date: "15º dia após Reunião 4",
      status: "scheduled",
      reading: "Capítulos 13-16 (páginas 136-165)",
      chapters: [
        "Cap. 13: O velho e querido Bosworth",
        "Cap. 14: Um gerador com mostarda e maionese",
        "Cap. 15: Safári a Tonetti",
        "Cap. 16: \"Retire este homem da cidade!\""
      ],
      topics: [
        "Mentores espirituais: A importância de pessoas maduras na fé",
        "Criatividade no ministério: Deus usa métodos inusitados",
        "Missões e evangelismo: Levar o evangelho a lugares difíceis",
        "Perseguição: Enfrentando oposição por causa da fé"
      ],
      questions: [
        "Quem foram seus mentores espirituais?",
        "Como Deus tem usado sua criatividade para o Reino?",
        "Você já enfrentou oposição por causa de sua fé?"
      ]
    },
    {
      number: 6,
      title: "FÉ RADICAL E OBEDIÊNCIA",
      date: "15º dia após Reunião 5",
      status: "scheduled",
      reading: "Capítulos 17-20 (páginas 166-180)",
      chapters: [
        "Cap. 17: \"Mas, Senhor, isso é irracional!\"",
        "Cap. 18: Vivendo e morrendo pela fé",
        "Cap. 19: Não tratem com desprezo as profecias",
        "Cap. 20: Viagem fantástica"
      ],
      topics: [
        "Fé irracional: Quando Deus pede o impossível",
        "Vida e morte: Confiança total nos planos de Deus",
        "Dons proféticos: Como lidar com revelações divinas",
        "Aventuras da fé: A vida cristã como jornada emocionante"
      ],
      questions: [
        "Quando Deus pediu algo \"irracional\" de você?",
        "Como você lida com o medo da morte?",
        "Você já recebeu ou deu uma palavra profética?"
      ]
    },
    {
      number: 7,
      title: "CONCLUSÃO E APLICAÇÕES",
      date: "15º dia após Reunião 6",
      status: "scheduled",
      reading: "Capítulos 21-22 (páginas 181-183)",
      chapters: [
        "Cap. 21: Henley Manor, 205",
        "Cap. 22: A resposta"
      ],
      agenda: [
        "Discussão final dos últimos capítulos",
        "Reflexões gerais sobre todo o livro",
        "Aplicações práticas para nossas vidas",
        "Testemunhos de como o livro impactou cada um",
        "Escolha do próximo livro (votação)",
        "Avaliação do clube e sugestões",
        "Oração de encerramento e gratidão"
      ],
      questions: [
        "Qual foi a maior lição que você tirou do livro?",
        "Como sua fé foi desafiada ou fortalecida?",
        "Que mudanças práticas você pretende fazer?",
        "Qual capítulo mais impactou você e por quê?"
      ]
    }
  ];

  const getStatusBadge = (status: string, number: number) => {
    if (status === "upcoming") {
      return (
        <Badge className="bg-gold text-burgundy">
          📋 Reunião de Abertura
        </Badge>
      );
    }
    if (number === 7) {
      return (
        <Badge className="bg-burgundy text-white">
          🎯 Reunião Final
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="border-navy text-navy">
        📚 Reunião {number}
      </Badge>
    );
  };

  return (
    <section id="cronograma" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-bold text-burgundy mb-6">
            Cronograma de Leitura
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Clube do Livro Verbo & Verso - Uma jornada de 4 meses através da transformação 
            de um marinheiro alcoólatra em um homem de fé.
          </p>
        </div>

        {/* Book Overview */}
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden mb-16">
          <div className="bg-gradient-elegant p-2">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="font-serif-elegant text-3xl font-bold text-burgundy mb-4">
                  📚 {bookInfo.title}
                </h3>
                <p className="text-gold font-medium text-xl mb-6">por {bookInfo.author}</p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-burgundy/10 rounded-xl p-4">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-burgundy" />
                    <p className="font-medium text-burgundy">{bookInfo.totalPages} páginas</p>
                    <p className="text-sm text-muted-foreground">{bookInfo.totalChapters} capítulos</p>
                  </div>
                  <div className="bg-gold/10 rounded-xl p-4">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-gold" />
                    <p className="font-medium text-burgundy">14 dias</p>
                    <p className="text-sm text-muted-foreground">Para cada leitura</p>
                  </div>
                  <div className="bg-navy/10 rounded-xl p-4">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-navy" />
                    <p className="font-medium text-burgundy">4 meses</p>
                    <p className="text-sm text-muted-foreground">Duração total</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold/10 rounded-xl p-6 border border-gold/20 text-center">
                <h4 className="font-bold text-burgundy mb-3">🎯 DINÂMICA DO CLUBE</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-burgundy">📖 Leitura:</strong>
                    <p className="text-muted-foreground">14 dias individuais</p>
                  </div>
                  <div>
                    <strong className="text-burgundy">💻 Reunião:</strong>
                    <p className="text-muted-foreground">15º dia via Google Meet</p>
                  </div>
                  <div>
                    <strong className="text-burgundy">⏰ Horário:</strong>
                    <p className="text-muted-foreground">Sempre às 20h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meetings Schedule */}
        <div className="space-y-8">
          {meetings.map((meeting, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-elegant overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Meeting Header */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      {getStatusBadge(meeting.status, meeting.number)}
                    </div>
                    
                    <h3 className="font-serif-elegant text-2xl font-bold text-burgundy mb-3">
                      {meeting.title}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gold" />
                        <span className="text-muted-foreground">{meeting.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-burgundy" />
                        <span className="text-muted-foreground">20h00 - Google Meet</span>
                      </div>
                    </div>

                    <div className="bg-burgundy/10 rounded-lg p-4 mt-4">
                      <h4 className="font-semibold text-burgundy mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Leitura Programada
                      </h4>
                      <p className="text-sm text-muted-foreground">{meeting.reading}</p>
                    </div>
                  </div>

                  {/* Meeting Content */}
                  <div className="lg:w-2/3 space-y-6">
                    {/* Chapters */}
                    {meeting.chapters && (
                      <div>
                        <h4 className="font-semibold text-burgundy mb-3">📚 Capítulos:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {meeting.chapters.map((chapter, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground p-2 bg-muted/30 rounded">
                              {chapter}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Agenda for first and last meetings */}
                    {meeting.agenda && (
                      <div>
                        <h4 className="font-semibold text-burgundy mb-3">📋 Pauta da Reunião:</h4>
                        <div className="space-y-2">
                          {meeting.agenda.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Topics */}
                    {meeting.topics && meeting.topics.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-burgundy mb-3">💬 Temas para Discussão:</h4>
                        <div className="space-y-2">
                          {meeting.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <MessageCircle className="h-4 w-4 text-navy mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Questions */}
                    {meeting.questions && meeting.questions.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-burgundy mb-3">🤔 Perguntas Reflexivas:</h4>
                        <div className="space-y-2">
                          {meeting.questions.map((question, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground italic">{question}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-elegant rounded-2xl p-8 md:p-12 text-white text-center mt-16">
          <Users className="h-16 w-16 mx-auto mb-6 text-gold" />
          <h3 className="font-serif-elegant text-3xl font-bold mb-4">
            Pronto para Esta Jornada?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Junte-se a nós nesta transformadora jornada de 4 meses através da vida de Robert Thom. 
            Descubra como Deus pode transformar completamente uma vida entregue ao vício.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-burgundy hover:bg-white/90 font-medium"
            >
              Confirmar Participação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Baixar PDF do Livro
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingSchedule;