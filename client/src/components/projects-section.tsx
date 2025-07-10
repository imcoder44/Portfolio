import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Basic-Networking",
    description: "Multi-threaded Python toolkit for network security testing",
    fullDescription: "A multi-threaded Python toolkit for low-level network hacking: reverse shells, proxy interception, and SSH automation.",
    github: "https://github.com/imcoder44/Basic-Networking",
    tech: ["Python", "Sockets", "Threading", "Paramiko"],
  },
  {
    title: "Recon",
    description: "Modular Bash reconnaissance framework with integrated tools",
    fullDescription: "A modular Bash recon framework integrating Nmap, Dirsearch, crt.sh enumeration, and JSON-normalized reporting.",
    github: "https://github.com/imcoder44/Recon",
    tech: ["Bash", "Nmap", "jq", "Dirsearch"],
  },
  {
    title: "SE_Tools_W_AI",
    description: "AI-powered social engineering suite with multi-channel delivery",
    fullDescription: "Ethical social-engineering suite with AI-generated payloads, Tor-based phishing, and multi-channel delivery (email/SMS/Discord).",
    github: "https://github.com/imcoder44/SE_Tools_W_AI",
    tech: ["Python", "Flask", "OpenAI API", "Twilio", "Resemble AI"],
  },
  {
    title: "Cuckoo Sandbox Pipeline",
    description: "Automated malware analysis with behavior reporting",
    fullDescription: "Designed a Cuckoo Sandbox pipeline on VirtualBox VMs for automated execution, packet capture with Wireshark, and behavior reporting in HTML/PDF.",
    github: "https://github.com/imcoder44/Streamlining-Malware-Analysis-Introducing-Cuckoo-Sandbox",
    tech: ["Cuckoo Sandbox", "VirtualBox", "Python", "Wireshark"],
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
    <section id="projects" className="py-20 bg-black border-t border-green-500/30" ref={ref}>
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
            <span className="text-green-500">root@tanishq:/home/projects$ git status</span>
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-mono mb-4">
              &gt; PROJECT_REPOSITORY.GIT
            </h2>
            <div className="text-green-400 font-mono text-sm">
              On branch main<br/>
              Your branch is up to date with 'origin/main'.<br/>
              <span className="text-green-500">[4 REPOSITORIES FOUND]</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="terminal-window group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-102"
            >
              <div className="terminal-header">
                <span className="text-green-500">root@github:/{project.title.toLowerCase()}$</span>
              </div>
              <div className="terminal-content">
                <h3 className="text-green-500 font-mono text-lg font-bold mb-2">
                  &gt; {project.title}
                </h3>
                <p className="text-green-300 font-mono text-sm mb-4 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="mb-4">
                  <div className="text-green-500 font-mono text-xs mb-1">[TECH_STACK]:</div>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500 text-green-500 font-mono text-xs rounded transition-all hover:bg-green-500/20 hover:scale-105"
                  >
                    <Github size={14} />
                    <span>VIEW_REPO</span>
                  </a>
                  <div className="flex items-center text-green-400 font-mono text-xs">
                    <span className="animate-pulse">[ACTIVE]</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}