import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    period: "2022 – Present",
    title: "B.Tech in Computer Science",
    organization: "IIIT Pune (Current CGPA: 6.00)",
    description: "",
    color: "hsl(199, 89%, 48%)",
  },
  {
    period: "Dec 2024 – Jan 2025",
    title: "Virtual Internship",
    organization: 'C-DAC Noida ("Cyber Gyan")',
    description: "Project: \"Streamlining Malware Analysis with Cuckoo Sandbox\" - Delivered automated sandbox setup, sample orchestration scripts, and comprehensive reports.",
    color: "hsl(158, 64%, 52%)",
  },
  {
    period: "CEH Preparation (2024 – 2025)",
    title: "Certification Preparation",
    organization: "Topics: Reconnaissance, Vulnerability Assessment, Exploitation, Post-Exploitation, Covering Tracks.",
    description: "Labs: Recon framework usage, exploit automation in sandboxed VMs",
    color: "hsl(188, 94%, 43%)",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-[hsl(222,47%,11%)]" ref={ref}>
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
          <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
            Experience & Education
          </span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[hsl(199,89%,48%)]"></div>
            
            {/* Timeline Items */}
            <motion.div variants={containerVariants}>
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-center mb-12"
                >
                  <div
                    className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full border-4 border-[hsl(222,47%,11%)]"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                    <div
                      className="bg-[hsl(217,33%,17%)] p-6 rounded-xl border"
                      style={{ borderColor: `${item.color}30` }}
                    >
                      <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>
                        {item.period}
                      </h3>
                      <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                      <p className="text-slate-300 mb-2">{item.organization}</p>
                      {item.description && (
                        <p className="text-sm text-slate-400">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
