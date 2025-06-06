import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.webp";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-200/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
        <a href="#hero">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Arc Digital</span>
           
          </div>
          </a>
          <ul className="hidden lg:flex mr-[50px] space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
          
            <a
              href="#"
              className="bg-blue-900 py-2 px-3 text-white mr-20 px-10 rounded-md"
            >
              Sign in
            </a>
          </div> */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 px-[2dvw] py-[2dvh] bg-blue-100 flex flex-col  gap-1 items-center lg:hidden w-[30dvw] h-[250px] rounded-[10px] items-center justify-center md:w-[15dvw]">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2 text-[12px]">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 space-x-1 text-center items-center">
              <a href="#" className="py-1  mx-0  w-[70%]  border border-black rounded-md justify-center text-center flex text-[12px]">
                Sign In
              </a>
              <a
                href="#"
                className=" px-[10px] py-[5px] w-[80%] flex justify-center align-center mx-[15px] rounded-md bg-blue-200 text-neutral-600 text-[12px] "
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
