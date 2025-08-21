import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  Calendar, 
  Download, 
  BookOpen, 
  Users, 
  Clock,
  AlertCircle,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PortalPais = () => {
  const [selectedChild, setSelectedChild] = useState('crianca1');

  const children = [
    { id: 'crianca1', name: 'Ana Silva', turma: 'Jardim II', idade: 5 },
    { id: 'crianca2', name: 'João Silva', turma: 'Maternal', idade: 3 }
  ];

  const noticias = [
    {
      id: 1,
      titulo: 'Volta às Aulas 2024',
      resumo: 'Informações importantes sobre o retorno das atividades escolares.',
      data: '2024-02-01',
      categoria: 'Importante',
      urgente: true
    },
    {
      id: 2,
      titulo: 'Festival de Primavera',
      resumo: 'Convite especial para nosso festival anual com apresentações das crianças.',
      data: '2024-01-28',
      categoria: 'Evento',
      urgente: false
    },
    {
      id: 3,
      titulo: 'Reunião de Pais - Jardim II',
      resumo: 'Discussão sobre o desenvolvimento pedagógico do segundo semestre.',
      data: '2024-01-25',
      categoria: 'Reunião',
      urgente: false
    }
  ];

  const eventos = [
    {
      id: 1,
      titulo: 'Festa Junina',
      data: '2024-06-23',
      horario: '14:00 - 18:00',
      local: 'Pátio da Escola',
      status: 'confirmado'
    },
    {
      id: 2,
      titulo: 'Apresentação Musical',
      data: '2024-05-15',
      horario: '16:00 - 17:00',
      local: 'Auditório',
      status: 'pendente'
    },
    {
      id: 3,
      titulo: 'Reunião de Pais',
      data: '2024-04-20',
      horario: '19:00 - 20:30',
      local: 'Sala de Reuniões',
      status: 'confirmado'
    }
  ];

  const boletins = [
    {
      id: 1,
      periodo: '1º Bimestre 2024',
      data: '2024-04-30',
      status: 'disponivel',
      tamanho: '245 KB'
    },
    {
      id: 2,
      periodo: '4º Bimestre 2023',
      data: '2023-12-15',
      status: 'disponivel',
      tamanho: '238 KB'
    },
    {
      id: 3,
      periodo: '3º Bimestre 2023',
      data: '2023-09-30',
      status: 'disponivel',
      tamanho: '241 KB'
    }
  ];

  const atividades = [
    {
      id: 1,
      nome: 'Coordenação Motora',
      progresso: 85,
      nivel: 'Excelente',
      cor: 'text-green-600'
    },
    {
      id: 2,
      nome: 'Socialização',
      progresso: 75,
      nivel: 'Bom',
      cor: 'text-blue-600'
    },
    {
      id: 3,
      nome: 'Linguagem',
      progresso: 90,
      nivel: 'Excelente',
      cor: 'text-green-600'
    },
    {
      id: 4,
      nome: 'Criatividade',
      progresso: 80,
      nivel: 'Muito Bom',
      cor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Portal dos Pais
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Acompanhe o desenvolvimento do seu filho e fique por dentro das novidades da escola
              </p>
            </div>
          </div>
        </section>

        {/* Seletor de Criança */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {children.map((child) => (
                <Button
                  key={child.id}
                  variant={selectedChild === child.id ? "default" : "outline"}
                  onClick={() => setSelectedChild(child.id)}
                  className="hover-scale"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {child.name} - {child.turma}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="noticias" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="noticias">Notícias</TabsTrigger>
                <TabsTrigger value="calendario">Calendário</TabsTrigger>
                <TabsTrigger value="boletins">Boletins</TabsTrigger>
                <TabsTrigger value="desempenho">Desempenho</TabsTrigger>
              </TabsList>

              {/* Aba Notícias */}
              <TabsContent value="noticias">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Bell className="w-6 h-6 text-primary" />
                      Últimas Notícias
                    </h2>
                    <div className="space-y-4">
                      {noticias.map((noticia, index) => (
                        <Card key={noticia.id} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant={noticia.urgente ? "destructive" : "secondary"}>
                                    {noticia.categoria}
                                  </Badge>
                                  {noticia.urgente && <AlertCircle className="w-4 h-4 text-destructive" />}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{noticia.titulo}</h3>
                                <p className="text-muted-foreground mb-3">{noticia.resumo}</p>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(noticia.data).toLocaleDateString('pt-BR')}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar de Avisos */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Avisos Rápidos</h3>
                    <Card className="mb-4">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Mensalidade em dia</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Próximo vencimento: 05/03</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-yellow-600" />
                          <span className="font-medium">Frequência excelente</span>
                        </div>
                        <p className="text-sm text-muted-foreground">95% no último mês</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Aba Calendário */}
              <TabsContent value="calendario">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Próximos Eventos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventos.map((evento, index) => (
                    <Card key={evento.id} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant={evento.status === 'confirmado' ? 'default' : 'secondary'}>
                            {evento.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{evento.titulo}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(evento.data).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {evento.horario}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {evento.local}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Aba Boletins */}
              <TabsContent value="boletins">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Boletins Escolares
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {boletins.map((boletim, index) => (
                    <Card key={boletim.id} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{boletim.periodo}</h3>
                          <div className="text-sm text-muted-foreground mb-4">
                            <p>Emitido em: {new Date(boletim.data).toLocaleDateString('pt-BR')}</p>
                            <p>Tamanho: {boletim.tamanho}</p>
                          </div>
                          <Button className="w-full hover-scale">
                            <Download className="w-4 h-4 mr-2" />
                            Baixar PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Aba Desempenho */}
              <TabsContent value="desempenho">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Desempenho Acadêmico
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {atividades.map((atividade, index) => (
                    <Card key={atividade.id} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{atividade.nome}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-medium ${atividade.cor}`}>{atividade.nivel}</span>
                          <span className="text-sm text-muted-foreground">{atividade.progresso}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div 
                            className="h-3 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                            style={{ width: `${atividade.progresso}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Resumo Geral */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Resumo do Desenvolvimento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">82%</div>
                        <div className="text-sm text-muted-foreground">Média Geral</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                        <div className="text-sm text-muted-foreground">Frequência</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent mb-2">12</div>
                        <div className="text-sm text-muted-foreground">Atividades Concluídas</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortalPais;