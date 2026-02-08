import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Request a Quote
      </Link>
    </motion.div>
  );
}
