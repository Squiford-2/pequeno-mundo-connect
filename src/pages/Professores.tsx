import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Star, Users } from 'lucide-react';

const professores = [
  {
    nome: "Ana Carolina Silva",
    cargo: "Diretora Pedagógica",
    especializacao: "Pedagogia com especialização em Educação Infantil",
    experiencia: "15 anos",
    descricao: "Apaixonada por educação infantil, sempre busca inovações pedagógicas para o desenvolvimento integral das crianças.",
    foto: "/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png"
  },
  {
    nome: "Maria Santos",
    cargo: "Professora do Maternal",
    especializacao: "Pedagogia com foco em Desenvolvimento Infantil",
    experiencia: "8 anos",
    descricao: "Especialista em cuidados com bebês e crianças pequenas, criando um ambiente acolhedor e estimulante.",
    foto: "/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png"
  },
  {
    nome: "Juliana Costa",
    cargo: "Professora da Pré-escola",
    especializacao: "Pedagogia com especialização em Alfabetização",
    experiencia: "10 anos",
    descricao: "Focada na preparação das crianças para o ensino fundamental através de metodologias lúdicas.",
    foto: "/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png"
  },
  {
    nome: "Roberto Oliveira",
    cargo: "Professor de Educação Física",
    especializacao: "Educação Física com foco em Desenvolvimento Motor",
    experiencia: "6 anos",
    descricao: "Desenvolve atividades físicas adaptadas para cada faixa etária, promovendo saúde e coordenação motora.",
    foto: "/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png"
  }
];

const Professores = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Nossa Equipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça os profissionais dedicados que cuidam e educam suas crianças com amor e expertise
            </p>
          </div>
        </div>
      </section>

      {/* Professores Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {professores.map((professor, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                        <img 
                          src={professor.foto} 
                          alt={professor.nome}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{professor.nome}</h3>
                        <Badge variant="secondary" className="mb-2">
                          {professor.cargo}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span>{professor.especializacao}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-primary" />
                          <span>{professor.experiencia} de experiência</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {professor.descricao}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores da Equipe */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe é guiada por valores fundamentais que garantem o melhor cuidado e educação para as crianças
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Amor e Cuidado</h3>
              <p className="text-muted-foreground">
                Cada criança é tratada com carinho e atenção individualizada
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Excelência Educacional</h3>
              <p className="text-muted-foreground">
                Metodologias modernas e atualizadas para o melhor desenvolvimento
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Trabalho em Equipe</h3>
              <p className="text-muted-foreground">
                Colaboração entre família e escola para o sucesso da criança
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professores;