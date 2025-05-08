import { About } from "./sections/About";
import ComparisonTable from "./sections/ComparisonTable";
import Footer from "./sections/Footer";
import { HeroSection } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import Tokenomics from "./sections/Tokenomics";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ComparisonTable />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
