import { RxCross1 } from "react-icons/rx";
import type { ITechType } from "./AllTypes";

export function YourStack({tech}:{tech:ITechType}){
  return(
    <div className="flex flex-row justify-between items-center border rounded-xl p-3 mb-2">
      <div className="flex flex-row">
        <img src={tech.icon} className="h-10 mr-2"/>
        <div>
          <h4 className="text-l font-bold">{tech.name}</h4>
          <p className="text-[0.7rem]">{tech.category}</p>
        </div>
      </div>
      <button><RxCross1/></button>
    </div>
  )
}