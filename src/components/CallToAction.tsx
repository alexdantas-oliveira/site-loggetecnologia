import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const CallToAction = () => {
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollReveal();
  
  return (
    <section 
      ref={ctaRef}
      className={`scroll-reveal ${ctaVisible ? 'revealed' : ''} py-12 md:py-20 bg-gradient-to-br from-logge-light-blue to-logge-dark-blue text-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          Entre em contato conosco e descubra como nossas soluções podem impulsionar o crescimento da sua empresa ou município.
        </p>
        <Button 
          className="bg-white text-logge-dark-blue hover:bg-white/90 hover:scale-105 font-semibold py-4 px-8 rounded-md transition-all duration-300 text-lg shadow-medium hover:shadow-strong"
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Fale Conosco Agora
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
export default CallToAction;