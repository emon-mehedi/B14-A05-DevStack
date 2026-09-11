
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div className="mb-100">
      <Nav/>
      <Hero/>
      <Technologies/>
      <Footer/>
    </div>
  );
}

export default App;