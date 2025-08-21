import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Target, Image } from 'lucide-react';

const projetos = [
  {
    titulo: "Horta na Escola",
    descricao: "Projeto de sustentabilidade onde as crianças aprendem sobre plantas, meio ambiente e alimentação saudável cultivando uma horta orgânica.",
    faixaEtaria: "3-5 anos",
    duracao: "Ano letivo completo",
    objetivos: [
      "Consciência ambiental",
      "Alimentação saudável", 
      "Responsabilidade",
      "Ciências naturais"
    ],
    imagem: "/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png",
    ativo: true
  },
  {
    titulo: "Pequenos Cientistas",
    descricao: "Experimentos e descobertas científicas adaptadas para a educação infantil, estimulando a curiosidade e o pensamento científico.",
    faixaEtaria: "4-5 anos",
    duracao: "Semestral",
    objetivos: [
      "Curiosidade científica",
      "Observação",
      "Hipóteses",
      "Experimentação"
    ],
    imagem: "/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png",
    ativo: true
  },
  {
    titulo: "Arte e Movimento",
    descricao: "Integração entre expressão artística e desenvolvimento motor através de dança, pintura, música e teatro infantil.",
    faixaEtaria: "2-5 anos",
    duracao: "Ano letivo completo",
    objetivos: [
      "Expressão artística",
      "Coordenação motora",
      "Criatividade",
      "Socialização"
    ],
    imagem: "/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png",
    ativo: true
  },
  {
    titulo: "Contação de Histórias",
    descricao: "Projeto literário que desenvolve o gosto pela leitura através de histórias interativas, dramatização e criação de narrativas.",
    faixaEtaria: "3-5 anos",
    duracao: "Ano letivo completo",
    objetivos: [
      "Linguagem oral",
      "Imaginação",
      "Concentração",
      "Valores morais"
    ],
    imagem: "/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png",
    ativo: true
  },
  {
    titulo: "Culinária Infantil",
    descricao: "Atividades culinárias educativas que ensinam sobre ingredientes, medidas, texturas e sabores de forma divertida e segura.",
    faixaEtaria: "3-5 anos",
    duracao: "Mensal",
    objetivos: [
      "Matemática básica",
      "Coordenação motora",
      "Autonomia",
      "Alimentação saudável"
    ],
    imagem: "/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png",
    ativo: false
  },
  {
    titulo: "Família na Escola",
    descricao: "Projeto que convida familiares para compartilhar profissões, talentos e culturas, fortalecendo a parceria família-escola.",
    faixaEtaria: "2-5 anos",
    duracao: "Bimestral",
    objetivos: [
      "Vínculo familiar",
      "Diversidade cultural",
      "Profissões",
      "Comunidade"
    ],
    imagem: "/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png",
    ativo: false
  }
];

const Projetos = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Projetos Pedagógicos
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça nossos projetos especiais que enriquecem o aprendizado e desenvolvimento das crianças
            </p>
          </div>
        </div>
      </section>

      {/* Projetos Ativos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Projetos em Andamento</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Projetos atualmente desenvolvidos com as turmas da Pequeno Mundo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projetos.filter(projeto => projeto.ativo).map((projeto, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                        <img 
                          src={projeto.imagem} 
                          alt={projeto.titulo}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{projeto.titulo}</h3>
                          <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Ativo
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {projeto.descricao}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Faixa etária: {projeto.faixaEtaria}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>Duração: {projeto.duracao}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                          <Target className="h-4 w-4 text-primary" />
                          Objetivos:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {projeto.objetivos.map((objetivo, objIndex) => (
                            <Badge key={objIndex} variant="outline" className="text-xs">
                              {objetivo}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projetos Futuros */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Próximos Projetos</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Projetos que serão implementados nos próximos períodos letivos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projetos.filter(projeto => !projeto.ativo).map((projeto, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 opacity-75 hover:opacity-100">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center overflow-hidden">
                        <img 
                          src={projeto.imagem} 
                          alt={projeto.titulo}
                          className="w-20 h-20 rounded-lg object-cover grayscale"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{projeto.titulo}</h3>
                          <Badge variant="secondary">
                            Em breve
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {projeto.descricao}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Faixa etária: {projeto.faixaEtaria}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>Duração: {projeto.duracao}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                          <Target className="h-4 w-4 text-primary" />
                          Objetivos:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {projeto.objetivos.map((objetivo, objIndex) => (
                            <Badge key={objIndex} variant="outline" className="text-xs">
                              {objetivo}
                            </Badge>
                          ))}
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

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Image className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Acompanhe os Projetos
              </h3>
              <p className="text-muted-foreground mb-6">
                Participe ativamente do desenvolvimento do seu filho! Receba fotos, vídeos e relatórios de todos os projetos.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Agendar Visita
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Projetos;