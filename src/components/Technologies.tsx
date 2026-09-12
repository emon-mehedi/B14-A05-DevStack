import { use, useState} from "react";
import type { ITechnologiesProps, ITechType } from "./AllTypes";
import { Tech } from "./Tech";
import toast, { Toaster } from "react-hot-toast";
import { YourStack } from "./YourStack";

export const brandGradient='bg-[linear-gradient(to_right,#f97316,#ec4899,#8b5cf6)]'

export function Technologies({promise}:ITechnologiesProps){
  
  const techList=use(promise);
  
  //Adding technology to stack
  const [stack, setStack]=useState<ITechType[]>([]);
  const handleStack=(tech:ITechType):void=>{
    const exists=stack.find(each=>each.id===tech.id);
    if(exists){
      toast.error("Already exists in stack");
      return
    } else {
      const newStack=[...stack, tech];
      setStack(newStack);
      toast.success("Added to stack")
    }
  }


  //Removing items from stack
  const removeStack=(tech:ITechType):void=>{
    const newStack=stack.filter(each=>each.id!==tech.id);
    setStack(newStack);
    toast.success("Removed from stack")
  }


  return(
    <div className="container mx-auto px-2 md:px-0">
      <Toaster position="top-right"/>
      <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left mb-3">Explore the <span className=" text-[#cc4fb8]">Technolgies</span></h1>
      <p className="text-center md:text-left mb-3">Pick one technology per category to build your ideal stack</p>
      <div className="flex flex-col md:flex-row md:gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-3">
          {
            techList.map(tech=><Tech key={tech.id} tech={tech} handleStack={handleStack} stack={stack}/>)
          }
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <div className="flex flex-col items-start shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl">
            <h3 className="text-2xl font-bold">Your Stack</h3>
            <p>{stack.length===1?"1 Technology Selected":stack.length>1?`${stack.length} Technologies Selected`:"No technology Selected"} </p>
            <div className="w-full">{
              stack.length===0
                ?<button className="btn btn-dash w-full mt-3 py-8 rounded-xl">Your stack is empty</button>
                :<div>
                  <div>
                    {
                      stack.map(tech=><YourStack key={tech.id} tech={tech}  removeStack={removeStack} />)
                    }
                  </div>
                  <button className="border w-full mt-10 rounded-xl py-2 font-bold text-[#ff0000]"  onClick={()=>{setStack([]); toast.success("All technologies removed from stack!")}}>Remove All</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}