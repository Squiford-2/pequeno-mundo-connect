import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

const Politicas = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Políticas e Documentos
            </h1>
            <p className="text-lg text-muted-foreground">
              Informações importantes sobre nossos termos, políticas e regulamentos internos
            </p>
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Política de Privacidade */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Política de Privacidade</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Escola de Educação Infantil Pequeno Mundo Ltda, CNPJ 01.494.156/0001-39, localizada na Avenida Pe Claret, 619 - Centro, Esteio/RS, está comprometida com a proteção dos dados pessoais das crianças, pais e responsáveis.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Coleta de Dados</h3>
                <p>
                  Coletamos apenas os dados necessários para o cuidado e educação das crianças, incluindo: dados de identificação, contatos de emergência, informações médicas relevantes, registros acadêmicos e fotos/vídeos para fins pedagógicos.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Uso dos Dados</h3>
                <p>
                  Os dados são utilizados exclusivamente para: prestação dos serviços educacionais, comunicação com os responsáveis, cuidados de saúde e segurança, e desenvolvimento de atividades pedagógicas.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Compartilhamento</h3>
                <p>
                  Não compartilhamos dados pessoais com terceiros, exceto quando exigido por lei ou em situações de emergência médica. Fotos e vídeos só são compartilhados com autorização expressa dos responsáveis.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Direitos dos Titulares</h3>
                <p>
                  Os responsáveis têm direito ao acesso, correção, exclusão e portabilidade dos dados, bem como à revogação do consentimento a qualquer momento.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termos de Uso */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Termos de Uso</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Contrato de Prestação de Serviços</h3>
                <p>
                  Ao matricular a criança na Pequeno Mundo, os responsáveis concordam com os termos e condições estabelecidos em nosso contrato de prestação de serviços educacionais.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Responsabilidades da Escola</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prestação de serviços educacionais de qualidade</li>
                  <li>Cuidado e segurança das crianças durante o período escolar</li>
                  <li>Comunicação regular com os responsáveis</li>
                  <li>Cumprimento das diretrizes pedagógicas estabelecidas</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Responsabilidades dos Responsáveis</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pagamento das mensalidades em dia</li>
                  <li>Fornecimento de informações atualizadas</li>
                  <li>Cumprimento dos horários estabelecidos</li>
                  <li>Respeito às normas internas da escola</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Regulamento Interno */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Regulamento Interno</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Horários</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Funcionamento: Segunda a sexta, das 7h às 18h</li>
                  <li>Tolerância de atraso: 15 minutos para entrada</li>
                  <li>Após 18h15: Taxa adicional por hora extra</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Saúde e Medicamentos</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Crianças com febre não podem permanecer na escola</li>
                  <li>Medicamentos só com receita médica e autorização por escrito</li>
                  <li>Comunicação imediata em caso de acidentes ou mal-estar</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Materiais e Pertences</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Todos os pertences devem estar identificados</li>
                  <li>A escola não se responsabiliza por objetos de valor</li>
                  <li>Lista de materiais fornecida no início do ano letivo</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Comunicação</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Agenda escolar diária obrigatória</li>
                  <li>Reuniões pedagógicas bimestrais</li>
                  <li>Atendimento aos pais mediante agendamento</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contato Legal */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Contato para Questões Legais</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Para dúvidas sobre nossos termos, políticas ou questões legais, entre em contato:
                </p>
                
                <Separator />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dados da Empresa</h4>
                    <p className="text-sm">
                      <strong>Razão Social:</strong><br />
                      Escola de Educação Infantil Pequeno Mundo Ltda
                    </p>
                    <p className="text-sm mt-2">
                      <strong>CNPJ:</strong> 01.494.156/0001-39
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contato</h4>
                    <p className="text-sm">
                      <strong>Email:</strong> contato@pequenoMundo.com.br
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Telefone:</strong> (51) 3472-8855
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Endereço:</strong><br />
                      Av. Pe Claret, 619 - Centro<br />
                      Esteio/RS - CEP 93.280-260
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <p className="text-xs text-muted-foreground/80">
                  Última atualização: Janeiro de 2024. Este documento pode ser alterado a qualquer momento, sendo a versão mais recente sempre disponibilizada em nosso site.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Politicas;