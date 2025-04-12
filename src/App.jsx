import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";

import Footer from "./components/Footer";
import OurClients from "./components/Ourclients";
import OurTeam from "./components/OurTeam";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <OurServices />
        <OurClients />
        <OurTeam />
        <Footer />
      </div>
    </div>
  );
};

export default App;
