import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  AlertCircle, 
  Star,
  ChevronLeft,
  ChevronRight,
  Download,
  Bell
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CalendarioEscolar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'calendario' | 'lista'>('calendario');

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const eventos = [
    {
      id: 1,
      titulo: 'Volta às Aulas',
      data: new Date(2024, 1, 5), // 5 de fevereiro
      categoria: 'academico',
      tipo: 'importante',
      horario: '08:00 - 17:00',
      local: 'Todas as salas',
      descricao: 'Retorno das atividades escolares após as férias de verão.',
      participantes: 'Todos os alunos',
      cor: 'bg-primary'
    },
    {
      id: 2,
      titulo: 'Reunião de Pais - Berçário',
      data: new Date(2024, 1, 15),
      categoria: 'reuniao',
      tipo: 'normal',
      horario: '19:00 - 20:30',
      local: 'Sala de Reuniões',
      descricao: 'Primeira reunião do ano para apresentação do plano pedagógico.',
      participantes: 'Pais do Berçário',
      cor: 'bg-secondary'
    },
    {
      id: 3,
      titulo: 'Carnaval da Escola',
      data: new Date(2024, 1, 20),
      categoria: 'festa',
      tipo: 'destaque',
      horario: '14:00 - 17:00',
      local: 'Pátio Principal',
      descricao: 'Festa de carnaval com fantasias, música e muita diversão.',
      participantes: 'Todas as turmas',
      cor: 'bg-accent'
    },
    {
      id: 4,
      titulo: 'Festa Junina',
      data: new Date(2024, 5, 23), // 23 de junho
      categoria: 'festa',
      tipo: 'destaque',
      horario: '14:00 - 18:00',
      local: 'Pátio da Escola',
      descricao: 'Grande festa junina com quadrilha, comidas típicas e brincadeiras.',
      participantes: 'Toda a comunidade escolar',
      cor: 'bg-brand-orange'
    },
    {
      id: 5,
      titulo: 'Apresentação Musical',
      data: new Date(2024, 4, 15), // 15 de maio
      categoria: 'apresentacao',
      tipo: 'normal',
      horario: '16:00 - 17:00',
      local: 'Auditório',
      descricao: 'Apresentação musical das crianças para os pais.',
      participantes: 'Jardim I e II',
      cor: 'bg-brand-purple'
    },
    {
      id: 6,
      titulo: 'Passeio ao Zoológico',
      data: new Date(2024, 3, 12), // 12 de abril
      categoria: 'passeio',
      tipo: 'normal',
      horario: '08:00 - 16:00',
      local: 'Zoológico de Sapucaia',
      descricao: 'Passeio educativo para conhecer os animais.',
      participantes: 'Maternal e Jardim I',
      cor: 'bg-brand-green'
    },
    {
      id: 7,
      titulo: 'Formatura Jardim II',
      data: new Date(2024, 11, 15), // 15 de dezembro
      categoria: 'formatura',
      tipo: 'importante',
      horario: '19:00 - 21:00',
      local: 'Salão de Eventos',
      descricao: 'Cerimônia de formatura dos alunos do Jardim II.',
      participantes: 'Jardim II e familiares',
      cor: 'bg-brand-blue'
    }
  ];

  const categorias = [
    { id: 'academico', name: 'Acadêmico', cor: 'bg-primary', count: 2 },
    { id: 'festa', name: 'Festas', cor: 'bg-accent', count: 2 },
    { id: 'reuniao', name: 'Reuniões', cor: 'bg-secondary', count: 1 },
    { id: 'apresentacao', name: 'Apresentações', cor: 'bg-brand-purple', count: 1 },
    { id: 'passeio', name: 'Passeios', cor: 'bg-brand-green', count: 1 },
    { id: 'formatura', name: 'Formaturas', cor: 'bg-brand-blue', count: 1 }
  ];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    const days = [];
    
    // Dias do mês anterior
    for (let i = startDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      days.push({ date: currentDate, isCurrentMonth: true });
    }
    
    // Completar com dias do próximo mês
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };

  const getEventosParaData = (date: Date) => {
    return eventos.filter(evento => 
      evento.data.toDateString() === date.toDateString()
    );
  };

  const eventosDoMes = eventos.filter(evento => 
    evento.data.getMonth() === currentMonth.getMonth() &&
    evento.data.getFullYear() === currentMonth.getFullYear()
  );

  const proximosEventos = eventos
    .filter(evento => evento.data >= new Date())
    .sort((a, b) => a.data.getTime() - b.data.getTime())
    .slice(0, 5);

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Calendário Escolar
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Acompanhe todos os eventos, atividades e datas importantes da nossa escola
              </p>
            </div>
          </div>
        </section>

        {/* Controles e Filtros */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'calendario' ? 'default' : 'outline'}
                  onClick={() => setViewMode('calendario')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Calendário
                </Button>
                <Button
                  variant={viewMode === 'lista' ? 'default' : 'outline'}
                  onClick={() => setViewMode('lista')}
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Lista
                </Button>
              </div>
              
              <Button variant="outline" className="hover-scale">
                <Download className="w-4 h-4 mr-2" />
                Baixar Calendário PDF
              </Button>
            </div>
          </div>
        </section>

        {viewMode === 'calendario' ? (
          /* Visualização em Calendário */
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Calendário Principal */}
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-2xl">
                        {meses[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={prevMonth}>
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={nextMonth}>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Cabeçalho dos dias da semana */}
                      <div className="grid grid-cols-7 gap-1 mb-4">
                        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                          <div key={day} className="p-2 text-center font-semibold text-muted-foreground">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Grid do calendário */}
                      <div className="grid grid-cols-7 gap-1">
                        {days.map((day, index) => {
                          const eventosNaData = getEventosParaData(day.date);
                          const isToday = day.date.toDateString() === new Date().toDateString();
                          
                          return (
                            <div
                              key={index}
                              className={`
                                min-h-[80px] p-2 border rounded-lg cursor-pointer transition-all duration-200
                                ${day.isCurrentMonth ? 'hover:bg-muted/50' : 'text-muted-foreground bg-muted/20'}
                                ${isToday ? 'bg-primary/10 border-primary' : 'border-border'}
                                ${selectedDate?.toDateString() === day.date.toDateString() ? 'ring-2 ring-primary' : ''}
                              `}
                              onClick={() => setSelectedDate(day.date)}
                            >
                              <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                                {day.date.getDate()}
                              </div>
                              <div className="space-y-1">
                                {eventosNaData.slice(0, 2).map(evento => (
                                  <div
                                    key={evento.id}
                                    className={`text-xs p-1 rounded text-white ${evento.cor} truncate`}
                                  >
                                    {evento.titulo}
                                  </div>
                                ))}
                                {eventosNaData.length > 2 && (
                                  <div className="text-xs text-muted-foreground">
                                    +{eventosNaData.length - 2} mais
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar com próximos eventos */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Próximos Eventos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {proximosEventos.map(evento => (
                        <div key={evento.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className={`w-3 h-3 rounded-full ${evento.cor} mt-1 flex-shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{evento.titulo}</h4>
                            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                              <Calendar className="w-3 h-3" />
                              {evento.data.toLocaleDateString('pt-BR')}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {evento.horario}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Legenda das categorias */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Categorias</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {categorias.map(categoria => (
                        <div key={categoria.id} className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded ${categoria.cor}`} />
                          <span className="text-sm flex-1">{categoria.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {categoria.count}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Visualização em Lista */
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="space-y-6">
                {proximosEventos.map((evento, index) => (
                  <Card key={evento.id} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-lg ${evento.cor} flex items-center justify-center text-white`}>
                            <div className="text-center">
                              <div className="text-xs font-medium">
                                {meses[evento.data.getMonth()].slice(0, 3)}
                              </div>
                              <div className="text-lg font-bold">
                                {evento.data.getDate()}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{evento.titulo}</h3>
                              <div className="flex gap-2">
                                <Badge variant="outline">
                                  {categorias.find(c => c.id === evento.categoria)?.name}
                                </Badge>
                                {evento.tipo === 'importante' && (
                                  <Badge variant="destructive">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    Importante
                                  </Badge>
                                )}
                                {evento.tipo === 'destaque' && (
                                  <Badge className="bg-gradient-to-r from-primary to-secondary">
                                    <Star className="w-3 h-3 mr-1" />
                                    Destaque
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4">{evento.descricao}</p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{evento.horario}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-secondary" />
                              <span>{evento.local}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-accent" />
                              <span>{evento.participantes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CalendarioEscolar;