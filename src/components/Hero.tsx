import hero from "../assets/banner-stack.png";

export function Hero() {
  return (
    <div className="flex flex-row container mx-auto">
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-6xl font-bold my-4">Build Your Ideal</h1>
        <h1 className="text-6xl font-bold my-4">
          <span className="bg-linear-to-r from-[#ff632f] to-[#8503ff] bg-clip-text text-transparent">Development Stack</span>
        </h1>
        <p className="mb-8 max-w-110">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project
        </p>
        <div>
          <button className="bg-linear-to-r from-[#ff632f] to-[#ec4898] text-white w-40 py-1 rounded-box mr-2">Explore Technologies</button>
          <button className="w-40 border rounded-box px-2 py-1">Learn More</button>
        </div>
      </div>
      <img className="flex-1" src={hero} alt="Hero image" />
    </div>
  );
}
