import {Suspense, useState } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Technologies } from "./components/Technologies";
import type { ITechType } from "./components/AllTypes";

const technologyList=async():Promise<ITechType[]>=>{
  const res= await fetch('/db.json');
  const data= await res.json();
  return data
}
function App() {  
  
  const [techListPromise]=useState(technologyList());
  
  return (
    <div className="mb-100">
      <Nav/>
      <Hero/>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies promise={techListPromise}/>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;