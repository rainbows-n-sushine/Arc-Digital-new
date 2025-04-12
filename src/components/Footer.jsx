import {  contactLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20  border-t py-10 border-neutral-700 mt-50">
      <div className="grid grid-cols-2 ml-35 pl-20 lg:grid-cols-3 gap-4">
        <div>
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
    
      </div>
    </footer>
  );
};

export default Footer;
