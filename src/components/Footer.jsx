import {  contactLinks } from "../constants";
import ShootingArrowLogo from "./Animation/ShootingArrowLogo";
import FadeInParagraph from "./Animation/FadeInParagraph";
const Footer = () => {
  return (
    <footer className="  border-t py-4 border-neutral-300 mt-50 flex px-6">
      <div className="flex lg:ml-12 ml-[2px] lg:flex-col-2 gap-0 ">
        <FadeInParagraph className="lg:ml-[100px] ml-auto w-[158px]">
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
      <div className="flex items-center h-[200px] ml-auto lg:ml-80vw ">
          <ShootingArrowLogo className="lg:h-[200px] w-full h-[150px]"/>
                  </div>
    </footer>
  );
};

export default Footer;
