
import { Shield, Heart, Users, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SaudeSeguro = () => {
  const coverages = [
    'Consultas médicas',
    'Exames e diagnósticos',
    'Internações hospitalares',
    'Cirurgias eletivas e emergenciais',
    'UTI e tratamentos intensivos',
    'Medicamentos hospitalares',
    'Fisioterapia e reabilitação',
    'Rede credenciada nacional'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro Saúde</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Cuidados médicos de qualidade para você e sua família. Saúde não tem preço.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cuide da sua saúde
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Planos de saúde com ampla rede credenciada e atendimento de qualidade.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Beneficiário</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="idade">Idade</Label>
                      <Input id="idade" placeholder="Ex: 35" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="dependentes">Nº de Dependentes</Label>
                      <Input id="dependentes" placeholder="Ex: 2" type="number" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" placeholder="Sua cidade" />
                  </div>
                  <div>
                    <Label htmlFor="renda">Renda Familiar</Label>
                    <Input id="renda" placeholder="R$ 0,00" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicitar Cotação Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coberturas do Plano de Saúde
              </h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {coverages.map((coverage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{coverage}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Heart className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cuidado Integral</h4>
                        <p className="text-gray-600">Assistência médica completa para toda família</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Users className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Rede Ampla</h4>
                        <p className="text-gray-600">Milhares de médicos e hospitais credenciados</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaudeSeguro;
