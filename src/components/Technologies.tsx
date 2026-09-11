import { use, useState} from "react";
import type { ITechnologiesProps, ITechType } from "./AllTypes";
import { Tech } from "./Tech";
import toast, { Toaster } from "react-hot-toast";

export function Technologies({promise}:ITechnologiesProps){

const [stack, setStack]=useState<ITechType[]>([]);

const handleStack=(tech:ITechType):void=>{
  const exists=stack.find(each=>each===tech);
  if(exists){
    toast.error("Technology already added");
    return
  } else {
    const newStack=[...stack, tech];
    setStack(newStack);
    toast.success("Added to stack")
  }
}

  const techList=use(promise);
  console.log(stack);
  return(
    <div className="container mx-auto mb-50">
      <Toaster position="top-right"/>
      <h1 className="text-6xl mb-3">Explore the <span className=" text-[#cc4fb8]">Technolgies</span></h1>
      <p className="mb-3">Pick one technology per category to build your ideal stack</p>
      <div className="flex flex-row gap-6">
        <div className="grid grid-cols-3 gap-3 flex-3">
          {
            techList.map(tech=><Tech key={tech.id} tech={tech} handleStack={handleStack}/>)
          }
        </div>
        <div className="flex-1">
          <div className="flex flex-col items-center shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl">
            <h3>Your Stach</h3>
            <p>No Technology Selected</p>
            <div>
              <p>Your stack is empty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}