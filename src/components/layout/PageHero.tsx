import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export default function PageHero({ image, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative container-editorial pb-16 md:pb-20 text-primary-foreground">
        {breadcrumbs && (
          <nav className="mb-4 flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-primary-foreground/60">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.path ? (
                  <a href={crumb.path} className="hover:text-primary-foreground transition-colors">{crumb.label}</a>
                ) : (
                  <span className="text-primary-foreground/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-wide"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-editorial text-xl md:text-2xl mt-4 text-primary-foreground/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
