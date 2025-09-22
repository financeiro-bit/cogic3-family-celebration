import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Meetings from "@/components/Meetings";
import ReadingSchedule from "@/components/ReadingSchedule";
import Founder from "@/components/Founder";
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
      <ReadingSchedule />
      <Founder />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;