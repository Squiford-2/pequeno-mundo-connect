import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Clock, MapPin, CreditCard, Users, FileText } from 'lucide-react';

const faqItems = [
  {
    categoria: "Matrícula e Documentação",
    perguntas: [
      {
        pergunta: "Quais documentos são necessários para a matrícula?",
        resposta: "Para a matrícula são necessários: RG e CPF da criança e responsáveis, certidão de nascimento, comprovante de residência, carteira de vacinação atualizada, duas fotos 3x4 da criança e atestado médico."
      },
      {
        pergunta: "Como funciona o processo de matrícula?",
        resposta: "O processo inclui: 1) Agendamento de visita à escola, 2) Preenchimento da ficha de matrícula, 3) Entrega dos documentos, 4) Pagamento da taxa de matrícula, 5) Período de adaptação da criança."
      },
      {
        pergunta: "Há período de adaptação?",
        resposta: "Sim! Temos um período de adaptação de 1 semana, onde a criança fica inicialmente por períodos menores, aumentando gradualmente até o horário completo, sempre com acompanhamento pedagógico."
      }
    ]
  },
  {
    categoria: "Horários e Funcionamento",
    perguntas: [
      {
        pergunta: "Quais são os horários de funcionamento?",
        resposta: "Funcionamos de segunda a sexta das 7h às 18h. Oferecemos período integral, meio período manhã (7h às 12h) e meio período tarde (13h às 18h)."
      },
      {
        pergunta: "A escola funciona durante as férias?",
        resposta: "Sim, funcionamos durante as férias de julho e janeiro com atividades especiais e programação diferenciada. Apenas fechamos por 2 semanas no final de dezembro."
      },
      {
        pergunta: "E nos feriados?",
        resposta: "Seguimos o calendário oficial de feriados. Em feriados municipais e nacionais a escola permanece fechada."
      }
    ]
  },
  {
    categoria: "Alimentação e Cuidados",
    perguntas: [
      {
        pergunta: "Como funciona a alimentação?",
        resposta: "Oferecemos 4 refeições balanceadas: café da manhã, lanche da manhã, almoço e lanche da tarde. Temos nutricionista responsável pelo cardápio e atendemos restrições alimentares."
      },
      {
        pergunta: "E se minha criança tem alergia alimentar?",
        resposta: "Trabalhamos com cardápio adaptado para crianças com alergias ou restrições. É necessário apresentar atestado médico especificando as restrições."
      },
      {
        pergunta: "Como funciona a troca de fraldas e higiene?",
        resposta: "Temos funcionárias especializadas em cuidados infantis. As trocas são registradas na agenda da criança e os pais recebem relatório diário das atividades."
      }
    ]
  },
  {
    categoria: "Valores e Pagamento",
    perguntas: [
      {
        pergunta: "Quais são os valores das mensalidades?",
        resposta: "Os valores variam conforme a faixa etária e período escolhido. Entre em contato conosco para receber nossa tabela de preços atualizada e possíveis descontos."
      },
      {
        pergunta: "Qual a data de vencimento?",
        resposta: "O vencimento é sempre no dia 10 de cada mês. Oferecemos desconto para pagamento até o vencimento e parcelamento em casos especiais."
      },
      {
        pergunta: "Há taxa de matrícula?",
        resposta: "Sim, há uma taxa de matrícula anual que inclui materiais escolares básicos, agenda escolar e kit de identificação da criança."
      }
    ]
  },
  {
    categoria: "Segurança e Comunicação",
    perguntas: [
      {
        pergunta: "Como é a segurança da escola?",
        resposta: "Temos portão com trava eletrônica, câmeras de segurança, controle de acesso de visitantes e protocolo rigoroso para entrega das crianças apenas aos responsáveis cadastrados."
      },
      {
        pergunta: "Como recebo informações sobre meu filho?",
        resposta: "Utilizamos agenda escolar diária, grupo de WhatsApp da turma, reuniões pedagógicas bimestrais e relatórios de desenvolvimento semestrais."
      },
      {
        pergunta: "Posso visitar meu filho durante o dia?",
        resposta: "Sim, mas pedimos que seja agendado previamente para não interferir na rotina pedagógica. Emergências são sempre atendidas imediatamente."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre matrícula, funcionamento e cuidados na Pequeno Mundo
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqItems.map((categoria, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  {categoria.categoria === "Matrícula e Documentação" && <FileText className="h-6 w-6 text-primary" />}
                  {categoria.categoria === "Horários e Funcionamento" && <Clock className="h-6 w-6 text-primary" />}
                  {categoria.categoria === "Alimentação e Cuidados" && <Users className="h-6 w-6 text-primary" />}
                  {categoria.categoria === "Valores e Pagamento" && <CreditCard className="h-6 w-6 text-primary" />}
                  {categoria.categoria === "Segurança e Comunicação" && <MapPin className="h-6 w-6 text-primary" />}
                  {categoria.categoria}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {categoria.perguntas.map((item, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {item.pergunta}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.resposta}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Não encontrou sua resposta?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco! Estamos aqui para esclarecer todas as suas dúvidas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(51) 3472-8855</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Av. Pe Claret, 619 - Centro, Esteio/RS</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;