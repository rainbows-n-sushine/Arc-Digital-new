import { teamMembers } from "../constants";

const OurTeam = () => {
  return (
    <div className="relative w-full h-[700px] flex flex-col items-center justify-center mt-20 overflow-hidden">
      <h2 className="text-4xl sm:text-6xl text-center mb-10 z-10">Our Team</h2>

      {/* Invisible "table circle" */}
      <div className="relative w-[600px] h-[600px] rounded-full border-none flex items-center justify-center mb-16">
        {/* Rotating members group */}
        <div className="absolute w-auto h-[600px] animate-orbit mt-[100px] ">
          {teamMembers.map((member, index) => {
            const total = teamMembers.length;
            const angle = (360 / total) * index;
            const radius = 170;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute w-40 h-40 rounded-full bg-blue-200 text-center flex flex-col items-center justify-center shadow-md border border-neutral-300 w-48 h-48 "
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full border mb-2" // Increased size
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm italic text-neutral-700">
                  {member.position}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
