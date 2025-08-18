import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Baby, 
  GraduationCap, 
  Palette, 
  Music, 
  BookOpen, 
  Users, 
  Clock, 
  Shield 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Creche (0-3 anos)",
      description: "Cuidado especializado para bebês e crianças pequenas com atenção individual",
      features: ["Berçário seguro", "Alimentação adequada", "Higiene completa", "Desenvolvimento motor"]
    },
    {
      icon: GraduationCap,
      title: "Pré-escola (4-5 anos)",
      description: "Preparação para o ensino fundamental com metodologia lúdica",
      features: ["Alfabetização", "Matemática básica", "Coordenação motora", "Socialização"]
    },
    {
      icon: Palette,
      title: "Atividades Artísticas",
      description: "Desenvolvimento da criatividade através de arte e expressão",
      features: ["Pintura", "Desenho", "Modelagem", "Teatro infantil"]
    },
    {
      icon: Music,
      title: "Educação Musical",
      description: "Estímulo musical para desenvolvimento cognitivo e sensorial",
      features: ["Canto", "Instrumentos", "Ritmo", "Expressão corporal"]
    },
    {
      icon: BookOpen,
      title: "Contação de Histórias",
      description: "Incentivo à leitura e imaginação através de narrativas",
      features: ["Literatura infantil", "Fantoche", "Dramatização", "Vocabulário"]
    },
    {
      icon: Users,
      title: "Socialização",
      description: "Desenvolvimento de habilidades sociais e trabalho em equipe",
      features: ["Brincadeiras grupais", "Partilha", "Respeito", "Amizade"]
    }
  ];

  const differentials = [
    {
      icon: Clock,
      title: "Horário Flexível",
      description: "Horários que se adaptam às necessidades das famílias"
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Instalações seguras e monitoradas para tranquilidade dos pais"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atividades e cuidados especializados para cada fase do desenvolvimento infantil
            </p>
          </div>

          {/* Grid de serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mb-4 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Diferenciais */}
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Nossos Diferenciais
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;