
import { Heart, Shield, Users, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VidaSeguro = () => {
  const coverages = [
    'Morte natural e acidental',
    'Invalidez permanente',
    'Doenças graves',
    'Assistência funeral',
    'Renda por incapacidade',
    'Assistência médica',
    'Auxílio educação',
    'Apoio psicológico'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de Vida</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Proteja quem você ama. Garanta tranquilidade e segurança financeira para sua família.
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
                Proteja sua família hoje
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Simule seu seguro de vida e garante a proteção que sua família precisa.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
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
                      <Label htmlFor="profissao">Profissão</Label>
                      <Input id="profissao" placeholder="Sua profissão" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="renda">Renda Mensal</Label>
                    <Input id="renda" placeholder="R$ 0,00" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicitar Cotação Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coberturas do Seguro de Vida
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
                      <Shield className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proteção Garantida</h4>
                        <p className="text-gray-600">Indenização integral para beneficiários em caso de sinistro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Users className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Para Toda Família</h4>
                        <p className="text-gray-600">Cobertura extensiva para cônjuge e filhos</p>
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

export default VidaSeguro;
