import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import OurTeam from "./components/OurTeam";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServiceSection />
        {/* <Workflow /> */}
        <Pricing />
        <OurTeam />
        <Footer />
      </div>
    </div>
  );
};

export default App;
