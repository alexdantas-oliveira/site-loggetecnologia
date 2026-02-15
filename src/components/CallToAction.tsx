import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CallToActionProps {
  onContactClick?: () => void;
}

const CallToAction = ({ onContactClick }: CallToActionProps) => {
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollReveal();

  const handleContactAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ctaRef}
      className={`scroll-reveal ${ctaVisible ? 'revealed' : ''} pt-8 md:pt-12 pb-16 md:pb-24 bg-white`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-logge-gray-100 text-logge-dark-blue rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-logge-gray-300">
            Entre em contato conosco e descubra como nossas soluções podem impulsionar o crescimento da sua empresa ou município.
          </p>
          <Button
            className="bg-logge-light-blue text-white hover:bg-logge-dark-blue hover:scale-105 font-semibold py-4 px-8 rounded-md transition-all duration-300 text-lg shadow-medium hover:shadow-strong"
            onClick={handleContactAction}
          >
            Fale Conosco Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;