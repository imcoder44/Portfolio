import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-black border-t border-green-500/30" ref={ref}>
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
            <span className="text-green-500">root@tanishq:/home/profile$ cat about.txt</span>
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-mono mb-4">
              &gt; ABOUT_ME.EXE
            </h2>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="terminal-window mb-16"
          >
            <div className="terminal-content">
              <div className="text-green-400 font-mono text-sm mb-4">
                <span className="text-green-500"># Loading profile...</span>
              </div>
              <p className="text-green-300 font-mono text-sm leading-relaxed mb-4">
                &gt; Third-year B.Tech Computer Science student at IIIT Pune<br/>
                &gt; Specializing in cybersecurity and ethical hacking<br/>
                &gt; Currently preparing for CEH certification (expected Sep 2025)<br/>
                &gt; Hands-on experience: malware analysis, network reconnaissance, DevSecOps automation<br/>
                &gt; Mission: Building secure digital infrastructure through code, cloud, and creativity
              </p>
              <div className="text-green-500 font-mono text-sm">
                [PROFILE_LOADED_SUCCESSFULLY]
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="terminal-window group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="terminal-header">
                <span className="text-green-500">education.log</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 font-mono text-lg mb-2">[EDUCATION]</div>
                <p className="text-green-400 font-mono text-sm">B.Tech CS (IIIT Pune)</p>
                <p className="text-green-300 font-mono text-xs">Class of 2026 • CGPA: 6.4</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="terminal-window group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="terminal-header">
                <span className="text-green-500">certification.status</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 font-mono text-lg mb-2">[CERT_STATUS]</div>
                <p className="text-green-400 font-mono text-sm">CEH Certification</p>
                <p className="text-green-300 font-mono text-xs">Expected Sep 2025</p>
                <div className="text-yellow-500 font-mono text-xs mt-1">[IN_PROGRESS...]</div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="terminal-window group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="terminal-header">
                <span className="text-green-500">projects.count</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 font-mono text-lg mb-2">[PROJECTS]</div>
                <p className="text-green-400 font-mono text-sm">Open-Source Security</p>
                <p className="text-green-300 font-mono text-xs">4+ Active Repositories</p>
                <div className="text-green-500 font-mono text-xs mt-1">[ONLINE]</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
