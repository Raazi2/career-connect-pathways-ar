
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, Globe, X, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ChatbotWidget from './ChatbotWidget';
import { useTheme } from 'next-themes';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: t('common.explore'), path: '/' },
    { name: t('common.scholarships'), path: '/scholarships' },
    { name: t('common.opportunities'), path: '/opportunities' },
    { name: t('common.stem'), path: '/stem' },
    { name: t('common.ar'), path: '/ar' },
    { name: t('common.vr'), path: '/vr' },
    { name: t('common.learn'), path: '/learn' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl font-bold">{t('common.welcome')}</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-accent transition-colors duration-200 ${
                  location.pathname === item.path ? 'font-medium text-accent' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={toggleTheme}
                className="bg-transparent border border-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleLanguage}
                className="bg-transparent border border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Globe size={16} className="mr-1" />
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary border-t border-primary-foreground/10"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 hover:text-accent transition-colors duration-200 ${
                    location.pathname === item.path ? 'font-medium text-accent' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-2 py-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={toggleTheme}
                  className="bg-transparent border border-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleLanguage}
                  className="bg-transparent border border-primary-foreground hover:bg-primary-foreground/10 w-fit"
                >
                  <Globe size={16} className="mr-1" />
                  {i18n.language === 'en' ? 'ES' : 'EN'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <ChatbotWidget />

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('common.welcome')}</h3>
              <p className="text-sm text-gray-300">
                Connecting rural students with career opportunities and resources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-300">
                Email: info@careerconnect.org<br />
                Phone: (123) 456-7890<br />
                Address: 123 Education St, Rural Town
              </p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} CareerConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
