
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-logge-dark-blue">
              <span className="text-logge-light-blue">Logge</span> Tecnologia
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#solucoes" className="text-logge-gray-400 hover:text-logge-dark-blue font-medium transition-colors">
            Soluções
          </a>
          <a href="#diferenciais" className="text-logge-gray-400 hover:text-logge-dark-blue font-medium transition-colors">
            Diferenciais
          </a>
          <a href="#contato" className="text-logge-gray-400 hover:text-logge-dark-blue font-medium transition-colors">
            Contato
          </a>
          <Button className="btn-primary" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-logge-dark-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
            <a 
              href="#solucoes" 
              className="text-logge-dark-blue text-xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </a>
            <a 
              href="#diferenciais"
              className="text-logge-dark-blue text-xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </a>
            <a 
              href="#contato"
              className="text-logge-dark-blue text-xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="btn-primary w-full mt-4" 
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
