import logo from '../assets/logo-text.png'

export function Nav(){
  return(
    <nav className='shadow sticky top-0 bg-white z-10'>
      <div className='flex flex-row container mx-auto justify-between items-center py-2'>
        <img src={logo} alt="logo" />
        <ul className='flex flex-row [&>li]:mx-2'>
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


// export function Nav(){
//   return(
//     <nav className='grid grid-cols-3 items-center container mx-auto shadow-sm w-[95%] p-2 mt-2 '>
//       <img src={hamaburger} alt="hamburger icon" className='justify-self-start h-3'/>
//       <img src={logo} alt="logo" className='justify-self-center w-25'/>
//       <div className='flex flex-row min-w justify-self-end w-20'>
//         <button className='btn bg-white h-7 border-none shadow-none '>Sign In</button>
//         <button className="btn btn-secondary rounded-full ml-3 h-7">Sign up</button>
//       </div>
//     </nav>
//   )
// }