import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

export function Nav(){
  const [sidebarAside, setSidebarAside]=useState<boolean>(true);

  return(
    <nav className='shadow sticky top-0 bg-white z-10'>
      <aside className={`md:hidden absolute bg-white p-5 pb-10 shadow transition-transform duration-1000 flex flex-row justify-between items-start w-full ${sidebarAside? '-translate-x-full':'translate-x-0'}`}>
        <ul className='flex flex-col [&>li]:mx-2 [&>li]:my-2'>
          <li><a href="#" className='text-[#a9256b]'>Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="p-2" onClick={()=>setSidebarAside(true)}><RxCross1/></button>
      </aside>
      <div className='flex flex-row container mx-auto justify-between items-center px-2 py-2'>
        <img src={hamburger} alt="hamburger" className='md:hidden' onClick={()=>setSidebarAside(false)}/>
        <img src={logo} alt="logo" />
        <ul className='hidden md:flex md:flex-row md:[&>li]:mx-2'>
          <li><a href="#" className='text-[#a9256b]'>Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div>
          <button className='px-2'>Sign In</button>
          <button className='btn btn-secondary rounded-full h-7'>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
