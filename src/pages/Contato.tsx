
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contato = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Phone className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Estamos prontos para ajudar você a encontrar a proteção ideal. Fale conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua mensagem
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Nome</Label>
                      <Input id="nome" placeholder="Seu nome" />
                    </div>
                    <div>
                      <Label htmlFor="sobrenome">Sobrenome</Label>
                      <Input id="sobrenome" placeholder="Seu sobrenome" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input id="assunto" placeholder="Sobre o que você gostaria de falar?" />
                  </div>
                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Digite sua mensagem aqui..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Entre em contato conosco através dos canais abaixo ou visite nosso escritório.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Telefone</h4>
                        <p className="text-gray-600 mb-1">(11) 99999-9999</p>
                        <p className="text-gray-600">(11) 3333-3333</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">E-mail</h4>
                        <p className="text-gray-600 mb-1">contato@sourceseguros.com.br</p>
                        <p className="text-gray-600">atendimento@sourceseguros.com.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Endereço</h4>
                        <p className="text-gray-600 mb-1">R. Guaicurus 608 </p>
                        <p className="text-gray-600 mb-1">Água Branca - São Paulo - SP</p>
                        <p className="text-gray-600">CEP: 05033-001 </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h4>
                        <p className="text-gray-600 mb-1">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-gray-600 mb-1">Sábado: 8h às 12h</p>
                        <p className="text-gray-600">Domingo: Fechado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Localização</h2>
            <p className="text-lg text-gray-600">Visite nosso escritório na Rua. Guaicurus</p>
          </div>
          
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Mapa interativo</p>
              <p className="text-sm text-gray-500">R. Guaicurus, 608 - Água Branca, São Paulo - SP, CEP: 05033-001</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
