
import { Building, Shield, Users, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmpresarialSeguro = () => {
  const coverages = [
    'Responsabilidade civil geral',
    'Seguro de vida em grupo',
    'Acidentes de trabalho',
    'D&O (Diretores e Administradores)',
    'Cyber seguro',
    'Interrupção de negócios',
    'Equipamentos e maquinários',
    'Transporte de cargas'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro Empresarial</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Proteja seu negócio, colaboradores e patrimônio com soluções corporativas completas.
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
                Proteja seu negócio
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Soluções corporativas personalizadas para empresas de todos os portes.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dados da Empresa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="empresa">Nome da Empresa</Label>
                    <Input id="empresa" placeholder="Nome da sua empresa" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" placeholder="00.000.000/0000-00" />
                    </div>
                    <div>
                      <Label htmlFor="ramo">Ramo de Atividade</Label>
                      <Input id="ramo" placeholder="Ex: Comércio" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="funcionarios">Nº de Funcionários</Label>
                      <Input id="funcionarios" placeholder="Ex: 50" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="faturamento">Faturamento Anual</Label>
                      <Input id="faturamento" placeholder="R$ 0,00" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="responsavel">Nome do Responsável</Label>
                    <Input id="responsavel" placeholder="Nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicitar Cotação Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Soluções Empresariais
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
                      <Shield className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proteção Completa</h4>
                        <p className="text-gray-600">Cobertura total para riscos empresariais</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Users className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Equipe Protegida</h4>
                        <p className="text-gray-600">Seguros para colaboradores e gestores</p>
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

export default EmpresarialSeguro;
