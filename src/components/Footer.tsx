import { PiCopyright } from "react-icons/pi";
import logo from '../assets/logo-text.png'

export function Footer(){
  return(
    <footer className="container mx-auto">
      <div className="flex flex-row mb-15">
        <div className="flex-2">
          <img src={logo} alt="logo" />
          <p className="my-3">Curated tools, technologies, and resources for developers building modern software.</p>
          <ul className="flex flex-row [&>li]:mr-2 [&>li]:font-bold">
            <li><a href="#">Github</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="flex-3 flex flex-row justify-between">
          <div>
            <h3 className="font-bold">Product</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LEGAL</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center my-15">
        <p><PiCopyright className="inline"/>2026 Dev stack. All rights reserved.</p>
        <ul className="flex flex-row gap-5">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
    </footer>
  )
}