
import { Home, Shield, Zap, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResidencialSeguro = () => {
  const coverages = [
    'Incêndio e explosão',
    'Roubo e furto qualificado',
    'Danos elétricos',
    'Vendaval e granizo',
    'Responsabilidade civil',
    'Assistência residencial 24h',
    'Despesas de hospedagem',
    'Limpeza e desentupimento'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Home className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro Residencial</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Proteja seu lar e todos os seus bens. Tranquilidade para você e sua família.
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
                Proteja seu lar
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Faça uma simulação gratuita e descubra como proteger sua residência.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dados da Residência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="endereco">Endereço Completo</Label>
                    <Input id="endereco" placeholder="Rua, número, bairro" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="00000-000" />
                    </div>
                    <div>
                      <Label htmlFor="tipo">Tipo de Imóvel</Label>
                      <Input id="tipo" placeholder="Casa/Apartamento" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="valor">Valor do Imóvel</Label>
                    <Input id="valor" placeholder="R$ 0,00" />
                  </div>
                  <div>
                    <Label htmlFor="proprietario">Nome do Proprietário</Label>
                    <Input id="proprietario" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicitar Cotação Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coberturas Residenciais
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
                      <Shield className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proteção Total</h4>
                        <p className="text-gray-600">Cobertura completa para estrutura e conteúdo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Zap className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Assistência 24h</h4>
                        <p className="text-gray-600">Serviços de emergência disponíveis sempre</p>
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

export default ResidencialSeguro;
