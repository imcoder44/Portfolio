import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { name: "Java", icon: "☕", tooltip: "Object-oriented design, multithreading, Spring Boot" },
  { name: "Python", icon: "🐍", tooltip: "Scripting, automation, Flask, Cuckoo Sandbox integration" },
  { name: "Bash", icon: "💻", tooltip: "Linux automation, recon frameworks, CI/CD scripts" },
  { name: "C / C++", icon: "⚡", tooltip: "Low-level programming, buffer management, memory analysis" },
  { name: "Networking", icon: "🌐", tooltip: "Socket programming, TCP/UDP, packet capture with Wireshark" },
  { name: "Docker & Linux", icon: "🐳", tooltip: "Container hardening, host-based network isolation" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black border-t border-green-500/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.div
          variants={itemVariants}
          className="terminal-window max-w-4xl mx-auto mb-16"
        >
          <div className="terminal-header">
            <span className="text-green-500">root@tanishq:/home/arsenal$ cat skills.cfg</span>
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-mono mb-4">
              &gt; TECHNICAL_ARSENAL.CFG
            </h2>
            <div className="text-green-400 font-mono text-sm">
              [LOADING_SKILL_MODULES...]
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  className="terminal-window group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="terminal-header">
                    <span className="text-green-500 text-xs">{skill.name.toLowerCase()}.exe</span>
                  </div>
                  <div className="terminal-content text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">
                      {skill.icon}
                    </div>
                    <p className="text-green-400 font-mono text-sm font-medium">{skill.name}</p>
                    <div className="text-green-500 font-mono text-xs mt-1">[ACTIVE]</div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent className="bg-black border-green-500/30 text-green-400 font-mono">
                <p className="max-w-xs">{skill.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
