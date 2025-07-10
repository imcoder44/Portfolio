import { motion } from "framer-motion";
import { ChevronDown, Terminal, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "root@cybersec:~$ whoami";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; x: number; char: string; delay: number }>>([]);

  useEffect(() => {
    const chars = ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F', '$', '#', '@', '*'];
    const newMatrixChars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)],
      delay: i * 0.2,
    }));
    setMatrixChars(newMatrixChars);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg matrix-bg">
      {/* Matrix Rain Effect */}
      {matrixChars.map((char) => (
        <motion.div
          key={char.id}
          className="absolute text-green-500 font-mono text-sm opacity-30"
          style={{
            left: `${char.x}%`,
            top: "-10%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: char.delay,
          }}
        >
          {char.char}
        </motion.div>
      ))}
      
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="terminal-window max-w-2xl mx-auto mb-8"
        >
          <div className="terminal-header flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <Terminal className="w-4 h-4" />
            <span>tanishq@hacker-terminal</span>
          </div>
          <div className="terminal-content text-left">
            <div className="text-green-500 font-mono text-sm mb-2">
              {displayText}
              <span className="animate-pulse">_</span>
            </div>
            {currentIndex >= fullText.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-green-400 font-mono text-sm"
              >
                &gt; Tanishq Arun Ingole
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6 font-mono glitch"
          data-text="ETHICAL HACKER"
        >
          <span className="text-green-500">
            ETHICAL HACKER
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <Shield className="text-green-500 w-6 h-6" />
          <span className="text-green-400 font-mono text-lg">
            CEH-Aspirant | Security Researcher
          </span>
          <Shield className="text-green-500 w-6 h-6" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="text-green-300 font-mono mb-12 max-w-2xl mx-auto"
        >
          <div className="bg-black/50 border border-green-500/30 rounded p-4">
            <div className="text-green-500 text-sm mb-2"># System Information</div>
            <div className="text-green-400 text-sm space-y-1">
              <div>Student: B.Tech Computer Science @ IIIT Pune</div>
              <div>Specialization: Cybersecurity & Ethical Hacking</div>
              <div>Status: Building secure digital infrastructure</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          className="animate-bounce-arrow"
        >
          <ChevronDown className="mx-auto text-green-500 text-2xl mb-2" />
          <p className="text-sm text-green-400 font-mono">[SCROLL_TO_EXPLORE] →</p>
        </motion.div>
      </div>
    </section>
  );
}