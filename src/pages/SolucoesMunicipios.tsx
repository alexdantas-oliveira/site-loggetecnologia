import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Users, TrendingUp, Target, CheckCircle, ArrowRight, GraduationCap, Heart, HandHeart, Vote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactFormBody } from "@/components/ContactFormBody";

const SolucoesMunicipios = () => {

  const [isContactOpen, setIsContactOpen] = useState(false);

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


  const benefits = [{
    icon: <TrendingUp className="h-12 w-12 text-logge-light-blue" />,
    title: "Eficiência na Gestão Pública",
    description: "Automatize processos administrativos e otimize serviços públicos para aumentar a eficiência municipal em até 40%."
  }, {
    icon: <Target className="h-12 w-12 text-logge-light-blue" />,
    title: "Decisões Baseadas em Dados",
    description: "Tenha acesso a dados consolidados e relatórios em tempo real para tomar decisões que impactem positivamente a população."
  }, {
    icon: <Building2 className="h-12 w-12 text-logge-light-blue" />,
    title: "Transparência e Modernização",
    description: "Implemente soluções que promovem transparência pública e modernizam os serviços oferecidos aos cidadãos."
  }];
  const services = [{
    title: "Logge Educação",
    description: "Soluções tecnológicas completas para modernizar a gestão educacional e melhorar a experiência de ensino-aprendizagem.",
    icon: <GraduationCap className="h-12 w-12 text-logge-light-blue mb-4" />,
    features: ["Sistema Acadêmico", "Gestão de Matrículas", "Portal do Aluno", "Biblioteca Digital", "Gestão Financeira", "Controle de Frequência", "Relatórios Pedagógicos", "Comunicação Escolar", "Calendário Acadêmico", "Gestão de Recursos"]
  }, {
    title: "Logge Saúde",
    description: "Sistema completo para gestão de unidades de saúde pública com foco na eficiência do atendimento e melhoria dos serviços médicos.",
    icon: <Heart className="h-12 w-12 text-logge-light-blue mb-4" />,
    features: ["Prontuário Eletrônico", "Agendamento Online", "Controle de Estoque", "Gestão de Leitos", "Sistema de Farmácia", "Relatórios Epidemiológicos", "Telemedicina", "Fila de Atendimento", "Controle de Vacinas", "Dashboard Médico"]
  }, {
    title: "Logge Assistência Social",
    description: "Plataforma integrada para gestão completa dos programas sociais e atendimento à população em vulnerabilidade social.",
    icon: <HandHeart className="h-12 w-12 text-logge-light-blue mb-4" />,
    features: ["Cadastro Único", "Gestão de Benefícios", "Acompanhamento Familiar", "Controle de Programas", "Relatórios Sociais", "Agenda de Atendimentos", "Monitoramento SUAS", "Gestão de Recursos", "Portal do Beneficiário", "Indicadores Sociais"]
  }, {
    title: "Logge Orçamento Colaborativo",
    description: "Plataforma digital completa para implementação do orçamento colaborativo, promovendo transparência e participação cidadã na gestão pública.",
    icon: <Users className="h-12 w-12 text-logge-light-blue mb-4" />,
    features: ["Portal de Votação", "Cadastro de Propostas", "Mapeamento de Demandas", "Dashboard Transparência", "Gestão de Assembleias", "Sistema de Ranking", "Relatórios Participativos", "Notificações Cidadãos", "Controle de Execução", "Analytics Participação"]
  }];



  const openContactModal = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onContactClick={openContactModal} />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className={`scroll-reveal ${heroVisible ? 'revealed' : ''} pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-logge-light-blue to-logge-dark-blue text-white`}>
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Soluções Tecnológicas para <span className="text-white/90">Governos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
              Modernize a gestão pública com soluções tecnológicas que promovem eficiência, transparência e aproximam o governo dos cidadãos.
            </p>
            <Button
              className="bg-white text-logge-dark-blue hover:bg-white/90 hover:scale-105 font-semibold py-4 px-8 rounded-md transition-all duration-300 text-lg shadow-medium hover:shadow-strong"
              onClick={openContactModal}
            >
              Solicitar Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-title">
                Por que Escolher Nossas Soluções Públicas?
              </h2>
              <p className="section-subtitle">
                Desenvolvemos tecnologia que gera resultados concretos para a modernização da gestão pública municipal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className={`scroll-reveal scroll-reveal-stagger ${benefitsVisible ? 'revealed' : ''} text-center p-6 rounded-lg card-hover-subtle`}>
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-logge-dark-blue">{benefit.title}</h3>
                  <p className="text-logge-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section ref={servicesRef} className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-title">
                Nossas Soluções para Municípios
              </h2>
              <p className="section-subtitle">
                Oferecemos um portfólio completo de soluções tecnológicas para modernizar a gestão pública municipal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`scroll-reveal scroll-reveal-stagger ${servicesVisible ? 'revealed' : ''} bg-white p-6 rounded-lg shadow-soft border border-gray-100 card-hover h-full flex flex-col`}>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-logge-dark-blue">{service.title}</h3>
                  <p className="text-logge-gray-300 mb-4 flex-grow">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-logge-gray-400">
                        <CheckCircle className="h-4 w-4 text-logge-light-blue mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[900px] w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-logge-dark-blue text-center">Entre em Contato</DialogTitle>
            <DialogDescription className="text-center">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ContactFormBody onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default SolucoesMunicipios;