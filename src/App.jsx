import "./App.css";
import Hero from "./components/hero";
import Highlights from "./components/highlight";
import Navbar from "./components/navbar";
import Model from "./components/model";
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
}

export default App;
