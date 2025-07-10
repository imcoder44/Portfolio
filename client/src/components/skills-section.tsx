import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { name: "Java", icon: "☕", color: "hsl(25, 95%, 53%)", tooltip: "Object-oriented design, multithreading, Spring Boot" },
  { name: "Python", icon: "🐍", color: "hsl(213, 89%, 48%)", tooltip: "Scripting, automation, Flask, Cuckoo Sandbox integration" },
  { name: "Bash", icon: "💻", color: "hsl(158, 64%, 52%)", tooltip: "Linux automation, recon frameworks, CI/CD scripts" },
  { name: "C / C++", icon: "⚡", color: "hsl(259, 94%, 71%)", tooltip: "Low-level programming, buffer management, memory analysis" },
  { name: "Networking", icon: "🌐", color: "hsl(188, 94%, 43%)", tooltip: "Socket programming, TCP/UDP, packet capture with Wireshark" },
  { name: "Docker & Linux", icon: "🐳", color: "hsl(213, 89%, 48%)", tooltip: "Container hardening, host-based network isolation" },
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
    <section id="skills" className="py-20 bg-[hsl(222,47%,11%)]" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(158,64%,52%)] bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  className="bg-[hsl(217,33%,17%)] p-6 rounded-xl text-center border border-slate-700 hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer group"
                  style={{
                    borderColor: `${skill.color}20`,
                  }}
                  whileHover={{
                    borderColor: `${skill.color}80`,
                    boxShadow: `0 10px 25px ${skill.color}30`,
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{skill.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
