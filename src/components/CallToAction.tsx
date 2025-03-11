
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-logge-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-logge-dark-blue">
          Pronto para Transformar os Desafios da sua Empresa?
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-logge-gray-400">
          Agende uma consultoria gratuita com nossos especialistas e descubra como podemos ajudar a sua empresa a superar obstáculos e alcançar resultados extraordinários.
        </p>
        <Button 
          className="btn-primary text-lg py-6 px-8" 
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Agendar Consultoria Gratuita
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
