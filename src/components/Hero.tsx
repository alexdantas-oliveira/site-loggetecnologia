
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
          Transformamos Desafios em Soluções Inovadoras
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 text-gray-100">
          Consultoria especializada para empresas e governos, ajudando-os a superar obstáculos com tecnologia de ponta e estratégias inovadoras.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-white text-logge-dark-blue hover:bg-gray-100 font-semibold py-3 px-6 sm:py-4 sm:px-6 md:py-6 md:px-8 rounded-md transition-all duration-300 text-sm sm:text-base md:text-lg"
            onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossas Soluções
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 sm:py-4 sm:px-6 md:py-6 md:px-8 rounded-md transition-all duration-300 text-sm sm:text-base md:text-lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
