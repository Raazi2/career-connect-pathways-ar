
import React from 'react';
import { motion } from 'framer-motion';
import ARVisualization from '@/components/ARVisualization';

const AR = () => {
  return (
    <div className="min-h-full bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Augmented Reality Career Exploration</h1>
          <p className="text-gray-600">
            Use augmented reality to visualize different career environments and tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ARVisualization />
        </motion.div>
      </div>
    </div>
  );
};

export default AR;
