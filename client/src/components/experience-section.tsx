import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    period: "2022 – Present",
    title: "B.Tech in Computer Science",
    organization: "IIIT Pune (Current CGPA: 6.4)",
    description: "",
    command: "education",
    status: "IN_PROGRESS",
  },
  {
    period: "Dec 2024 – Jan 2025",
    title: "Virtual Internship",
    organization: 'C-DAC Noida ("Cyber Gyan")',
    description: "Project: \"Streamlining Malware Analysis with Cuckoo Sandbox\" - Delivered automated sandbox setup, sample orchestration scripts, and comprehensive reports. Certificate: https://drive.google.com/file/d/12lbNeSaEUoXlOeYrc4w6Agrf8-zDt0dn/view",
    command: "internship",
    status: "COMPLETED",
  },
  {
    period: "CEH Preparation (2024 – 2025)",
    title: "Certification Preparation",
    organization: "Topics: Reconnaissance, Vulnerability Assessment, Exploitation, Post-Exploitation, Covering Tracks.",
    description: "Labs: Recon framework usage, exploit automation in sandboxed VMs",
    command: "certification",
    status: "ACTIVE",
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
    <section id="experience" className="py-20 bg-black border-t border-green-500/30" ref={ref}>
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
            <span className="text-green-500">root@tanishq:/home/career$ cat timeline.log</span>
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-mono mb-4">
              &gt; CAREER_TIMELINE.LOG
            </h2>
            <div className="text-green-400 font-mono text-sm">
              [PARSING_EXPERIENCE_DATA...]<br/>
              [EDUCATION_RECORDS_FOUND: 1]<br/>
              [INTERNSHIP_RECORDS_FOUND: 1]<br/>
              [CERTIFICATION_RECORDS_FOUND: 1]<br/>
              <span className="text-green-500">[TIMELINE_READY]</span>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Terminal Timeline */}
            <motion.div variants={containerVariants}>
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="terminal-window mb-8 group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="terminal-header">
                    <span className="text-green-500">
                      root@career:/timeline$ ./{item.command}.sh --status
                    </span>
                  </div>
                  <div className="terminal-content">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-green-500 font-mono text-lg font-bold">
                        &gt; {item.period}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span 
                          className={`px-2 py-1 rounded text-xs font-mono border ${
                            item.status === 'COMPLETED' 
                              ? 'bg-green-500/10 border-green-500 text-green-400' 
                              : item.status === 'IN_PROGRESS'
                              ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400'
                              : 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                          }`}
                        >
                          [{item.status}]
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-green-300 font-mono text-base font-semibold mb-2">
                      → {item.title}
                    </h4>
                    
                    <p className="text-green-400 font-mono text-sm mb-3">
                      📍 {item.organization}
                    </p>
                    
                    {item.description && (
                      <div className="text-green-300 font-mono text-sm leading-relaxed">
                        {item.description.includes('Certificate:') ? (
                          <div>
                            <p className="mb-2">
                              {item.description.split('Certificate:')[0].trim()}
                            </p>
                            <div className="border-t border-green-500/30 pt-2">
                              <span className="text-green-500 text-xs">[CERTIFICATE_LINK]:</span>
                              <br/>
                              <a
                                href={item.description.split('Certificate:')[1].trim()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors underline font-mono text-xs"
                              >
                                &gt; access_certificate.pdf
                              </a>
                            </div>
                          </div>
                        ) : item.description ? (
                          <p className="border-t border-green-500/30 pt-2">
                            <span className="text-green-500 text-xs">[DETAILS]:</span><br/>
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    )}
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