import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const ShootingArrowLogo = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [triggerAnim, setTriggerAnim] = useState(false);

  useEffect(() => {
    if (inView) {
      setTriggerAnim(true);
    } else {
      setTriggerAnim(false); // reset for re-trigger
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.img
        src={logo}
        alt="arc.logo"
        className="w-[300px] h-auto"
        key={triggerAnim ? "animate" : "reset"}
        initial={{ x: -1000, opacity: 0, rotate: -10 }}
        animate={
          triggerAnim
            ? {
                x: [-1000, 100, -40, 10, 0],
                opacity: [0, 1, 1, 1, 1],
                rotate: [-10, 3, -2, 1, 0],
              }
            : {}
        }
        transition={{
          duration: 3.2, // ✨ slightly faster (was 5)
          ease: [0.25, 1, 0.5, 1],
          times: [0, 0.4, 0.6, 0.8, 1],
        }}
      />
    </div>
  );
};

export default ShootingArrowLogo;
