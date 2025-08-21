import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-scale cursor-pointer">
            <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-primary to-secondary">
              <img 
                src="/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png" 
                alt="Pequeno Mundo Logo" 
                className="h-10 w-auto bg-white rounded-full p-1"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Pequeno Mundo
              </h1>
              <p className="text-xs text-muted-foreground">Educação Infantil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              Galeria
            </button>
            <a 
              href="/professores"
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              Professores
            </a>
            <a 
              href="/projetos"
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              Projetos
            </a>
            <a 
              href="/faq"
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              FAQ
            </a>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors story-link font-medium text-sm"
            >
              Contato
            </button>
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Galeria
              </button>
              <a 
                href="/professores"
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Professores
              </a>
              <a 
                href="/projetos"
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Projetos
              </a>
              <a 
                href="/faq"
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                FAQ
              </a>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button variant="outline" size="sm" className="w-fit">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;