import { Card } from '@/components/ui/card';

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/3f1e42d4-e8ef-4b62-b579-fbbc562631dd.png",
      title: "Fachada da Escola",
      description: "Nossa colorida fachada acolhe as crianças todos os dias"
    },
    {
      src: "/lovable-uploads/5460ff09-e0c4-40bf-ae63-be1daabfc82d.png",
      title: "Entrada Principal", 
      description: "Entrada segura e acessível para toda a família"
    },
    {
      src: "/lovable-uploads/66839e2b-14f9-4ea6-9446-f87fa9e967df.png",
      title: "Área de Recreação",
      description: "Quadra esportiva para atividades físicas e brincadeiras"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Nossa Escola
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as instalações onde seu filho irá crescer e aprender
            </p>
          </div>

          {/* Grid de imagens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Informação adicional */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ambiente Preparado com Carinho
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Cada espaço da nossa escola foi pensado para estimular o desenvolvimento infantil. 
                Cores alegres, ambientes seguros e áreas de recreação que proporcionam experiências 
                ricas em aprendizado e diversão.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🏠</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Instalações Seguras</h4>
                  <p className="text-sm text-muted-foreground">Ambientes adequados para cada faixa etária</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎨</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Espaços Criativos</h4>
                  <p className="text-sm text-muted-foreground">Áreas para arte, música e expressão</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">⚽</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Área de Recreação</h4>
                  <p className="text-sm text-muted-foreground">Quadra e espaços para atividades físicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;