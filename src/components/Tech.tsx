import { MdOutlineStar } from "react-icons/md";
import type { ITechProps} from "./AllTypes";
import { GiCheckMark } from "react-icons/gi";




export function Tech({tech, handleStack, stack}:ITechProps){
  return(
    <div className="grid grid-rows-subgrid row-span-4 shadow-[0_0_15px_rgba(0,0,0,0.15)] md:shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl relative mx-2 md:mx-0">
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
        <button className="btn btn-neutral h-10 w-full mb-2 rounded-xl" disabled={stack.some(technology=>technology.id===tech.id)} onClick={()=>{handleStack(tech)}}>{stack.some(technology=>technology.id===tech.id)?<><GiCheckMark/><span>Added to Stack</span></>:"Add to Stack"}</button>
      </div>
      <button style={{backgroundColor:tech.color}} className="absolute right-5 top-5 text-white text-sm font-bold border rounded-full px-4 pb-0.5">{tech.badge}</button>
    </div>
  )
}