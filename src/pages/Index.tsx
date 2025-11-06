import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Differentials from "@/components/Differentials";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        <Differentials />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </div>;
};
export default Index;