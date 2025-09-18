import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Worship from "@/components/Worship";
import Services from "@/components/Services";

import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Worship />
      <Services />
      
      <Location />
      <Footer />
    </div>
  );
};

export default Index;