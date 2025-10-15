'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapesProps {
  className?: string;
}

export default function FloatingShapes({ className = '' }: FloatingShapesProps) {
  const shapes = [
    {
      id: 1,
      size: 'w-16 h-16',
      color: 'bg-white/10',
      position: 'top-20 left-10',
      animation: {
        y: [0, -20, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      },
      duration: 6,
    },
    {
      id: 2,
      size: 'w-12 h-12',
      color: 'bg-teal-400/20',
      position: 'top-40 right-20',
      animation: {
        y: [0, 30, 0],
        x: [0, 10, 0],
        rotate: [0, -180, 0],
      },
      duration: 8,
    },
    {
      id: 3,
      size: 'w-8 h-8',
      color: 'bg-white/5',
      position: 'bottom-40 left-20',
      animation: {
        y: [0, -15, 0],
        rotate: [0, 90, 0],
        scale: [1, 0.8, 1],
      },
      duration: 5,
    },
    {
      id: 4,
      size: 'w-20 h-20',
      color: 'bg-teal-300/15',
      position: 'bottom-20 right-10',
      animation: {
        y: [0, 25, 0],
        x: [0, -15, 0],
        rotate: [0, 270, 0],
      },
      duration: 10,
    },
    {
      id: 5,
      size: 'w-6 h-6',
      color: 'bg-white/8',
      position: 'top-1/2 left-1/4',
      animation: {
        y: [0, -10, 0],
        scale: [1, 1.2, 1],
      },
      duration: 4,
    },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} rounded-full blur-sm`}
          animate={shape.animation}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
