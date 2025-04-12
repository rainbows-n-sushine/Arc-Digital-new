import {  contactLinks } from "../constants";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="  border-t py-10 border-neutral-700 mt-50">
      <div className="flex ml-12 lg:grid-cols-3 gap-0">
        <div className="lg:ml-[80px] ml-1">
          <h3 className="text-md font-semibold mb-4 text-neutral-900">Contacts</h3>
          <ul className="space-y-2">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  className="text-neutral-900 hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center h-[200px] ml-auto lg:ml-[800px] ">
                    <img className="h-40 w-40" src={logo} alt="Logo" />
                    
                   
                  </div>
    
      </div>
    </footer>
  );
};

export default Footer;
