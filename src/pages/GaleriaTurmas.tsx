import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Users, Calendar, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GaleriaTurmas = () => {
  const [selectedTurma, setSelectedTurma] = useState('todas');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const turmas = [
    { id: 'todas', name: 'Todas as Turmas', count: 45 },
    { id: 'berçario', name: 'Berçário', count: 8 },
    { id: 'maternal', name: 'Maternal', count: 12 },
    { id: 'jardim1', name: 'Jardim I', count: 15 },
    { id: 'jardim2', name: 'Jardim II', count: 10 }
  ];

  const galeriaItems = [
    {
      id: 1,
      turma: 'berçario',
      titulo: 'Hora do Lanche - Berçário',
      descricao: 'Momento especial da alimentação com carinho e atenção individual',
      data: '2024-01-15',
      local: 'Sala do Berçário',
      imagens: [
        '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png',
        '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
      ]
    },
    {
      id: 2, 
      turma: 'maternal',
      titulo: 'Atividade de Pintura - Maternal',
      descricao: 'Desenvolvimento da criatividade através da arte e expressão',
      data: '2024-01-20',
      local: 'Sala de Atividades',
      imagens: [
        '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png',
        '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png'
      ]
    },
    {
      id: 3,
      turma: 'jardim1', 
      titulo: 'Brincadeiras no Pátio - Jardim I',
      descricao: 'Atividades físicas e recreação ao ar livre para desenvolvimento motor',
      data: '2024-01-25',
      local: 'Pátio Externo',
      imagens: [
        '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png',
        '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png'
      ]
    },
    {
      id: 4,
      turma: 'jardim2',
      titulo: 'Projeto de Leitura - Jardim II',
      descricao: 'Incentivo à leitura e desenvolvimento da linguagem oral',
      data: '2024-02-01',
      local: 'Biblioteca',
      imagens: [
        '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png',
        '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
      ]
    }
  ];

  const filteredItems = selectedTurma === 'todas' 
    ? galeriaItems 
    : galeriaItems.filter(item => item.turma === selectedTurma);

  const nextImage = (itemId: number) => {
    const item = galeriaItems.find(i => i.id === itemId);
    if (item) {
      setCurrentImageIndex((prev) => (prev + 1) % item.imagens.length);
    }
  };

  const prevImage = (itemId: number) => {
    const item = galeriaItems.find(i => i.id === itemId);
    if (item) {
      setCurrentImageIndex((prev) => prev === 0 ? item.imagens.length - 1 : prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Galeria das Turmas
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Acompanhe os momentos especiais de cada turma da nossa escola
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {turmas.map((turma) => (
                <Button
                  key={turma.id}
                  variant={selectedTurma === turma.id ? "default" : "outline"}
                  onClick={() => setSelectedTurma(turma.id)}
                  className="hover-scale"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {turma.name}
                  <Badge variant="secondary" className="ml-2">
                    {turma.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Grid de Galeria */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card key={item.id} className="group hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-0">
                    {/* Carrossel de Imagens */}
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={item.imagens[currentImageIndex % item.imagens.length]}
                        alt={item.titulo}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Controles do Carrossel */}
                      {item.imagens.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(item.id)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => nextImage(item.id)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          
                          {/* Indicadores */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {item.imagens.map((_, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  imgIndex === currentImageIndex % item.imagens.length
                                    ? 'bg-white'
                                    : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {/* Badge da Turma */}
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white">
                        {turmas.find(t => t.id === item.turma)?.name}
                      </Badge>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {item.titulo}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.descricao}
                      </p>
                      
                      {/* Metadados */}
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{new Date(item.data).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span>{item.local}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-2">Nenhuma foto encontrada</h3>
                <p className="text-muted-foreground">
                  Não há fotos disponíveis para esta turma no momento.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GaleriaTurmas;