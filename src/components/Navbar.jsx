import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
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
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a> */}
            <a
              href="#"
              className="bg-blue-900 py-2 px-3 text-white mr-20 px-10 rounded-md"
            >
              Sign in
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-blue-200  py-7 px-0  flex flex-col  gap-1 items-center lg:hidden w-[40%] h-[300px] rounded-[10px] ">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2 text-[14px]">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 space-x-6">
              <a href="#" className="py-2 px-5 mx-6 w-[57%]  border border-black rounded-md justify-center text-center flex text-[12px]">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-2 w-[57%] flex justify-center align-center mr-[20px] rounded-mdbg-blue-900 text-white text-[12px]"
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
