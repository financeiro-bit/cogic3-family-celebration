import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Meetings from "@/components/Meetings";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Books />
      <Meetings />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;