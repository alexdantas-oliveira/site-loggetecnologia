import { ContactFormBody } from "./ContactFormBody";

const ContactForm = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-logge-dark-blue">Entre em Contato</h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-logge-gray-400">Estamos prontos para ouvir sobre seus desafios e apresentar soluções personalizadas para a sua empresa ou município.</p>
        </div>

        <ContactFormBody />
      </div>
    </section>
  );
};

export default ContactForm;