import { teamMembers } from "../constants";
import { useDragScroll } from '../hooks/useDragScroll';
import {useState} from "react"
import "../index.css"

const OurTeam = () => {
  const dragRef = useDragScroll();
  const [hoveredMember, setHoveredMember] = useState(null);
  return (
    <div className="text-center text-[18px] pt-[30px]" id="team">
        <h2 className="text-3xl sm:text-[38px] lg:text-[38px] mt-10 lg:mt-20 tracking-wide text-center ml-6 mb-2 mt-20">
         Our {" "}
          <span className="bg-blue-900 text-transparent bg-clip-text">
            Team
          </span>
        </h2>
      
    <div className="relative flex flex-col items-center justify-center  overflow-hidden h-full" >
     

      {/* Rotating team members for larger screens */}
      <div className="relative w-[600px] h-[600px] rounded-full border-none flex items-center justify-center mb-40 h-[700px] hidden sm:block">
        {/* Rotating members group */}
        <div className="absolute w-auto h-[600px] animate-orbit mt-[100px] px-[300px] animate-rotate-center hover:[animation-play-state:paused]">
          {teamMembers.map((member, index) => {
            const total = teamMembers.length;
            const angle = (360 / total) * index;
            const radius = 180;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute w-60 h-60 rounded-full bg-blue-950 text-center flex flex-col items-center justify-center shadow-md border border-neutral-300 hover:bg-blue-300 "
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
              >
             
                <h4 className="text-lg font-semibold text-white ">{member.name}</h4>
                <p className="text-sm italic text-neutral-100">
                  {member.position}
                </p>
              
              </div>

            );
          })}
        </div>
        {hoveredMember && (
        <div className="absolute top-[60%] sm:left-[33%] sm:top-[52%]  bg-blue-100 text-black rounded-md p-3 shadow-xl w-[200px] z-30 transition-opacity duration-300 ease-in ">
          <h5 className="text-[16px] font-bold">{hoveredMember.name}</h5>
          <p className="italic text-[12px]">{hoveredMember.position}</p>
        </div>
      )}
      </div>
      

      {/* Horizontal scroll for smaller screens  */}
      <div
       ref={dragRef}
        className="relative overflow-x-auto scrollbar-hide mt-10 cursor-grab"
      >
      <div 
      className="w-full overflow-x-auto flex items-center justify-start space-x-6  pb-20  sm:hidden  relative animate-scroll ">
        {teamMembers.map((member, index) => (
          <div
         
            key={index}
            className="flex-shrink-0 w-60 h-60 rounded-full bg-blue-950 text-center flex flex-col items-center justify-center shadow-md border border-neutral-300 object-contain"
          >
           
            <h4 className="text-lg font-semibold text-white">{member.name}</h4>
            <p className="text-sm italic text-neutral-100">
              {member.position}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default OurTeam;
