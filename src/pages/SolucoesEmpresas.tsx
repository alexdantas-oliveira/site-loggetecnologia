import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Users, TrendingUp, Target, CheckCircle, ArrowRight, Mail } from "lucide-react";
const SolucoesEmpresas = () => {
  const [email, setEmail] = useState('');
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollReveal();
  const {
    ref: benefitsRef,
    isVisible: benefitsVisible
  } = useScrollReveal();
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollReveal();
  const {
    ref: servicesRef,
    isVisible: servicesVisible
  } = useScrollReveal();
  const {
    ref: signupRef,
    isVisible: signupVisible
  } = useScrollReveal();
  const benefits = [{
    icon: <TrendingUp className="h-12 w-12 text-logge-light-blue" />,
    title: "Aumento da Produtividade",
    description: "Automatize processos manuais e otimize operações para aumentar a eficiência da sua empresa em até 40%."
  }, {
    icon: <Target className="h-12 w-12 text-logge-light-blue" />,
    title: "Decisões Mais Assertivas",
    description: "Tenha acesso a dados consolidados e relatórios em tempo real para tomar decisões baseadas em informações precisas."
  }, {
    icon: <Building2 className="h-12 w-12 text-logge-light-blue" />,
    title: "Crescimento Sustentável",
    description: "Implemente soluções escaláveis que crescem junto com sua empresa, garantindo investimento de longo prazo."
  }];
  const services = [{
    title: "Sistemas de Gestão Empresarial",
    description: "ERP personalizado para controle completo de processos, estoque, financeiro e recursos humanos.",
    features: ["Controle de Estoque", "Gestão Financeira", "RH Digital", "Relatórios Avançados"]
  }, {
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e workflows complexos para economizar tempo e reduzir erros.",
    features: ["Workflows Automatizados", "Integração de Sistemas", "APIs Customizadas", "Monitoramento 24/7"]
  }, {
    title: "Business Intelligence",
    description: "Transforme dados em insights valiosos com dashboards interativos e análises preditivas.",
    features: ["Dashboards Personalizados", "Análise Preditiva", "KPIs em Tempo Real", "Relatórios Executivos"]
  }, {
    title: "Desenvolvimento de Aplicativos",
    description: "Aplicações web e mobile sob medida para atender as necessidades específicas do seu negócio.",
    features: ["Apps Mobile", "Sistemas Web", "Integração Cloud", "UX/UI Profissional"]
  }];
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do email
    console.log('Email cadastrado:', email);
    setEmail('');
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className={`scroll-reveal ${heroVisible ? 'revealed' : ''} pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-logge-light-blue to-logge-dark-blue text-white`}>
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Soluções Tecnológicas para <span className="text-white/90">Sua Empresa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
              Transforme seus desafios empresariais em oportunidades de crescimento com soluções personalizadas que impulsionam resultados e otimizam processos.
            </p>
            <Button className="bg-white text-logge-dark-blue hover:bg-white/90 hover:scale-105 font-semibold py-4 px-8 rounded-md transition-all duration-300 text-lg shadow-medium hover:shadow-strong" onClick={() => document.getElementById('contato')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Solicitar Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-title">
                Por que Escolher Nossas Soluções?
              </h2>
              <p className="section-subtitle">
                Desenvolvemos tecnologia que gera resultados concretos para o crescimento do seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => <div key={index} className={`scroll-reveal scroll-reveal-stagger ${benefitsVisible ? 'revealed' : ''} text-center p-6 rounded-lg card-hover-subtle`}>
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-logge-dark-blue">{benefit.title}</h3>
                  <p className="text-logge-gray-300 leading-relaxed">{benefit.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        

        {/* Services Grid Section */}
        <section ref={servicesRef} className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-title">
                Nossas Soluções Empresariais
              </h2>
              <p className="section-subtitle">
                Oferecemos um portfólio completo de soluções tecnológicas para impulsionar seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => <div key={index} className={`scroll-reveal scroll-reveal-stagger ${servicesVisible ? 'revealed' : ''} bg-white p-6 rounded-lg shadow-soft border border-gray-100 card-hover h-full flex flex-col`}>
                  <div className="mb-4">
                    <Users className="h-12 w-12 text-logge-light-blue mb-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-logge-dark-blue">{service.title}</h3>
                  <p className="text-logge-gray-300 mb-4 flex-grow">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm text-logge-gray-400">
                        <CheckCircle className="h-4 w-4 text-logge-light-blue mr-2 flex-shrink-0" />
                        {feature}
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section ref={signupRef} id="signup" className="py-12 md:py-20 bg-logge-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className={`scroll-reveal ${signupVisible ? 'revealed' : ''} max-w-2xl mx-auto text-center`}>
              <Mail className="h-16 w-16 text-logge-light-blue mx-auto mb-6" />
              <h2 className="section-title mb-4">
                Receba Conteúdo Exclusivo
              </h2>
              <p className="section-subtitle mb-8">
                Cadastre-se para receber dicas, estudos de caso e novidades sobre transformação digital empresarial.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input type="email" placeholder="Seu e-mail empresarial" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 py-3 px-4 text-base" />
                <Button type="submit" className="bg-logge-light-blue hover:bg-logge-dark-blue hover:scale-105 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 text-base shadow-medium hover:shadow-strong whitespace-nowrap">
                  Cadastrar
                </Button>
              </form>
              
              <p className="text-sm text-logge-gray-300 mt-4">
                Ao se cadastrar, você concorda em receber nossos e-mails. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default SolucoesEmpresas;