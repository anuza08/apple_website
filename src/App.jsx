import "./App.css";
import Hero from "./components/hero";
import Highlights from "./components/highlight";
import Navbar from "./components/navbar";
import Model from "./components/model";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

export default App;
