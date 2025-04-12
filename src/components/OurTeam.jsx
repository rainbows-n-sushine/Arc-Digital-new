import { teamMembers } from "../constants";

const OurTeam = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20 overflow-hidden h-full">
      <h2 className="text-4xl sm:text-6xl text-center mb-7 z-10 mb-40 text-left">Our Team</h2>

      {/* Rotating team members for larger screens */}
      <div className="relative w-[600px] h-[600px] rounded-full border-none flex items-center justify-center mb-40 h-[700px] hidden sm:block">
        {/* Rotating members group */}
        <div className="absolute w-auto h-[600px] animate-orbit mt-[100px] px-[300px]">
          {teamMembers.map((member, index) => {
            const total = teamMembers.length;
            const angle = (360 / total) * index;
            const radius = 190;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute w-60 h-60 rounded-full bg-blue-200 text-center flex flex-col items-center justify-center shadow-md border border-neutral-300 "
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

      {/* Horizontal scroll for smaller screens */}
      <div className="w-full overflow-x-auto flex items-center justify-start space-x-6 pb-8 mt-10 sm:hidden">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 h-60 rounded-full bg-blue-200 text-center flex flex-col items-center justify-center shadow-md border border-neutral-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full border mb-2"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-sm italic text-neutral-700">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
