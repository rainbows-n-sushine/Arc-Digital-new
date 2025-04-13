import {  contactLinksTwo, contactLinksOne } from "../constants";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="  border-t py-4 border-neutral-300 mt-50">
      <div className="flex lg;ml-12 lg:grid-cols-3 gap-0 ">
        <div className="lg:ml-[80px] ml-4">
          <h3 className="text-md font-semibold mb-4 text-neutral-900 mt-6">Contacts</h3>
          <div className="flex lg:gap-[100px] gap-[20px] mt-[35px] ">
            <ul className="space-y-4">
            {contactLinksOne.map((link, index) => (
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
          <ul className="space-y-4 ">
            {contactLinksTwo.map((link, index) => (
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
        </div>
        <div className="flex items-center h-[200px] ml-auto lg:ml-[600px]  ">
                    <img className="lg:h-40 lg:w-40 h-20 w-20" src={logo} alt="Logo" />
                  </div>
    
      </div>
    </footer>
  );
};

export default Footer;
