
import { Link } from 'react-router-dom';
import { Car, Heart, Home, Building, Shield, Phone, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const services = [
    {
      icon: Car,
      title: 'Seguro Auto',
      description: 'Proteção completa para seu veículo com as melhores seguradoras do mercado.',
      link: '/auto-seguro'
    },
    {
      icon: Heart,
      title: 'Seguro Vida',
      description: 'Tranquilidade para você e sua família com cobertura personalizada.',
      link: '/vida-seguro'
    },
    {
      icon: Home,
      title: 'Seguro Residencial',
      description: 'Proteja seu lar contra imprevistos com nossa cobertura residencial.',
      link: '/residencial-seguro'
    },
    {
      icon: Building,
      title: 'Seguro Empresarial',
      description: 'Soluções corporativas para proteger seu negócio e colaboradores.',
      link: '/empresarial-seguro'
    },
    {
      icon: Shield,
      title: 'Seguro Saúde',
      description: 'Cuidados médicos de qualidade para você e sua família.',
      link: '/saude-seguro'
    }
  ];

  const benefits = [
    'Atendimento personalizado',
    'Cotação gratuita e rápida',
    'Parceria com as melhores seguradoras',
    'Suporte 24/7',
    'Processos digitalizados',
    'Consultoria especializada'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
     {/* Hero Section - Apenas Imagem */}
<section
  className="w-full h-[400px] md:h-[600px] bg-center bg-cover"
  style={{ backgroundImage: "url('/logo_moderna_v2.png')" }}
>
  {/* Se quiser um overlay escuro, adicione um div aqui */}
</section>



      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Seguros</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cobertura completa para todas as suas necessidades de proteção
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6 text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link}>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher a Source Seguros?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos especialistas em seguros há mais de 10 anos, oferecendo o melhor atendimento e as soluções mais adequadas para nossos clientes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg">
              <div className="text-center">
                <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Avaliação 5 Estrelas
                </h3>
                <p className="text-gray-600 mb-6">
                  "Excelente atendimento! Encontrei o seguro perfeito para minhas necessidades com um preço justo. Recomendo!"
                </p>
                <p className="font-semibold text-gray-900">Maria Silva</p>
                <p className="text-sm text-gray-500">Cliente há 3 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para se proteger?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra qual seguro é ideal para você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Falar com Especialista
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
