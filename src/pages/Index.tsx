import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgramStructure from "@/components/ProgramStructure";
import Books from "@/components/Books";
import Meetings from "@/components/Meetings";
import ReadingSchedule from "@/components/ReadingSchedule";
import Founder from "@/components/Founder";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <div id="programa">
        <ProgramStructure />
      </div>
      <Books />
      <Meetings />
      <ReadingSchedule />
      <Founder />
      <Location />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;