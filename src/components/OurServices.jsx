import { services } from "../constants";

const OurServices = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="services">
      <div className="text-center"> 
        <span className="bg-neutral-200 text-blue-800 rounded-full  py-3 px-3 w-full h-[700px] text-[125%] font-medium px-2 py-1 uppercase">
         Our services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-left ml-6 mb-28 mt-20">
         Digital {" "}
          <span className="bg-blue-900 text-transparent bg-clip-text">
            Marketing
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                {service.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{service.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
