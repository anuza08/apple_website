import "./App.css";
import Hero from "./components/hero";
import Highlights from "./components/highlight";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
