import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RadarAnimation = () => {
  const [assetPoints] = useState([
    { x: 120, y: 80, delay: 0 },
    { x: 200, y: 140, delay: 0.5 },
    { x: 160, y: 200, delay: 1 },
    { x: 280, y: 120, delay: 1.5 },
    { x: 240, y: 240, delay: 2 },
    { x: 100, y: 220, delay: 2.5 },
    { x: 320, y: 180, delay: 3 },
    { x: 180, y: 160, delay: 3.5 },
  ]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="relative z-10"
      >
        {/* Grid lines - concentric circles */}
        {[80, 120, 160, 200].map((radius, i) => (
          <motion.circle
            key={`circle-${i}`}
            cx="200"
            cy="200"
            r={radius}
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid lines - radial */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x2 = 200 + Math.cos(angle) * 200;
          const y2 = 200 + Math.sin(angle) * 200;
          return (
            <motion.line
              key={`line-${i}`}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Rotating scan sweep */}
        <motion.g>
          <motion.line
            x1="200"
            y1="200"
            x2="200"
            y2="0"
            stroke="url(#scanGradient)"
            strokeWidth="2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ originX: "200px", originY: "200px" }}
          />
          <defs>
            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
        </motion.g>

        {/* Asset points */}
        {assetPoints.map((point, i) => (
          <g key={`point-${i}`}>
            {/* Outer pulse ring */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill="none"
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="1.5"
              initial={{ r: 8, opacity: 0 }}
              animate={{
                r: [8, 16, 8],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: point.delay,
                ease: "easeInOut",
              }}
            />
            {/* Inner dot */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="rgba(34, 197, 94, 0.9)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: point.delay,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Center hub */}
        <motion.circle
          cx="200"
          cy="200"
          r="6"
          fill="rgba(59, 130, 246, 0.8)"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <circle
          cx="200"
          cy="200"
          r="3"
          fill="rgba(255, 255, 255, 0.9)"
        />
      </svg>

      {/* Subtle scan overlay effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(15, 23, 42, 0.4) 100%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default RadarAnimation;