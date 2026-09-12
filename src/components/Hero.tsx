import hero from "../assets/banner-stack.png";
import { brandGradient } from "./Technologies";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:container px-2 mx-auto">
      <div className="flex flex-col justify-center flex-1 self-center mt-20 md:mt-0">
        <h1 className="text-3xl md:text-6xl text-center md:text-left font-bold md:my-4">Build Your Ideal</h1>
        <h1 className="text-3xl md:text-6xl text-center md:text-left font-bold md:my-4">
          <span className={`${brandGradient} bg-clip-text text-transparent`}>Development Stack</span>
        </h1>
        <p className="mb-8 max-w-110 text-center md:text-left mt-4 md:mt-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project
        </p>
        <div className="mx-auto md:mx-0">
          <button className={`${brandGradient} text-white w-45 px-3 text-sm md:text-md py-3 rounded-box mr-2`}>Explore Technologies</button>
          <button className="w-45 border rounded-box text-sm md:text-md py-3">Learn More</button>
        </div>
      </div>
      <img className="flex-1" src={hero} alt="Hero image" />
    </div>
  );
}
