
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="logo_source.png" 
              alt="Source Seguros" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Sua segurança é nossa prioridade. Oferecemos as melhores soluções em seguros para proteger você e sua família.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Seguros</h3>
            <ul className="space-y-2">
              <li><Link to="/auto-seguro" className="text-gray-300 hover:text-primary-400 transition-colors">Seguro Auto</Link></li>
              <li><Link to="/vida-seguro" className="text-gray-300 hover:text-primary-400 transition-colors">Seguro Vida</Link></li>
              <li><Link to="/residencial-seguro" className="text-gray-300 hover:text-primary-400 transition-colors">Seguro Residencial</Link></li>
              <li><Link to="/empresarial-seguro" className="text-gray-300 hover:text-primary-400 transition-colors">Seguro Empresarial</Link></li>
              <li><Link to="/saude-seguro" className="text-gray-300 hover:text-primary-400 transition-colors">Seguro Saúde</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">(11) 97832-5699</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">contato@sourceseguros.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">São Paulo - SP</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary-400" />
                <span className="text-gray-300">Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Início</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-primary-400 transition-colors">Contato</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Source Corretora de Seguros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
