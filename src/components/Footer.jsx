import {  contactLinks } from "../constants";
import ShootingArrowLogo from "./Animation/shootingArrowLogo";
import logo from "../assets/logo.png"
import FadeInParagraph from "./Animation/fadeInParagraph";
const Footer = () => {
  return (
    <footer className="  border-t py-4 border-neutral-300 mt-50 flex">
      <div className="flex lg:ml-12 ml-[2px] lg:grid-cols-3 gap-0 ">
        <FadeInParagraph className="lg:ml-[80px] ml-0 w-[158px]">
          <h3 className="text-md font-semibold text-neutral-900 mt-6">Contacts</h3>
          <div className="flex lg:gap-[100px] gap-[50px] mt-[16px] ">
            <ul className="space-y-4">
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
        </FadeInParagraph>
       
    
      </div>
      <div className="flex items-center h-[200px] ml-auto lg:ml-[500px]  ">
          <ShootingArrowLogo className="lg:h-[200px] w-full h-[150px]"/>
                  </div>
    </footer>
  );
};

export default Footer;
