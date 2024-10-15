import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import React from 'react';

const AnimatedPageWrapper = ({ className, children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        className={className}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPageWrapper;