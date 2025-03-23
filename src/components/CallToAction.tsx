
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-logge-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-logge-dark-blue">
          Pronto para Transformar os Desafios da sua Empresa?
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-logge-gray-400">
          Agende uma consultoria gratuita com nossos especialistas e descubra como podemos ajudar a sua empresa a superar obstáculos e alcançar resultados extraordinários.
        </p>
        <Button 
          className="bg-logge-light-blue hover:bg-logge-dark-blue text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition-all duration-300 text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center gap-2"
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-center whitespace-normal sm:whitespace-nowrap">Agendar Consultoria Gratuita</span>
          <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
