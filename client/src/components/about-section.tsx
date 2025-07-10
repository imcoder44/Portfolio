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
    <section id="about" className="py-20 bg-[hsl(217,33%,17%)]" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-[hsl(158,64%,52%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 text-center mb-16 leading-relaxed"
          >
            I'm a third-year B.Tech Computer Science student at IIIT Pune, specializing in cybersecurity and ethical hacking. Currently preparing for my CEH certification (expected Sep 2025), I have hands-on experience in malware analysis, network reconnaissance, and DevSecOps automation. Passionate about building secure systems, I thrive on combining code, cloud, and creativity to solve real-world security challenges.
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-[hsl(222,47%,11%)] p-6 rounded-xl border border-[hsl(199,89%,48%)]/20 hover:border-[hsl(199,89%,48%)]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-4">🎓</div>
              <p className="text-[hsl(199,89%,48%)] font-semibold">B.Tech CS (IIIT Pune)</p>
              <p className="text-slate-400">Class of 2026</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-[hsl(222,47%,11%)] p-6 rounded-xl border border-[hsl(158,64%,52%)]/20 hover:border-[hsl(158,64%,52%)]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-4">🛡️</div>
              <p className="text-[hsl(158,64%,52%)] font-semibold">CEH Certification</p>
              <p className="text-slate-400">Expected Sep 2025</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-[hsl(222,47%,11%)] p-6 rounded-xl border border-[hsl(188,94%,43%)]/20 hover:border-[hsl(188,94%,43%)]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-4">💻</div>
              <p className="text-[hsl(188,94%,43%)] font-semibold">Open-Source Projects</p>
              <p className="text-slate-400">3+ Security Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
