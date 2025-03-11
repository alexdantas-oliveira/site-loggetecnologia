
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

const Solutions = () => {
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
    <section id="solucoes" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Problemas que Resolvemos</h2>
          <p className="section-subtitle">
            Identificamos e transformamos os principais desafios enfrentados por empresas e órgãos públicos em oportunidades de inovação e crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-logge-gray-400">{problem.title}</h3>
              <p className="text-logge-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-logge-gray-100 p-8 md:p-12 rounded-2xl mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Como Transformamos Desafios em Soluções</h2>
            <p className="section-subtitle">
              Nossa abordagem combina expertise técnica, conhecimento de negócios e metodologias inovadoras para criar soluções eficazes e sustentáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-logge-dark-blue">{solution.title}</h3>
                <p className="text-logge-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="btn-primary text-lg py-6 px-8" 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero Conhecer as Soluções para Minha Empresa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
