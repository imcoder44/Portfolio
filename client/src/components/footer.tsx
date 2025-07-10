import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-[hsl(222,47%,11%)] border-t border-slate-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          © 2025 Tanishq Arun Ingole. Crafted with 
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              color: ["hsl(0, 84%, 60%)", "hsl(0, 84%, 70%)", "hsl(0, 84%, 60%)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.span>
          and code.
        </p>
      </div>
    </footer>
  );
}
