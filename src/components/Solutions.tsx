
import { 
  AlertTriangle, 
  BarChart2, 
  Clock, 
  FileQuestion, 
  Puzzle, 
  ShieldCheck, 
  Lightbulb, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Solutions = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollReveal();
  const { ref: solutionsRef, isVisible: solutionsVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const problems = [
    {
      icon: <AlertTriangle className="h-10 w-10 text-amber-500" />,
      title: "Processos Ineficientes",
      description: "Operações manuais, desorganizadas e lentas que geram custos excessivos e frustração."
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: "Tempo de Resposta Lento",
      description: "Dificuldade para tomar decisões rápidas baseadas em dados concretos e atualizados."
    },
    {
      icon: <FileQuestion className="h-10 w-10 text-amber-500" />,
      title: "Dados Desorganizados",
      description: "Informações críticas espalhadas em diferentes sistemas, sem integração e com difícil acesso."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-amber-500" />,
      title: "Falta de Inovação",
      description: "Dificuldade em implementar novas tecnologias e manter-se competitivo no mercado."
    }
  ];

  const solutions = [
    {
      icon: <Puzzle className="h-10 w-10 text-logge-light-blue" />,
      title: "Soluções Personalizadas",
      description: "Desenvolvemos estratégias e sistemas adaptados às necessidades específicas de cada cliente."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-logge-light-blue" />,
      title: "Segurança e Confiabilidade",
      description: "Implementamos tecnologias seguras e robustas que garantem proteção aos seus dados e operações."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-logge-light-blue" />,
      title: "Inovação Tecnológica",
      description: "Aplicamos as mais recentes tecnologias e metodologias para manter sua empresa na vanguarda."
    }
  ];

  return (
    <section id="solucoes" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'revealed' : ''} text-center mb-10 md:mb-16`}
        >
          <h2 className="section-title">
            Problemas que Resolvemos
          </h2>
          <p className="section-subtitle">
            Identificamos e transformamos os principais desafios enfrentados por empresas e órgãos públicos em oportunidades de inovação e crescimento.
          </p>
        </div>

        <div
          ref={problemsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`scroll-reveal scroll-reveal-stagger ${problemsVisible ? 'revealed' : ''} bg-white p-5 sm:p-6 rounded-lg shadow-soft border border-gray-100 card-hover h-full flex flex-col`}
            >
              <div className="mb-4 flex justify-center sm:justify-start transition-transform duration-300 hover:scale-110">{problem.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-logge-gray-400">{problem.title}</h3>
              <p className="text-logge-gray-300 text-sm sm:text-base flex-grow">{problem.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={solutionsRef}
          className={`scroll-reveal ${solutionsVisible ? 'revealed' : ''} bg-logge-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl mb-12 md:mb-16 shadow-soft`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-title">
              Como Transformamos Desafios em Soluções
            </h2>
            <p className="section-subtitle">
              Nossa abordagem combina expertise técnica, conhecimento de negócios e metodologias inovadoras para criar soluções eficazes e sustentáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`scroll-reveal scroll-reveal-stagger ${solutionsVisible ? 'revealed' : ''} bg-white p-5 sm:p-6 rounded-lg shadow-soft card-hover-subtle h-full flex flex-col`}
              >
                <div className="mb-4 flex justify-center md:justify-start transition-transform duration-300 hover:scale-110">{solution.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-logge-dark-blue">{solution.title}</h3>
                <p className="text-logge-gray-300 text-sm sm:text-base flex-grow">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ctaRef}
          className={`scroll-reveal ${ctaVisible ? 'revealed' : ''} text-center`}
        >
          <Button 
            className="bg-logge-light-blue hover:bg-logge-dark-blue hover:scale-105 hover:-translate-y-1 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition-all duration-300 text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-medium hover:shadow-strong"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-center whitespace-normal sm:whitespace-nowrap">Quero Conhecer as Soluções para Minha Empresa</span>
            <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
