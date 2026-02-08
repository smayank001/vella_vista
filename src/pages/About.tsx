import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import heroVenue from "@/assets/hero-venue.jpg";
import golfAerial from "@/assets/golf-aerial.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export default function About() {
  return (
    <>
      <PageHero image={heroVenue} title="Our Story" subtitle="Decades of creating extraordinary experiences" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About" }]} />

      <section className="section-padding">
        <div className="container-editorial max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-editorial text-lg text-primary mb-3">A legacy of excellence</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">The Valle Vista Story</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              For over three decades, Valle Vista has stood as a beacon of elegance in the heart of Indiana.
              What began as a vision to create an extraordinary gathering place has blossomed into one of the
              region's most beloved venues for weddings, golf, and special events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeIn}>
              <img src={golfAerial} alt="Valle Vista grounds" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div {...fadeIn}>
              <h3 className="font-serif text-3xl font-light mb-4">Our Mission</h3>
              <div className="gold-divider mb-6" />
              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                To create timeless experiences that celebrate life's most meaningful moments. We are committed
                to excellence in hospitality, maintaining the highest standards of service, and preserving the
                natural beauty of our estate.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Every member of our team shares a passion for creating moments that matter. From our groundskeepers
                to our executive chef, we work together to ensure that every visit to Valle Vista is extraordinary.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeIn}>
            <SectionHeading editorial="What we stand for" title="Our Values" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Excellence", desc: "We pursue perfection in every detail, from the condition of our grounds to the presentation of every plate." },
                { title: "Hospitality", desc: "Genuine warmth and attentive service are the foundation of every experience at Valle Vista." },
                { title: "Heritage", desc: "We honor our legacy while embracing innovation, ensuring our estate remains timeless and relevant." },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <h3 className="font-serif text-2xl font-light mb-4">{value.title}</h3>
                  <div className="gold-divider mx-auto mb-6" />
                  <p className="text-muted-foreground font-sans">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
