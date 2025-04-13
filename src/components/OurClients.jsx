import { useDragScroll } from '../hooks/useDragScroll';

const OurClients = () => {
  const logos = [
    "/logos/client1.jpg",
    "/logos/client2.jpg",
    "/logos/client3.jpg",
    "/logos/client4.jpg",
    "/logos/client5.jpg",
    "/logos/client6.jpg",
    "/logos/client7.jpg",
    "/logos/client8.jpg",
    "/logos/client9.jpg",
    "/logos/client10.jpg",
    "/logos/client11.jpg",
    "/logos/client12.jpg",
    "/logos/client13.jpg",
    "/logos/client14.jpg",
    "/logos/client15.jpg",
  ];

  const dragRef = useDragScroll();

  return (
    <div className="w-full mt-20 my-12 text-center border-b border-neutral-300" id="clients">
       <span className="bg-neutral-200 text-blue-800 rounded-full  py-3 px-3 w-full h-[700px] text-[125%] font-medium  uppercase items-center">
         Our clients
        </span>
      <div
        ref={dragRef}
        className="relative overflow-x-auto scrollbar-hide mt-10 cursor-grab"
      >
        <div className="flex gap-20 w-max animate-scroll px-4 pt-[20px] pb-10 my-[80px]">
          {[...logos, ...logos].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Client ${index + 1}`}
            className="h-40 w-auto object-contain"
          />
        ))}
      </div>

      </div>
    </div>
  );
};

export default OurClients;
