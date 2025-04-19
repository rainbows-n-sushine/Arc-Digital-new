import { services } from "../constants";
import { PlugZap } from "lucide-react";
import FadeInParagraph from "./Animation/FadeInParagraph";

const OurServices = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-300 min-h-[800px]" id="services">
      <div className="text-center"> 
        <span className="bg-neutral-200 text-blue-800 rounded-full  py-3 px-3 w-full h-[700px] text-[125%] font-medium  uppercase">
         Our services
        </span>
    
      </div>
      <div className="flex flex-wrap mt-[80px] lg:mt-100 ">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <FadeInParagraph className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                <PlugZap/>
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{service.text}</h5>
                <p className="text-[12px] p-2 mb-20 text-neutral-500">
                  {service.description}
                </p>
              </div>
            </FadeInParagraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
