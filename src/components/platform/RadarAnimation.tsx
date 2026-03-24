"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Activity, Shield, Zap, TrendingUp, AlertTriangle, Eye, FileText, Database } from "lucide-react";

interface MonitoringCapability {
  id: number;
  name: string;
  description: string;
  icon: any;
  metrics: string[];
}

const RadarAnimation = () => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  
  const capabilities: MonitoringCapability[] = [
    {
      id: 0,
      name: "Live Job Tracking",
      description: "Real-time monitoring of all active maintenance jobs across the national estate",
      icon: Activity,
      metrics: ["247 active jobs", "8 min avg response", "98% on-time completion"]
    },
    {
      id: 1,
      name: "Compliance Status",
      description: "Continuous monitoring of statutory compliance across fire, electrical, and water safety",
      icon: Shield,
      metrics: ["100% fire compliance", "Zero overdue EICR", "L8 audit ready"]
    },
    {
      id: 2,
      name: "Asset Performance",
      description: "Predictive analytics on critical equipment performance and failure patterns",
      icon: TrendingUp,
      metrics: ["1,247 assets tracked", "12% failure reduction", "£127k savings YTD"]
    },
    {
      id: 3,
      name: "Energy Monitoring",
      description: "Live energy consumption tracking with anomaly detection and optimization alerts",
      icon: Zap,
      metrics: ["Real-time usage data", "18% reduction achieved", "TM44 compliant"]
    },
    {
      id: 4,
      name: "Risk Intelligence",
      description: "Automated risk scoring across sites with proactive escalation protocols",
      icon: AlertTriangle,
      metrics: ["24 sites monitored", "3 high-risk alerts", "Zero safety incidents"]
    },
    {
      id: 5,
      name: "Document Control",
      description: "Centralized certification and documentation with automatic expiry alerts",
      icon: FileText,
      metrics: ["8,432 documents", "100% audit trail", "Zero expired certs"]
    },
    {
      id: 6,
      name: "Performance Analytics",
      description: "Executive dashboards with KPI tracking and predictive trend analysis",
      icon: Eye,
      metrics: ["Real-time SLA tracking", "95% first-time fix", "Director visibility"]
    },
    {
      id: 7,
      name: "Asset Register",
      description: "Complete asset lifecycle management with service history and warranty tracking",
      icon: Database,
      metrics: ["Full audit trail", "Service history", "Lifecycle planning"]
    }
  ];

  const [assetPoints] = useState([
    { x: 120, y: 80, delay: 0, capabilityId: 0 },
    { x: 200, y: 140, delay: 0.5, capabilityId: 1 },
    { x: 160, y: 200, delay: 1, capabilityId: 2 },
    { x: 280, y: 120, delay: 1.5, capabilityId: 3 },
    { x: 240, y: 240, delay: 2, capabilityId: 4 },
    { x: 100, y: 220, delay: 2.5, capabilityId: 5 },
    { x: 320, y: 180, delay: 3, capabilityId: 6 },
    { x: 180, y: 160, delay: 3.5, capabilityId: 7 },
  ]);

  const handlePointClick = (capabilityId: number) => {
    setSelectedPoint(selectedPoint === capabilityId ? null : capabilityId);
  };

  const selectedCapability = selectedPoint !== null ? capabilities[selectedPoint] : null;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
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
        {assetPoints.map((point, i) => {
          const isSelected = selectedPoint === point.capabilityId;
          return (
            <g 
              key={`point-${i}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handlePointClick(point.capabilityId)}
            >
              {/* Outer pulse ring */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="none"
                stroke={isSelected ? "rgba(59, 130, 246, 0.8)" : "rgba(34, 197, 94, 0.5)"}
                strokeWidth={isSelected ? "2" : "1.5"}
                initial={{ r: 8, opacity: 0 }}
                animate={{
                  r: isSelected ? [8, 20, 8] : [8, 16, 8],
                  opacity: isSelected ? [0.8, 0.3, 0.8] : [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: point.delay,
                  ease: "easeInOut",
                }}
              />
              {/* Interactive hover ring */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="10"
                fill="transparent"
                stroke="transparent"
                strokeWidth="10"
                whileHover={{ 
                  stroke: "rgba(59, 130, 246, 0.3)",
                  r: 15
                }}
              />
              {/* Inner dot */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill={isSelected ? "rgba(59, 130, 246, 0.9)" : "rgba(34, 197, 94, 0.9)"}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: isSelected ? [1, 1.4, 1] : [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: point.delay,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

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

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedCapability && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md"
            style={{ zIndex: 50 }}
          >
            <div 
              className="rounded-lg p-6 shadow-2xl border backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="p-3 rounded-lg"
                  style={{ 
                    background: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <selectedCapability.icon 
                    className="h-6 w-6"
                    style={{ color: "rgb(59, 130, 246)" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: "hsl(0, 0%, 98%)" }}
                  >
                    {selectedCapability.name}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "hsl(220, 20%, 75%)" }}
                  >
                    {selectedCapability.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {selectedCapability.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "hsl(220, 20%, 85%)" }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "rgb(34, 197, 94)" }}
                    />
                    <span>{metric}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setSelectedPoint(null)}
                className="absolute top-4 right-4 text-sm opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: "hsl(220, 20%, 75%)" }}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RadarAnimation;