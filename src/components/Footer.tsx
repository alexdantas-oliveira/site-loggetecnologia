
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ChevronRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-logge-dark-blue text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/ffa1e4c2-1baa-48a7-9ec7-58e3cc87a43f.png" 
                alt="Logge Tecnologia Logo" 
                className="h-16 mb-4" 
              />
            </div>
            <p className="text-gray-300 mb-6">
              Transformando desafios em soluções inovadoras e eficientes para empresas e governos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solucoes" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Consultoria Tecnológica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Desenvolvimento de Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Transformação Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Business Intelligence
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Receba novidades e conteúdos exclusivos sobre tecnologia e inovação.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-logge-light-blue text-white"
                required
              />
              <Button className="bg-logge-light-blue hover:bg-logge-light-blue/90 transition-colors w-full">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400">
          <p>© {currentYear} Logge Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
