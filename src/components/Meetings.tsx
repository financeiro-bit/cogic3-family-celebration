import { Calendar, Clock, MapPin, Users, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Meetings = () => {
  const nextMeeting = {
    date: "15 de Dezembro, 2024",
    time: "20h00 - 21h30",
    location: "Google Meet - Sala Privada",
    address: "Link será enviado por WhatsApp",
    topic: "O Vinho Novo é Melhor - Capítulos 1-6",
    discussion: "A Transformação de um Marinheiro Alcoólatra",
    attendees: 8,
    maxAttendees: 20,
    readingPeriod: "14 dias para leitura dos capítulos (1º a 15 de Dezembro)"
  };

  const agenda = [
    { time: "20h00 - 20h10", activity: "Recepção e Confraternização Online", type: "social" },
    { time: "20h10 - 20h20", activity: "Oração de Abertura e Devoção", type: "spiritual" },
    { time: "20h20 - 21h10", activity: "Discussão dos Capítulos Lidos", type: "main" },
    { time: "21h10 - 21h20", activity: "Reflexões Pessoais e Partilhas", type: "reflection" },
    { time: "21h20 - 21h30", activity: "Próximos Capítulos e Oração Final", type: "closing" }
  ];

  const upcomingMeetings = [
    {
      date: "30 de Dezembro",
      book: "Desiring God",
      topic: "A Busca pela Felicidade em Deus - Capítulos 1-4",
      status: "confirmed"
    },
    {
      date: "15 de Janeiro",
      book: "Desiring God",
      topic: "A Busca pela Felicidade em Deus - Capítulos 5-8",
      status: "confirmed"
    },
    {
      date: "30 de Janeiro",
      book: "As Confissões",
      topic: "O Caminho para Deus - Início",
      status: "planning"
    }
  ];

  const participationRules = [
    "Leitura prévia dos capítulos programados em 14 dias",
    "Participação pontual nos encontros online às 20h",
    "Respeito às opiniões e experiências de todos os irmãos",
    "Participação ativa nas discussões via Google Meet",
    "Confidencialidade das partilhas pessoais",
    "Microfone desligado quando não estiver falando"
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'social': return Users;
      case 'spiritual': return CheckCircle;
      case 'main': return MessageCircle;
      case 'reflection': return CheckCircle;
      case 'closing': return CheckCircle;
      default: return Clock;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'social': return 'text-navy';
      case 'spiritual': return 'text-burgundy';
      case 'main': return 'text-gold';
      case 'reflection': return 'text-burgundy/70';
      case 'closing': return 'text-burgundy';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="meetings" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-bold text-burgundy mb-6">
            Nossos Encontros
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Momentos de comunhão, aprendizado e crescimento mútuo através de discussões 
            profundas sobre fé, literatura e vida cristã entre irmãos das igrejas COGIC no Brasil.
          </p>
        </div>

        {/* Next Meeting - Featured */}
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden mb-20">
          <div className="bg-gradient-elegant p-2">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Meeting Info */}
                <div className="lg:col-span-2">
                  <Badge className="bg-gold text-burgundy font-medium mb-4">
                    📅 Próximo Encontro
                  </Badge>
                  
                  <h3 className="font-serif-elegant text-3xl font-bold text-burgundy mb-6">
                    {nextMeeting.topic}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-burgundy" />
                      </div>
                      <div>
                        <p className="font-medium text-burgundy">{nextMeeting.date}</p>
                        <p className="text-sm text-muted-foreground">Data do encontro</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-burgundy">{nextMeeting.time}</p>
                        <p className="text-sm text-muted-foreground">Horário</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-burgundy">{nextMeeting.location}</p>
                        <p className="text-sm text-muted-foreground">{nextMeeting.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-burgundy" />
                      </div>
                      <div>
                        <p className="font-medium text-burgundy">
                          {nextMeeting.attendees}/{nextMeeting.maxAttendees} confirmados
                        </p>
                        <p className="text-sm text-muted-foreground">Participantes online</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-burgundy-light/10 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-burgundy mb-3">Foco da Discussão:</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {nextMeeting.discussion}
                    </p>
                    <div className="bg-gold/10 rounded-lg p-4 border border-gold/20">
                      <p className="text-sm font-medium text-gold">
                        📚 {nextMeeting.readingPeriod}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-burgundy hover:bg-burgundy/90 text-white font-medium group"
                    >
                      Confirmar Presença
                      <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-gold text-gold hover:bg-gold hover:text-burgundy"
                    >
                      Acessar Google Meet
                      <MapPin className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Agenda */}
                <div>
                  <h4 className="font-serif-elegant text-xl font-bold text-burgundy mb-6">
                    Programação
                  </h4>
                  <div className="space-y-4">
                    {agenda.map((item, index) => {
                      const Icon = getActivityIcon(item.type);
                      const colorClass = getActivityColor(item.type);
                      
                      return (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-burgundy-light/5 transition-colors">
                          <div className={`w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0 mt-1`}>
                            <Icon className={`h-4 w-4 ${colorClass}`} />
                          </div>
                          <div>
                            <p className="font-medium text-burgundy text-sm">{item.time}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.activity}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Meetings & Guidelines */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Meetings */}
          <div>
            <h3 className="font-serif-elegant text-2xl font-bold text-burgundy mb-8 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-gold" />
              Próximos Encontros
            </h3>
            <div className="space-y-6">
              {upcomingMeetings.map((meeting, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-gold transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-serif-elegant text-lg font-bold text-burgundy group-hover:text-gold transition-colors">
                        {meeting.date}
                      </h4>
                      <p className="text-muted-foreground">
                        <strong>{meeting.book}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{meeting.topic}</p>
                    </div>
                    <Badge 
                      variant={meeting.status === 'confirmed' ? 'default' : 'outline'}
                      className={
                        meeting.status === 'confirmed' 
                          ? 'bg-burgundy text-white' 
                          : meeting.status === 'planning'
                          ? 'border-gold text-gold'
                          : 'border-navy text-navy'
                      }
                    >
                      {meeting.status === 'confirmed' ? 'Confirmado' : 
                       meeting.status === 'planning' ? 'Planejamento' : 'Votação'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Participation Guidelines */}
          <div>
            <h3 className="font-serif-elegant text-2xl font-bold text-burgundy mb-8 flex items-center">
              <Users className="h-6 w-6 mr-3 text-gold" />
              Como Participar
            </h3>
            
            <div className="bg-white rounded-xl p-8 shadow-elegant mb-8">
              <h4 className="font-semibold text-burgundy mb-6">Compromissos dos Membros:</h4>
              <div className="space-y-4">
                {participationRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-elegant rounded-xl p-8 text-white text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-gold" />
              <h4 className="font-serif-elegant text-xl font-bold mb-3">
                Junte-se a Nós
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Faça parte desta jornada de crescimento espiritual e intelectual. 
                Homens cristãos são bem-vindos!
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-burgundy"
              >
                Quero Participar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetings;