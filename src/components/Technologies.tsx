import { use} from "react";
import type { ITechnologiesProps } from "./AllTypes";


export function Technologies({promise}:ITechnologiesProps){

  const techList=use(promise);
  console.log(techList);
  return(
    <div className="container mx-auto mb-50">
      <h1 className="text-6xl mb-3">Explore the <span className=" text-[#cc4fb8]">Technolgies</span></h1>
      <p className="mb-3">Pick one technology per category to build your ideal stack</p>
      <div>
        <div>
          hi
        </div>
        <div>
          hi
        </div>
      </div>
    </div>
  )
}