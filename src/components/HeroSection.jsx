
import ShootingArrowLogo from "./Animation/ShootingArrowLogo"; // adjust path if needed
import FadeInParagraph from "./Animation/FadeInParagraph";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-0 lg:mt-0" id="hero">
      {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1> */}
     <ShootingArrowLogo />
     <FadeInParagraph className="font-medium text-[20px] text-left mt-10" >Where Technology Meets Marketing Brilliance.</FadeInParagraph>
      <p className="mt-12 text-center text-neutral-500 max-w-4xl text-[12px]">
      At Arc Digital, we blend cutting-edge technology with innovative marketing
       strategies to create powerful digital experiences. Our expert team leverages 
       data-driven insights and the latest trends to craft campaigns that elevate your 
       brand and drive meaningful growth. With a focus on results, we’re here to 
       transform your digital presence and ensure your business stands out in the 
       ever-evolving online world.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-blue-900 py-2 px-4 mx-3 rounded-md text-white text-center justify-center w-full h-[50%] "
        >
         LinkedIn
        </a>
        <a href="#" className="py-2 px-4 mx-3 rounded-md border border-[3px] border-neutral-200 w-full h-[50%] ">
        Email
        </a>
      </div>
     
    </div>
  );
};

export default HeroSection;
