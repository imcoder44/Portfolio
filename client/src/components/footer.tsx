import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="terminal-window max-w-2xl mx-auto">
          <div className="terminal-header">
            <span className="text-green-500">root@tanishq:/home$ cat signature.txt</span>
          </div>
          <div className="terminal-content text-center">
            <p className="text-green-400 font-mono text-sm flex items-center justify-center gap-2">
              © 2025 Tanishq Arun Ingole | Crafted with 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ["hsl(120, 100%, 50%)", "hsl(120, 100%, 70%)", "hsl(120, 100%, 50%)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              and secure code
            </p>
            <div className="text-green-500 font-mono text-xs mt-2">
              [SYSTEM_SECURED] [PORTFOLIO_ONLINE]
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
