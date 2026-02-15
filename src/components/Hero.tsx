
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface HeroProps {
  onContactClick?: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollReveal();

  const handleContactAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <div
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto text-balance">
            Transformamos Desafios em Soluções Inovadoras
          </h1>
        </div>

        <div
          ref={subtitleRef}
          className={`scroll-reveal ${subtitleVisible ? 'revealed' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 text-gray-100 leading-relaxed">
            Consultoria especializada para empresas e governos, ajudando-os a superar obstáculos com tecnologia de ponta e estratégias inovadoras.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className={`scroll-reveal ${buttonsVisible ? 'revealed' : ''} flex flex-col sm:flex-row justify-center gap-4`}
          style={{ transitionDelay: '400ms' }}
        >
          <Button
            className="bg-white text-logge-dark-blue hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 font-semibold py-3 px-6 sm:py-4 sm:px-6 md:py-6 md:px-8 rounded-md transition-all duration-300 text-sm sm:text-base md:text-lg shadow-medium hover:shadow-strong"
            onClick={() => document.getElementById('transformamos')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            Conheça Nossas Soluções
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            className="bg-transparent border-2 border-white hover:bg-white/10 hover:scale-105 text-white font-semibold py-3 px-6 sm:py-4 sm:px-6 md:py-6 md:px-8 rounded-md transition-all duration-300 text-sm sm:text-base md:text-lg"

          >
            Conheça Nossos Parceiros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
