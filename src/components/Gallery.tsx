import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png",
      title: "Fachada da Escola",
      description: "Nossa colorida fachada acolhe as crianças todos os dias",
      tag: "Arquitetura"
    },
    {
      src: "/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png",
      title: "Entrada Principal", 
      description: "Entrada segura e acessível para toda a família",
      tag: "Segurança"
    },
    {
      src: "/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png",
      title: "Área de Recreação",
      description: "Quadra esportiva para atividades físicas e brincadeiras",
      tag: "Esportes"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-accent">Nossa Escola</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Conheça Nossos Espaços
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Instalações pensadas especialmente para o desenvolvimento integral das crianças
            </p>
          </div>

          {/* Grid de imagens melhorado */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {images.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover-lift border-0 shadow-xl bg-gradient-to-b from-card to-card/50 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    {image.tag}
                  </Badge>
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
                
                {/* Card content (always visible) */}
                <div className="p-6 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-secondary/5 transition-colors duration-300">
                  <h3 className="font-bold text-foreground mb-2 text-lg">{image.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Seção de destaques melhorada */}
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ambiente Preparado com Carinho
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Cada espaço da nossa escola foi pensado para estimular o desenvolvimento infantil. 
                Cores alegres, ambientes seguros e áreas de recreação que proporcionam experiências 
                ricas em aprendizado e diversão.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <span className="text-white font-bold text-2xl">🏠</span>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Instalações Seguras</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ambientes adequados e certificados para cada faixa etária, com total segurança
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <span className="text-white font-bold text-2xl">🎨</span>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Espaços Criativos</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Áreas dedicadas para arte, música e expressão, estimulando a criatividade
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <span className="text-white font-bold text-2xl">⚽</span>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Área de Recreação</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Quadra e espaços amplos para atividades físicas e desenvolvimento motor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;