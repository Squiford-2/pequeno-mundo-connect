import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  User, 
  Eye, 
  Search, 
  Filter,
  TrendingUp,
  Heart,
  Share2,
  BookOpen,
  Tag
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NoticiasBlog = () => {
  const [selectedCategoria, setSelectedCategoria] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const categorias = [
    { id: 'todas', name: 'Todas', count: 12 },
    { id: 'educacao', name: 'Educação', count: 4 },
    { id: 'atividades', name: 'Atividades', count: 3 },
    { id: 'saude', name: 'Saúde', count: 2 },
    { id: 'familia', name: 'Família', count: 2 },
    { id: 'noticias', name: 'Notícias', count: 1 }
  ];

  const noticias = [
    {
      id: 1,
      titulo: 'A Importância do Brincar no Desenvolvimento Infantil',
      resumo: 'Descubra como as brincadeiras contribuem para o desenvolvimento cognitivo, social e emocional das crianças.',
      categoria: 'educacao',
      autor: 'Profª. Maria Silva',
      data: '2024-02-01',
      visualizacoes: 245,
      curtidas: 18,
      destaque: true,
      tempoLeitura: 5,
      imagem: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png',
      tags: ['desenvolvimento', 'brincadeiras', 'cognição']
    },
    {
      id: 2,
      titulo: 'Festa Junina 2024: Um Sucesso Absoluto!',
      resumo: 'Relembre os melhores momentos da nossa festa junina com mais de 200 participantes e muita diversão.',
      categoria: 'noticias',
      autor: 'Direção',
      data: '2024-01-28',
      visualizacoes: 189,
      curtidas: 25,
      destaque: false,
      tempoLeitura: 3,
      imagem: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png',
      tags: ['festa', 'comunidade', 'tradição']
    },
    {
      id: 3,
      titulo: 'Alimentação Saudável na Primeira Infância',
      resumo: 'Dicas importantes sobre nutrição e como estabelecer hábitos alimentares saudáveis desde cedo.',
      categoria: 'saude',
      autor: 'Nutricionista Ana Costa',
      data: '2024-01-25',
      visualizacoes: 156,
      curtidas: 12,
      destaque: true,
      tempoLeitura: 7,
      imagem: '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png',
      tags: ['nutrição', 'saúde', 'hábitos']
    },
    {
      id: 4,
      titulo: 'Atividades de Arte Estimulam a Criatividade',
      resumo: 'Como as atividades artísticas contribuem para o desenvolvimento da expressão e criatividade infantil.',
      categoria: 'atividades',
      autor: 'Profª. Carla Pereira',
      data: '2024-01-22',
      visualizacoes: 134,
      curtidas: 15,
      destaque: false,
      tempoLeitura: 4,
      imagem: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png',
      tags: ['arte', 'criatividade', 'expressão']
    },
    {
      id: 5,
      titulo: 'Como Preparar seu Filho para a Escola',
      resumo: 'Orientações para pais sobre como tornar a transição para a vida escolar mais suave e natural.',
      categoria: 'familia',
      autor: 'Psicóloga Laura Santos',
      data: '2024-01-20',
      visualizacoes: 201,
      curtidas: 22,
      destaque: true,
      tempoLeitura: 6,
      imagem: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png',
      tags: ['adaptação', 'pais', 'escola']
    },
    {
      id: 6,
      titulo: 'Projeto de Leitura Desperta Amor pelos Livros',
      resumo: 'Conheça nosso projeto de incentivo à leitura e como ele tem transformado a relação das crianças com os livros.',
      categoria: 'educacao',
      autor: 'Profª. Fernanda Lima',
      data: '2024-01-18',
      visualizacoes: 178,
      curtidas: 19,
      destaque: false,
      tempoLeitura: 5,
      imagem: '/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png',
      tags: ['leitura', 'literatura', 'educação']
    },
    {
      id: 7,
      titulo: 'Música na Educação Infantil: Benefícios e Práticas',
      resumo: 'Descubra como a música contribui para o desenvolvimento integral das crianças em nossa escola.',
      categoria: 'atividades',
      autor: 'Prof. Ricardo Alves',
      data: '2024-01-15',
      visualizacoes: 143,
      curtidas: 14,
      destaque: false,
      tempoLeitura: 4,
      imagem: '/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png',
      tags: ['música', 'desenvolvimento', 'educação']
    },
    {
      id: 8,
      titulo: 'Dicas para Fortalecer o Vínculo Família-Escola',
      resumo: 'Estratégias práticas para uma parceria efetiva entre família e escola no desenvolvimento da criança.',
      categoria: 'familia',
      autor: 'Coordenação Pedagógica',
      data: '2024-01-12',
      visualizacoes: 167,
      curtidas: 21,
      destaque: false,
      tempoLeitura: 6,
      imagem: '/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png',
      tags: ['parceria', 'família', 'escola']
    }
  ];

  const filteredNoticias = noticias.filter(noticia => {
    const matchCategoria = selectedCategoria === 'todas' || noticia.categoria === selectedCategoria;
    const matchSearch = noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       noticia.resumo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       noticia.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategoria && matchSearch;
  });

  const noticiasDestaque = noticias.filter(noticia => noticia.destaque).slice(0, 3);
  const totalVisualizacoes = noticias.reduce((sum, noticia) => sum + noticia.visualizacoes, 0);
  const totalCurtidas = noticias.reduce((sum, noticia) => sum + noticia.curtidas, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Blog & Notícias
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Artigos educativos, novidades da escola e dicas para famílias
              </p>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover-scale">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary mb-1">{noticias.length}</div>
                <div className="text-sm text-muted-foreground">Artigos</div>
              </Card>
              <Card className="text-center p-6 hover-scale">
                <Eye className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <div className="text-2xl font-bold text-secondary mb-1">{totalVisualizacoes}</div>
                <div className="text-sm text-muted-foreground">Visualizações</div>
              </Card>
              <Card className="text-center p-6 hover-scale">
                <Heart className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold text-accent mb-1">{totalCurtidas}</div>
                <div className="text-sm text-muted-foreground">Curtidas</div>
              </Card>
              <Card className="text-center p-6 hover-scale">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-brand-purple" />
                <div className="text-2xl font-bold text-brand-purple mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Engajamento</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Filtros e Busca */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {/* Busca */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filtros por categoria */}
              <div className="flex flex-wrap gap-2">
                {categorias.map((categoria) => (
                  <Button
                    key={categoria.id}
                    variant={selectedCategoria === categoria.id ? "default" : "outline"}
                    onClick={() => setSelectedCategoria(categoria.id)}
                    size="sm"
                    className="hover-scale"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {categoria.name}
                    <Badge variant="secondary" className="ml-2">
                      {categoria.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notícias em Destaque */}
        {selectedCategoria === 'todas' && searchTerm === '' && (
          <section className="py-12 bg-muted/20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Artigos em Destaque</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {noticiasDestaque.map((noticia, index) => (
                  <Card key={noticia.id} className="group hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={noticia.imagem}
                          alt={noticia.titulo}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white">
                          ⭐ Destaque
                        </Badge>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">
                            {categorias.find(c => c.id === noticia.categoria)?.name}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {noticia.tempoLeitura} min de leitura
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{noticia.titulo}</h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{noticia.resumo}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {noticia.visualizacoes}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {noticia.curtidas}
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="p-0 h-auto">
                            Ler mais →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lista de Notícias */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Artigos principais */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {filteredNoticias.map((noticia, index) => (
                    <Card key={noticia.id} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-0">
                        <div className="md:flex gap-6">
                          <div className="md:w-1/3">
                            <div className="relative h-48 md:h-full overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                              <img
                                src={noticia.imagem}
                                alt={noticia.titulo}
                                className="w-full h-full object-cover"
                              />
                              {noticia.destaque && (
                                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white">
                                  ⭐ Destaque
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline">
                                {categorias.find(c => c.id === noticia.categoria)?.name}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {noticia.tempoLeitura} min de leitura
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-2">{noticia.titulo}</h3>
                            <p className="text-muted-foreground mb-4">{noticia.resumo}</p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {noticia.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  <Tag className="w-3 h-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* Metadados */}
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {noticia.autor}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(noticia.data).toLocaleDateString('pt-BR')}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {noticia.visualizacoes}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  {noticia.curtidas}
                                </div>
                                <Button size="sm" variant="ghost" className="p-1">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredNoticias.length === 0 && (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                    <p className="text-muted-foreground">
                      Não há artigos disponíveis para os filtros selecionados.
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categorias mais populares */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categorias</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categorias.filter(c => c.id !== 'todas').map(categoria => (
                      <div key={categoria.id} className="flex items-center justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCategoria(categoria.id)}
                          className="justify-start p-0 h-auto font-normal"
                        >
                          {categoria.name}
                        </Button>
                        <Badge variant="secondary">{categoria.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Artigos mais lidos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mais Lidos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {noticias
                      .sort((a, b) => b.visualizacoes - a.visualizacoes)
                      .slice(0, 5)
                      .map(noticia => (
                        <div key={noticia.id} className="flex gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer">
                          <img
                            src={noticia.imagem}
                            alt={noticia.titulo}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm line-clamp-2 mb-1">{noticia.titulo}</h4>
                            <div className="text-xs text-muted-foreground flex items-center gap-2">
                              <Eye className="w-3 h-3" />
                              {noticia.visualizacoes}
                              <Calendar className="w-3 h-3 ml-2" />
                              {new Date(noticia.data).toLocaleDateString('pt-BR')}
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Receba nossas novidades</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Cadastre-se para receber nossos artigos por email
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Seu e-mail" />
                      <Button className="w-full">Inscrever-se</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NoticiasBlog;