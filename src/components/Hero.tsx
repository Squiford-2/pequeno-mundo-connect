import { Button } from '@/components/ui/button';
import { Star, Heart, Users, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:60px_60px] opacity-20"></div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-32 right-20 animate-bounce delay-300">
        <Star className="text-primary w-6 h-6 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-700">
        <Heart className="text-secondary w-5 h-5 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-10 animate-bounce delay-500">
        <Sparkles className="text-accent w-5 h-5" />
      </div>
      <div className="absolute bottom-20 right-32 animate-bounce delay-1000">
        <Zap className="text-primary w-4 h-4" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Logo centralizado com efeito */}
          <div className="mb-8 hover-scale">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-30 scale-110"></div>
              <img 
                src="/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png" 
                alt="Escola Pequeno Mundo" 
                className="relative h-36 md:h-44 w-auto mx-auto drop-shadow-2xl bg-white rounded-full p-2"
              />
            </div>
          </div>

          {/* Título principal com animação */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Pequeno Mundo
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
            Educação Infantil de Qualidade
          </p>

          {/* Frase de impacto */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-foreground leading-relaxed">
            Onde cada criança cresce feliz e{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              aprende brincando
            </span>
          </h2>

          {/* Badges informativos */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>22 anos de experiência</span>
              </div>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-full border border-secondary/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>Creche e Pré-escola</span>
              </div>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-accent/10 to-accent/20 rounded-full border border-accent/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Centro de Esteio/RS</span>
              </div>
            </div>
          </div>

          {/* Call to Action melhorado */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              onClick={() => scrollToSection('contato')}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Agendar Visita
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-4 text-lg rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('sobre')}
            >
              <Users className="w-5 h-5 mr-2" />
              Conheça Nossa História
            </Button>
          </div>

          {/* Indicador de scroll animado */}
          <div className="animate-bounce">
            <div className="mx-auto w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer hover:border-primary transition-colors"
                 onClick={() => scrollToSection('sobre')}>
              <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-medium">Descubra mais</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;