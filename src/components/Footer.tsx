import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/484d16c2-4fcc-4fd4-b950-5e5277e268f9.png" 
                alt="Pequeno Mundo Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Pequeno Mundo</h3>
                <p className="text-sm text-primary-foreground/80">Educação Infantil</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Há 22 anos oferecendo educação infantil de qualidade, onde cada criança 
              cresce feliz em um ambiente seguro e acolhedor.
            </p>
            <div className="text-sm text-primary-foreground/80">
              <p><strong>CNPJ:</strong> 01.494.156/0001-39</p>
              <p><strong>Fundada em:</strong> 23 de outubro de 1996</p>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <a 
                  href="/professores"
                  className="hover:text-white transition-colors block"
                >
                  Professores
                </a>
              </li>
              <li>
                <a 
                  href="/projetos"
                  className="hover:text-white transition-colors block"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a 
                  href="/faq"
                  className="hover:text-white transition-colors block"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Avenida Pe Claret, 619</p>
                  <p>Centro - Esteio, RS</p>
                  <p>CEP: 93.280-260</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm">
                  <p>(51) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm">
                  <p>contato@pequenoMundo.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-1">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-300 fill-current" />
              <span>para as crianças do Pequeno Mundo</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 text-center">
              <span>&copy; 2024 Escola Pequeno Mundo. Todos os direitos reservados.</span>
              <span>•</span>
              <a href="/politicas" className="hover:text-white transition-colors">
                Políticas e Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;