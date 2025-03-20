
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-logge-dark-blue">Entre em Contato</h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-logge-gray-400">
            Estamos prontos para ouvir sobre seus desafios e apresentar soluções personalizadas para a sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-logge-gray-400 mb-1 sm:mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-logge-gray-400 mb-1 sm:mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@empresa.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-logge-gray-400 mb-1 sm:mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-logge-gray-400 mb-1 sm:mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-logge-gray-400 mb-1 sm:mb-2">
                  Como podemos ajudar? *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu desafio ou necessidade..."
                  required
                  className="w-full min-h-[120px] sm:min-h-[150px]"
                />
              </div>

              <Button 
                type="submit" 
                className="btn-primary w-full py-2 sm:py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-logge-gray-100 rounded-lg p-4 sm:p-6 md:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-logge-dark-blue">Informações de Contato</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-logge-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-logge-gray-400 text-sm sm:text-base">E-mail</p>
                    <a href="mailto:contato@loggetecnologia.com.br" className="text-logge-dark-blue hover:text-logge-light-blue transition-colors text-sm sm:text-base">
                      contato@loggetecnologia.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-logge-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-logge-gray-400 text-sm sm:text-base">Telefone</p>
                    <a href="tel:+5500000000000" className="text-logge-dark-blue hover:text-logge-light-blue transition-colors text-sm sm:text-base">
                      +55 (00) 0000-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-logge-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-logge-gray-400 text-sm sm:text-base">Endereço</p>
                    <p className="text-logge-gray-300 text-sm sm:text-base">
                      Av. Tecnologia, 1000<br />
                      Centro Empresarial, Sala 101<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
