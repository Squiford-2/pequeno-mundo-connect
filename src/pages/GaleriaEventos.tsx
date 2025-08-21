import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Camera, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GaleriaEventos = () => {
  const [selectedCategoria, setSelectedCategoria] = useState('todos');
  const [selectedAno, setSelectedAno] = useState('2024');

  const categorias = [
    { id: 'todos', name: 'Todos os Eventos', icon: Camera },
    { id: 'festas', name: 'Festas', icon: Users },
    { id: 'apresentacoes', name: 'Apresentações', icon: Play },
    { id: 'passeios', name: 'Passeios', icon: MapPin },
    { id: 'formaturas', name: 'Formaturas', icon: Calendar }
  ];

  const anos = ['2024', '2023', '2022'];

  const eventos = [
    {
      id: 1,
      titulo: 'Festa Junina 2024',
      categoria: 'festas',
      ano: '2024',
      data: '2024-06-23',
      local: 'Pátio da Escola',
      participantes: 150,
      descricao: 'Uma festa repleta de tradição, danças típicas, comidas deliciosas e muita diversão para toda a família.',
      fotos: 24,
      videos: 3,
      destaque: true,
      imagem: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png'
    },
    {
      id: 2,
      titulo: 'Apresentação de Natal',
      categoria: 'apresentacoes',
      ano: '2023',
      data: '2023-12-15',
      local: 'Auditório Municipal',
      participantes: 80,
      descricao: 'Espetáculo natalino com músicas, danças e muito talento das nossas crianças.',
      fotos: 18,
      videos: 2,
      destaque: false,
      imagem: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
    },
    {
      id: 3,
      titulo: 'Passeio ao Zoológico',
      categoria: 'passeios',
      ano: '2024',
      data: '2024-04-12',
      local: 'Zoológico de Sapucaia',
      participantes: 45,
      descricao: 'Experiência educativa e divertida conhecendo diferentes espécies de animais.',
      fotos: 32,
      videos: 4,
      destaque: true,
      imagem: '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png'
    },
    {
      id: 4,
      titulo: 'Formatura Jardim II',
      categoria: 'formaturas',
      ano: '2023',
      data: '2023-12-20',
      local: 'Salão de Eventos',
      participantes: 25,
      descricao: 'Cerimônia emocionante de formatura dos pequenos que se preparam para o ensino fundamental.',
      fotos: 45,
      videos: 5,
      destaque: true,
      imagem: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png'
    },
    {
      id: 5,
      titulo: 'Dia das Mães',
      categoria: 'festas',
      ano: '2024',
      data: '2024-05-10',
      local: 'Pátio da Escola',
      participantes: 120,
      descricao: 'Homenagem especial às mamães com apresentações carinhosas e lembranças feitas pelas crianças.',
      fotos: 28,
      videos: 2,
      destaque: false,
      imagem: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
    }
  ];

  const filteredEventos = eventos.filter(evento => {
    const matchCategoria = selectedCategoria === 'todos' || evento.categoria === selectedCategoria;
    const matchAno = evento.ano === selectedAno;
    return matchCategoria && matchAno;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Galeria de Eventos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Reviva os momentos especiais e celebrações da nossa escola
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filtro por Categoria */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center">Filtrar por Categoria</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {categorias.map((categoria) => {
                  const IconComponent = categoria.icon;
                  return (
                    <Button
                      key={categoria.id}
                      variant={selectedCategoria === categoria.id ? "default" : "outline"}
                      onClick={() => setSelectedCategoria(categoria.id)}
                      className="hover-scale"
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {categoria.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Filtro por Ano */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-center">Filtrar por Ano</h3>
              <div className="flex gap-4 justify-center">
                {anos.map((ano) => (
                  <Button
                    key={ano}
                    variant={selectedAno === ano ? "default" : "outline"}
                    onClick={() => setSelectedAno(ano)}
                    className="hover-scale"
                  >
                    {ano}
                  </Button>
                ))}
              </div>
            </div>

            {/* Grid de Eventos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEventos.map((evento, index) => (
                <Card 
                  key={evento.id} 
                  className={`group hover-lift animate-fade-in ${evento.destaque ? 'border-primary/50 shadow-lg' : ''}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-0">
                    {/* Imagem do Evento */}
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={evento.imagem}
                        alt={evento.titulo}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Badge de Destaque */}
                      {evento.destaque && (
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white">
                          ⭐ Destaque
                        </Badge>
                      )}

                      {/* Stats de Mídia */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Badge variant="secondary" className="bg-black/70 text-white">
                          <Camera className="w-3 h-3 mr-1" />
                          {evento.fotos}
                        </Badge>
                        <Badge variant="secondary" className="bg-black/70 text-white">
                          <Play className="w-3 h-3 mr-1" />
                          {evento.videos}
                        </Badge>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">
                          {categorias.find(c => c.id === evento.categoria)?.name}
                        </Badge>
                        <Badge variant="secondary">
                          {evento.ano}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {evento.titulo}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {evento.descricao}
                      </p>
                      
                      {/* Metadados */}
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{new Date(evento.data).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span>{evento.local}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          <span>{evento.participantes} participantes</span>
                        </div>
                      </div>

                      {/* Botão Ver Galeria */}
                      <Button className="w-full mt-4 hover-scale" variant="outline">
                        <Camera className="w-4 h-4 mr-2" />
                        Ver Galeria Completa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEventos.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold mb-2">Nenhum evento encontrado</h3>
                <p className="text-muted-foreground">
                  Não há eventos disponíveis para os filtros selecionados.
                </p>
              </div>
            )}

            {/* Estatísticas */}
            {filteredEventos.length > 0 && (
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="text-center p-6 hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {filteredEventos.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Eventos</div>
                </Card>
                <Card className="text-center p-6 hover-scale">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {filteredEventos.reduce((sum, e) => sum + e.fotos, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Fotos</div>
                </Card>
                <Card className="text-center p-6 hover-scale">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {filteredEventos.reduce((sum, e) => sum + e.videos, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Vídeos</div>
                </Card>
                <Card className="text-center p-6 hover-scale">
                  <div className="text-3xl font-bold text-brand-purple mb-2">
                    {filteredEventos.reduce((sum, e) => sum + e.participantes, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Participantes</div>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GaleriaEventos;