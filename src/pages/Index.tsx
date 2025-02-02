import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16"> {/* Add padding top to account for fixed header */}
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </div>
    </div>
  );
};

export default Index;