import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const FadeInParagraph = ({ children, className}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.2, // 20% of the element needs to be in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <motion.p
      ref={elementRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        duration: 5,
        ease: 'easeOut',
        delay: 1,
      }}
    >
      {children}
    </motion.p>
  );
};

export default FadeInParagraph;
