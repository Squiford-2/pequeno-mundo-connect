import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users, Trophy } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "22 Anos",
      description: "De experiência em educação infantil"
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Ambiente acolhedor e seguro"
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais qualificados"
    },
    {
      icon: Trophy,
      title: "Qualidade",
      description: "Educação de excelência"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nossa História
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Há mais de duas décadas dedicados ao desenvolvimento integral das crianças
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Texto sobre a escola */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Escola de Educação Infantil Pequeno Mundo
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fundada em <strong className="text-primary">23 de outubro de 1996</strong>, 
                  a Escola Pequeno Mundo nasceu com o sonho de oferecer uma educação 
                  infantil de qualidade, onde cada criança é única e especial.
                </p>
                
                <p>
                  Nossa missão é proporcionar um ambiente seguro, acolhedor e estimulante, 
                  onde as crianças possam explorar, descobrir e desenvolver suas 
                  habilidades de forma natural e prazerosa.
                </p>
                
                <p>
                  Atendemos crianças em duas modalidades: <strong className="text-secondary">creche</strong> e 
                  <strong className="text-accent"> pré-escola</strong>, sempre com uma 
                  abordagem pedagógica que respeita o ritmo e as necessidades individuais 
                  de cada aluno.
                </p>
              </div>

              {/* Informações institucionais */}
              <div className="mt-8 p-6 bg-card rounded-lg border">
                <h4 className="font-semibold mb-4 text-foreground">Informações Institucionais</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">CNPJ:</strong>
                    <br />01.494.156/0001-39
                  </div>
                  <div>
                    <strong className="text-foreground">Fundação:</strong>
                    <br />23 de outubro de 1996
                  </div>
                  <div>
                    <strong className="text-foreground">Localização:</strong>
                    <br />Centro de Esteio/RS
                  </div>
                  <div>
                    <strong className="text-foreground">Modalidades:</strong>
                    <br />Creche e Pré-escola
                  </div>
                </div>
              </div>
            </div>

            {/* Foto da escola */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png" 
                  alt="Fachada da Escola Pequeno Mundo" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Nossa escola no coração de Esteio/RS
              </p>
            </div>
          </div>

          {/* Conquistas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;