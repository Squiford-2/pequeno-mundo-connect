import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, Heart, Users, Calendar, ThumbsUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Depoimentos = () => {
  const [selectedCategoria, setSelectedCategoria] = useState('todos');

  const categorias = [
    { id: 'todos', name: 'Todos', count: 15 },
    { id: 'pais', name: 'Pais', count: 8 },
    { id: 'ex-alunos', name: 'Ex-Alunos', count: 4 },
    { id: 'comunidade', name: 'Comunidade', count: 3 }
  ];

  const depoimentos = [
    {
      id: 1,
      nome: 'Maria Santos',
      categoria: 'pais',
      relacao: 'Mãe da Sofia (Jardim II)',
      data: '2024-01-15',
      avaliacao: 5,
      texto: 'A Pequeno Mundo transformou completamente a vida da minha filha. Ela chegou aqui tímida e hoje é uma criança confiante, criativa e feliz. A equipe é excepcional e o cuidado com cada detalhe é impressionante. Recomendo de olhos fechados!',
      destaque: true,
      foto: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png'
    },
    {
      id: 2,
      nome: 'João Silva',
      categoria: 'pais',
      relacao: 'Pai do Lucas (Maternal)',
      data: '2024-01-10',
      avaliacao: 5,
      texto: 'Escolher a Pequeno Mundo foi a melhor decisão que tomamos. O Lucas adora ir para a escola e sempre chega em casa contando as novidades. O desenvolvimento dele tem sido incrível, tanto no aspecto social quanto educacional.',
      destaque: false,
      foto: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
    },
    {
      id: 3,
      nome: 'Ana Oliveira',
      categoria: 'ex-alunos',
      relacao: 'Ex-aluna (Formada em 2020)',
      data: '2023-12-20',
      avaliacao: 5,
      texto: 'Estudei na Pequeno Mundo dos 2 aos 5 anos e tenho as melhores lembranças! As professoras eram carinhosas e sempre me incentivaram a ser curiosa e criativa. Hoje sou uma jovem confiante e sei que muito do que sou devo aos anos na escola.',
      destaque: true,
      foto: '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png'
    },
    {
      id: 4,
      nome: 'Roberto Lima',
      categoria: 'pais',
      relacao: 'Pai da Beatriz (Jardim I)',
      data: '2023-12-15',
      avaliacao: 5,
      texto: 'A Pequeno Mundo não é apenas uma escola, é uma família. Minha filha se desenvolveu muito aqui, tanto academicamente quanto emocionalmente. A comunicação com os pais é excelente e sempre sabemos como ela está progredindo.',
      destaque: false,
      foto: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png'
    },
    {
      id: 5,
      nome: 'Carla Rodrigues',
      categoria: 'comunidade',
      relacao: 'Vizinha da escola',
      data: '2023-11-30',
      avaliacao: 4,
      texto: 'Moro ao lado da escola há anos e sempre admirei o trabalho desenvolvido aqui. As crianças são sempre bem cuidadas, felizes e educadas. É uma honra ter uma instituição tão respeitável em nosso bairro.',
      destaque: false,
      foto: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
    },
    {
      id: 6,
      nome: 'Fernanda Costa',
      categoria: 'pais',
      relacao: 'Mãe do Pedro (Berçário)',
      data: '2023-11-25',
      avaliacao: 5,
      texto: 'Confiar meu bebê aos cuidados da Pequeno Mundo foi um desafio, mas desde o primeiro dia me senti segura. O carinho, a atenção e o profissionalismo da equipe são exemplares. Pedro adora estar aqui!',
      destaque: true,
      foto: '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png'
    },
    {
      id: 7,
      nome: 'Marcos Almeida',
      categoria: 'ex-alunos',
      relacao: 'Ex-aluno (Formado em 2018)',
      data: '2023-11-20',
      avaliacao: 5,
      texto: 'Mesmo depois de tantos anos, ainda tenho carinho especial pela Pequeno Mundo. Foi aqui que aprendi valores importantes como respeito, amizade e curiosidade. Hoje estou no ensino médio e sempre lembro das lições aprendidas aqui.',
      destaque: false,
      foto: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png'
    },
    {
      id: 8,
      nome: 'Juliana Pereira',
      categoria: 'pais',
      relacao: 'Mãe da Isadora (Jardim II)',
      data: '2023-11-15',
      avaliacao: 5,
      texto: 'A Pequeno Mundo superou todas as minhas expectativas. Isadora não apenas aprendeu conteúdos acadêmicos, mas desenvolveu habilidades sociais incríveis. Ela é mais independente, comunicativa e confiante.',
      destaque: false,
      foto: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png'
    }
  ];

  const filteredDepoimentos = selectedCategoria === 'todos' 
    ? depoimentos 
    : depoimentos.filter(dep => dep.categoria === selectedCategoria);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const stats = {
    total: depoimentos.length,
    mediaAvaliacao: depoimentos.reduce((sum, dep) => sum + dep.avaliacao, 0) / depoimentos.length,
    recomendacao: 100,
    anosExperiencia: 28
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
                Depoimentos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça as experiências de famílias que confiaram na Pequeno Mundo
              </p>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover-scale">
                <Heart className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary mb-1">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Depoimentos</div>
              </Card>
              <Card className="text-center p-6 hover-scale">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
                <div className="text-2xl font-bold text-yellow-600 mb-1">{stats.mediaAvaliacao.toFixed(1)}</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </Card>
              <Card className="text-center p-6 hover-scale">
                <ThumbsUp className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <div className="text-2xl font-bold text-secondary mb-1">{stats.recomendacao}%</div>
                <div className="text-sm text-muted-foreground">Recomendação</div>
              </Card>
              <Card className="text-center p-6 hover-scale">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold text-accent mb-1">{stats.anosExperiencia}</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categorias.map((categoria) => (
                <Button
                  key={categoria.id}
                  variant={selectedCategoria === categoria.id ? "default" : "outline"}
                  onClick={() => setSelectedCategoria(categoria.id)}
                  className="hover-scale"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {categoria.name}
                  <Badge variant="secondary" className="ml-2">
                    {categoria.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Grid de Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDepoimentos.map((depoimento, index) => (
                <Card 
                  key={depoimento.id} 
                  className={`group hover-lift animate-fade-in ${depoimento.destaque ? 'border-primary/50 shadow-lg' : ''}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6">
                    {/* Header do Depoimento */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={depoimento.foto}
                          alt={depoimento.nome}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                        />
                        {depoimento.destaque && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{depoimento.nome}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{depoimento.relacao}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {renderStars(depoimento.avaliacao)}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {categorias.find(c => c.id === depoimento.categoria)?.name}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Citação */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                      <p className="text-muted-foreground leading-relaxed italic pl-4">
                        "{depoimento.texto}"
                      </p>
                    </div>

                    {/* Data */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(depoimento.data).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredDepoimentos.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">Nenhum depoimento encontrado</h3>
                <p className="text-muted-foreground">
                  Não há depoimentos disponíveis para esta categoria.
                </p>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">Compartilhe sua experiência</h3>
                  <p className="text-muted-foreground mb-6">
                    Sua opinião é muito importante para nós e ajuda outras famílias a conhecerem nosso trabalho.
                  </p>
                  <Button size="lg" className="hover-scale">
                    <Heart className="w-5 h-5 mr-2" />
                    Deixar Depoimento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Depoimentos;