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
