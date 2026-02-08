import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import golfTee from "@/assets/golf-tee.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GolfTeeTimes() {
  return (
    <>
      <PageHero
        image={golfTee}
        title="Tee Times"
        subtitle="Reserve your round at Valle Vista"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Golf", path: "/golf" }, { label: "Tee Times" }]}
      />
      <section className="section-padding">
        <div className="container-editorial max-w-3xl mx-auto text-center">
          <SectionHeading editorial="Book your experience" title="Reserve a Tee Time" subtitle="Call us or use the form below to secure your preferred time." />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-border p-8 md:p-12">
            <p className="text-muted-foreground font-sans mb-6">To book a tee time, please call our pro shop or submit a request through our contact form.</p>
            <p className="font-serif text-2xl text-foreground mb-2">(317) 555-1234</p>
            <p className="text-editorial text-primary mb-8">We LOVE to text!</p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Request Tee Time
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
