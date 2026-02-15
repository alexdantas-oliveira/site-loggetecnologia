
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {


  return (
    <footer className="bg-logge-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-logge-light-blue">Logge</span> Tecnologia
            </h3>
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
            <h4 className="text-lg font-bold mb-6">Informações de Contato</h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-logge-light-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300 text-sm">E-mail</p>
                    <a href="mailto:contato@logge.tec.br" className="text-white hover:text-logge-light-blue transition-colors">
                      contato@logge.tec.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-logge-light-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300 text-sm">Telefone</p>
                    <a href="tel:+5586998056525" className="text-white hover:text-logge-light-blue transition-colors">
                      (86) 99805-6525
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-logge-light-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300 text-sm">Endereço</p>
                  <p className="text-white">
                    Rua David Caldas, 1392
                    Bairro Vermelha, Centro Sul
                    Teresina - PI
                  </p>
                </div>
              </div>
            </div>
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
          <p>© 2025 Logge Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
