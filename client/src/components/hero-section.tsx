import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Particle Animation */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 animate-float"
        >
          <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
            Tanishq Arun Ingole
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 italic mb-12"
        >
          Aspiring Software Security Engineer & CEH-Aspirant
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="animate-bounce-arrow"
        >
          <ChevronDown className="mx-auto text-[hsl(199,89%,48%)] text-2xl mb-2" />
          <p className="text-sm text-slate-400">Scroll to explore →</p>
        </motion.div>
      </div>
    </section>
  );
}
