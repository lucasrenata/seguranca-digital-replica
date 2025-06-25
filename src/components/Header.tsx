
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Seguro Auto', href: '/auto-seguro' },
    { name: 'Seguro Vida', href: '/vida-seguro' },
    { name: 'Seguro Residencial', href: '/residencial-seguro' },
    { name: 'Seguro Empresarial', href: '/empresarial-seguro' },
    { name: 'Seguro Saúde', href: '/saude-seguro' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/9f1b3c5e-0d5a-4c98-a8f4-2b6e4d5f8a9c.png" 
                alt="Source Corretora de Seguros" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href ? 'text-primary-600 border-b-2 border-primary-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button className="bg-gradient-primary hover:opacity-90 text-white">
              Solicitar Cotação
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.href 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                Solicitar Cotação
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
