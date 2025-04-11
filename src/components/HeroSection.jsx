import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import logo from "../assets/logo.png";
import ShootingArrowLogo from "./Animation/ShootingArrowLogo"; // adjust path if needed
import FadeInParagraph from "./Animation/FadeInParagraph";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1> */}
     <ShootingArrowLogo />
     <FadeInParagraph className="font-medium text-[20px] text-left mt-10" >Where Technology Meets Marketing Brilliance.</FadeInParagraph>
      <p className="mt-3 text-lg text-center text-neutral-500 max-w-4xl">
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
          className="bg-blue-900 py-3 px-4 mx-3 rounded-md text-white"
        >
         LinkedIn
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border border-[3px] border-neutral-200">
         Upwork
        </a>
      </div>
      {/* <h1 className="font-bold text-left text-[30px] font-medium "> Open Positions</h1>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;
