
import { 
  Award, 
  Users, 
  Calendar, 
  Code, 
  Cpu,
  Server, 
  LineChart,
  Check
} from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: <Award className="h-12 w-12 text-logge-light-blue mb-4" />,
      title: "Expertise Comprovada",
      description: "Equipe de especialistas com vasta experiência em tecnologia e gestão de projetos."
    },
    {
      icon: <Users className="h-12 w-12 text-logge-light-blue mb-4" />,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único e recebe atenção exclusiva, com suporte contínuo durante todo o processo."
    },
    {
      icon: <Calendar className="h-12 w-12 text-logge-light-blue mb-4" />,
      title: "Agilidade nas Entregas",
      description: "Metodologias ágeis que garantem entregas rápidas e resultados consistentes."
    },
    {
      icon: <Code className="h-12 w-12 text-logge-light-blue mb-4" />,
      title: "Soluções Tecnológicas",
      description: "Desenvolvimento de sistemas e aplicações usando as tecnologias mais avançadas do mercado."
    }
  ];

  const technologies = [
    { icon: <Code size={24} />, label: "Desenvolvimento de Software" },
    { icon: <Cpu size={24} />, label: "Inteligência Artificial" },
    { icon: <Server size={24} />, label: "Infraestrutura Cloud" },
    { icon: <LineChart size={24} />, label: "Business Intelligence" }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-white to-logge-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Diferenciais</h2>
          <p className="section-subtitle">
            O que nos torna a escolha certa para transformar os desafios da sua empresa em soluções inovadoras e eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center">
                {differential.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-logge-dark-blue">{differential.title}</h3>
              <p className="text-logge-gray-300">{differential.description}</p>
            </div>
          ))}
        </div>

        <div className="gradient-bg rounded-2xl p-10 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Tecnologias em que Somos Especialistas</h3>
            <p className="text-lg max-w-3xl mx-auto">
              Utilizamos as tecnologias mais avançadas para criar soluções robustas e escaláveis para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center"
              >
                <div className="mr-3 text-white">{tech.icon}</div>
                <span className="font-medium">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
