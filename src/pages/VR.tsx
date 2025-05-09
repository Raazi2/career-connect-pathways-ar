
import React from 'react';
import { motion } from 'framer-motion';
import VRExperience from '@/components/VRExperience';

const VR = () => {
  return (
    <div className="min-h-full bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Virtual Reality Career Immersion</h1>
          <p className="text-muted-foreground">
            Step into virtual workplaces and experience different careers firsthand
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hover-lift"
        >
          <VRExperience />
        </motion.div>
      </div>
    </div>
  );
};

export default VR;
