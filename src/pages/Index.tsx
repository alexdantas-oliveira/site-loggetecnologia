import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Differentials from "@/components/Differentials";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactFormBody } from "@/components/ContactFormBody";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onContactClick={openContactModal} />
      <main>
        <Hero onContactClick={openContactModal} />
        <Solutions />
        <Differentials />
        <CallToAction onContactClick={openContactModal} />
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
export default Index;