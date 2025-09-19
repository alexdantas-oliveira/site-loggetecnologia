
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CallToAction = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-logge-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6">
        <div
          ref={ctaRef}
          className={`scroll-reveal ${ctaVisible ? 'revealed' : ''}`}
        >
          <h2 className="section-title">
            Pronto para Transformar os Desafios da sua Empresa?
          </h2>
          <p className="section-subtitle">
            Agende uma consultoria gratuita com nossos especialistas e descubra como podemos ajudar a sua empresa a superar obstáculos e alcançar resultados extraordinários.
          </p>
          <Button 
            className="bg-logge-light-blue hover:bg-logge-dark-blue hover:scale-105 hover:-translate-y-1 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition-all duration-300 text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-medium hover:shadow-strong"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-center whitespace-normal sm:whitespace-nowrap">Agendar Consultoria Gratuita</span>
            <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform duration-300 hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
