import React from 'react';
import { motion as Motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1] 
      }}
      style={{ width: '100%', minHeight: '100vh', paddingTop: '80px' }}
    >
      {children}
    </Motion.div>
  );
};

export default PageTransition;
