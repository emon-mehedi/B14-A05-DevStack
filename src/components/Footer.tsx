import { PiCopyright } from "react-icons/pi";
import logo from "../assets/logo-text.png";
import { RxDotFilled } from "react-icons/rx";

export function Footer() {
  return (
    <footer className="container mx-auto px-2 mt-20 pt-10 md:px-0 border-t border-t-gray-200">
      <div className="flex flex-row mb-15">
        <div className="md:flex-2">
          <img src={logo} alt="logo" className="mx-auto md:mx-0" />
          <p className="my-3 mx-auto md:mx-0 text-center md:text-left">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex flex-row items-center [&>li]:mr-2 [&>li]:font-bold w-fit mx-auto md:mx-0">
            <li>
              <a href="#">Github</a>
            </li>
            <RxDotFilled className="md:hidden" />
            <li>
              <a href="#">Twitter</a>
            </li>
            <RxDotFilled className="md:hidden" />
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex-3 md:flex md:flex-row md:justify-between">
          <div>
            <h3 className="font-bold">Product</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LEGAL</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center mt-5 mb-15">
        <p>
          <PiCopyright className="inline" />
          2026 Dev stack. All rights reserved.
        </p>
        <ul className="flex flex-row gap-5">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
