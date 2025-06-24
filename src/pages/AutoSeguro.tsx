
import { Car, Shield, Wrench, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AutoSeguro = () => {
  const coverages = [
    'Colisão, roubo e furto',
    'Incêndio e fenômenos naturais',
    'Responsabilidade civil',
    'Acidentes pessoais',
    'Guincho 24h',
    'Carro reserva',
    'Vidros e faróis',
    'Assistência domiciliar'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Cobertura completa para seu veículo contra todos os riscos'
    },
    {
      icon: Wrench,
      title: 'Assistência 24h',
      description: 'Guincho, chaveiro e socorro mecânico disponível sempre'
    },
    {
      icon: Car,
      title: 'Carro Reserva',
      description: 'Veículo substituto enquanto o seu está no conserto'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Car className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro Auto</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Proteja seu veículo com a tranquilidade que você merece. Coberturas completas e preços competitivos.
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
                Faça sua cotação gratuita
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha os dados abaixo e receba sua cotação personalizada em minutos.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Veículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="marca">Marca</Label>
                      <Input id="marca" placeholder="Ex: Volkswagen" />
                    </div>
                    <div>
                      <Label htmlFor="modelo">Modelo</Label>
                      <Input id="modelo" placeholder="Ex: Gol" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ano">Ano</Label>
                      <Input id="ano" placeholder="Ex: 2020" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="00000-000" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicitar Cotação Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coberturas Incluídas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {coverages.map((coverage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{coverage}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-start p-6">
                      <benefit.icon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nosso Seguro Auto?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores condições do mercado com atendimento personalizado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cobertura Completa</h3>
              <p className="text-gray-600">Proteção total para seu veículo em qualquer situação</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
              <p className="text-gray-600">Suporte disponível todos os dias, a qualquer hora</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Processos Rápidos</h3>
              <p className="text-gray-600">Cotação e contratação em poucos minutos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoSeguro;
