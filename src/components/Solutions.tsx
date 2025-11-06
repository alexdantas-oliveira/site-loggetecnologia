import { AlertTriangle, BarChart2, Clock, FileQuestion, Building2, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Solutions = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useScrollReveal();
  const {
    ref: problemsRef,
    isVisible: problemsVisible
  } = useScrollReveal();
  const {
    ref: solutionsRef,
    isVisible: solutionsVisible
  } = useScrollReveal();
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollReveal();
  const problems = [{
    icon: <AlertTriangle className="h-10 w-10 text-amber-500" />,
    title: "Processos Ineficientes",
    description: "Operações manuais, desorganizadas e lentas que geram custos excessivos e frustração."
  }, {
    icon: <Clock className="h-10 w-10 text-amber-500" />,
    title: "Tempo de Resposta Lento",
    description: "Dificuldade para tomar decisões rápidas baseadas em dados concretos e atualizados."
  }, {
    icon: <FileQuestion className="h-10 w-10 text-amber-500" />,
    title: "Dados Desorganizados",
    description: "Informações críticas espalhadas em diferentes sistemas, sem integração e com difícil acesso."
  }, {
    icon: <BarChart2 className="h-10 w-10 text-amber-500" />,
    title: "Falta de Inovação",
    description: "Dificuldade em implementar novas tecnologias e manter-se competitivo no mercado."
  }];
  const solutions = [{
    icon: <Building2 className="h-10 w-10 text-logge-light-blue" />,
    title: "Soluções para a Minha Empresa",
    description: "Transforme sua empresa com soluções tecnológicas personalizadas que otimizam processos, aumentam a produtividade e impulsionam o crescimento do seu negócio.",
    link: "/solucoes-empresas"
  }, {
    icon: <Landmark className="h-10 w-10 text-logge-light-blue" />,
    title: "Soluções para o Meu Município",
    description: "Modernize a gestão pública com tecnologia que melhora os serviços aos cidadãos, aumenta a transparência e otimiza os recursos municipais.",
    link: "/solucoes-municipios"
  }];
  return <section id="solucoes" className="pt-12 md:pt-20 pb-4 md:pb-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={titleRef} className={`scroll-reveal ${titleVisible ? 'revealed' : ''} text-center mb-10 md:mb-16`}>
          <h2 className="section-title">
            Problemas que Resolvemos
          </h2>
          <p className="section-subtitle">
            Identificamos e transformamos os principais desafios enfrentados por empresas e órgãos públicos em oportunidades de inovação e crescimento.
          </p>
        </div>

        <div ref={problemsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {problems.map((problem, index) => <div key={index} className={`scroll-reveal scroll-reveal-stagger ${problemsVisible ? 'revealed' : ''} bg-white p-5 sm:p-6 rounded-lg shadow-soft border border-gray-100 card-hover h-full flex flex-col`}>
              <div className="mb-4 flex justify-center sm:justify-start transition-transform duration-300 hover:scale-110">{problem.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-logge-gray-400">{problem.title}</h3>
              <p className="text-logge-gray-300 text-sm sm:text-base flex-grow">{problem.description}</p>
            </div>)}
        </div>

        <div ref={solutionsRef} className={`scroll-reveal ${solutionsVisible ? 'revealed' : ''} bg-logge-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl mb-12 md:mb-16 shadow-soft`}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-title">
              Como Transformamos Desafios em Soluções
            </h2>
            <p className="section-subtitle">
              Nossa abordagem combina expertise técnica, conhecimento de negócios e metodologias inovadoras para criar soluções eficazes e sustentáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {solutions.map((solution, index) => <div key={index} className={`scroll-reveal scroll-reveal-stagger ${solutionsVisible ? 'revealed' : ''} bg-white p-6 sm:p-8 rounded-lg shadow-soft card-hover-subtle h-full flex flex-col cursor-pointer group`} onClick={() => window.location.href = solution.link}>
                <div className="mb-4 flex justify-center md:justify-start transition-transform duration-300 group-hover:scale-110">{solution.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-logge-dark-blue group-hover:text-logge-light-blue transition-colors">{solution.title}</h3>
                <p className="text-logge-gray-300 text-sm sm:text-base flex-grow">{solution.description}</p>
                <div className="mt-4 flex items-center text-logge-light-blue font-semibold group-hover:translate-x-2 transition-transform">
                  Saiba mais <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>)}
          </div>
        </div>

        
      </div>
    </section>;
};
export default Solutions;