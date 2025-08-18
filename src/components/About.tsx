import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Heart, Users, Trophy, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "22 Anos",
      description: "De experiência em educação infantil",
      color: "from-primary to-secondary"
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Ambiente acolhedor e seguro",
      color: "from-secondary to-accent"
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais qualificados",
      color: "from-accent to-primary"
    },
    {
      icon: Trophy,
      title: "Qualidade",
      description: "Educação de excelência",
      color: "from-primary via-secondary to-accent"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">Nossa História</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                22 Anos Transformando Vidas
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Há mais de duas décadas dedicados ao desenvolvimento integral das crianças
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Texto sobre a escola */}
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold mb-8 text-foreground">
                Escola de Educação Infantil 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pequeno Mundo
                </span>
              </h3>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Fundada em <strong className="text-primary font-semibold">23 de outubro de 1996</strong>, 
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
              <div className="mt-10 p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-primary/10 shadow-lg">
                <h4 className="font-bold text-xl mb-6 text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Informações Institucionais
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground block">CNPJ:</strong>
                      <span className="text-muted-foreground">01.494.156/0001-39</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground block">Fundação:</strong>
                      <span className="text-muted-foreground">23 de outubro de 1996</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground block">Localização:</strong>
                      <span className="text-muted-foreground">Centro de Esteio/RS</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-foreground block">Modalidades:</strong>
                      <span className="text-muted-foreground">Creche e Pré-escola</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foto da escola */}
            <div className="animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 group-hover:border-primary/30 transition-colors duration-500">
                  <img 
                    src="/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png" 
                    alt="Fachada da Escola Pequeno Mundo" 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6 font-medium">
                Nossa escola no coração de Esteio/RS
              </p>
            </div>
          </div>

          {/* Conquistas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="group text-center border-0 shadow-xl bg-gradient-to-b from-card to-card/50 hover-lift animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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