import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const FadeInParagraph = ({ children, className }) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      console.log('IntersectionObserver is not supported');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Entry:', entry); 
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.2, 
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
    <motion.div
      ref={elementRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInParagraph;
