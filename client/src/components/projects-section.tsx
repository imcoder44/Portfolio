import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Basic-Networking",
    description: "Multi-threaded Python toolkit for network security testing",
    fullDescription: "A multi-threaded Python toolkit for low-level network hacking: reverse shells, proxy interception, and SSH automation.",
    github: "https://github.com/imcoder44/Basic-Networking",
    tech: ["Python", "Sockets", "Threading", "Paramiko"],
    color: "hsl(199, 89%, 48%)",
  },
  {
    title: "Recon",
    description: "Modular Bash reconnaissance framework with integrated tools",
    fullDescription: "A modular Bash recon framework integrating Nmap, Dirsearch, crt.sh enumeration, and JSON-normalized reporting.",
    github: "https://github.com/imcoder44/Recon",
    tech: ["Bash", "Nmap", "jq", "Dirsearch"],
    color: "hsl(158, 64%, 52%)",
  },
  {
    title: "SE_Tools_W_AI",
    description: "AI-powered social engineering suite with multi-channel delivery",
    fullDescription: "Ethical social-engineering suite with AI-generated payloads, Tor-based phishing, and multi-channel delivery (email/SMS/Discord).",
    github: "https://github.com/imcoder44/SE_Tools_W_AI",
    tech: ["Python", "Flask", "OpenAI API", "Twilio", "Resemble AI"],
    color: "hsl(188, 94%, 43%)",
  },
  {
    title: "Cuckoo Sandbox Pipeline",
    description: "Automated malware analysis with behavior reporting",
    fullDescription: "Designed a Cuckoo Sandbox pipeline on VirtualBox VMs for automated execution, packet capture with Wireshark, and behavior reporting in HTML/PDF.",
    github: null,
    tech: ["Cuckoo Sandbox", "VirtualBox", "Python", "Wireshark"],
    color: "hsl(25, 95%, 53%)",
  },
];

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 bg-[hsl(217,33%,17%)]" ref={ref}>
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
          <span className="bg-gradient-to-r from-[hsl(158,64%,52%)] to-[hsl(199,89%,48%)] bg-clip-text text-transparent">
            Open-Source Security Projects
          </span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flip-card h-64"
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front bg-[hsl(222,47%,11%)] border p-6 flex flex-col justify-center"
                  style={{
                    borderColor: `${project.color}30`,
                  }}
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="flip-card-back p-6 flex flex-col justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                  }}
                >
                  <p className="text-white text-sm mb-4">{project.fullDescription}</p>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  ) : (
                    <div className="bg-white text-black px-4 py-2 rounded-lg font-medium text-center inline-flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      Project Documentation
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
