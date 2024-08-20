import "./App.css";
import CenterPage from "./components/CenterPage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <div className="pt-16 sm:pt-24">
        <HeroSection />
        <Features />
        <CenterPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
