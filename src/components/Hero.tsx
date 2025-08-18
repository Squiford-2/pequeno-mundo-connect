import { Button } from '@/components/ui/button';
import { Star, Heart, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Star className="text-accent w-8 h-8" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-20 animate-pulse delay-300">
        <Heart className="text-primary w-6 h-6" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse delay-700">
        <Users className="text-secondary w-7 h-7" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo centralizado */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png" 
              alt="Escola Pequeno Mundo" 
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-lg"
            />
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pequeno Mundo
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Educação Infantil de Qualidade
          </p>

          {/* Frase de impacto */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground leading-relaxed">
            Onde cada criança cresce feliz e{' '}
            <span className="text-primary">aprende brincando</span>
          </h2>

          {/* Informações importantes */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>22 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Creche e Pré-escola</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Centro de Esteio/RS</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg"
              onClick={() => scrollToSection('contato')}
            >
              Agendar Visita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-full"
              onClick={() => scrollToSection('sobre')}
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* Indicador de scroll */}
          <div className="mt-16 animate-bounce">
            <div className="mx-auto w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;