import { MdOutlineStar } from "react-icons/md";
import type { ITechProps, ITechType } from "./AllTypes";



export function Tech({tech, handleStack}:ITechProps){
  return(
    <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl relative">
      <div>
        <img className="w-10" src={tech.icon} alt="icon" />
        <h3 className="text-xl font-bold">{tech.name}</h3>
        <p>{tech.description}</p>
      </div>
      <hr />
      <div>
        <div className="flex flex-row justify-between items-center mt-2 mb-4">
          <button className="bg-gray-100 px-2">{tech.category}</button>
          <p>{tech.difficulty}</p>
          <div className="flex flex-row items-center"><MdOutlineStar color="#fbbf24"/>{tech.rating}</div>
        </div>
        <button className="btn btn-neutral h-7 w-full mb-2" onClick={()=>handleStack(tech)}>Add to Stack</button>
      </div>
      <button className="absolute right-5 top-5 border rounded-full px-2 text-[]">{tech.badge}</button>
    </div>
  )
}