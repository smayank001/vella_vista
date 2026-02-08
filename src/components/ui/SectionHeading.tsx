import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  editorial?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, editorial, centered = true, light }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {editorial && (
        <p className={`text-editorial text-lg md:text-xl mb-3 ${light ? "text-primary-foreground/70" : "text-primary"}`}>
          {editorial}
        </p>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg font-sans max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`gold-divider mt-6 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
