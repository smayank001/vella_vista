import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import conference from "@/assets/conference.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rooms = [
  { name: "The Boardroom", capacity: "10–20", desc: "Intimate space for executive meetings and small workshops." },
  { name: "The Vista Room", capacity: "20–60", desc: "Mid-size room ideal for presentations, seminars, and team sessions." },
  { name: "The Grand Hall", capacity: "60–200", desc: "Our largest conference space with full AV, staging, and breakout areas." },
];

export default function ConferenceCenter() {
  return (
    <>
      <PageHero image={conference} title="Conference Center" subtitle="Professional spaces that inspire productive outcomes" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Events", path: "/events" }, { label: "Conference" }]} />
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Meet in style" title="Conference Spaces" subtitle="State-of-the-art technology paired with an inspiring natural setting." />
          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((room, i) => (
              <motion.div key={room.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="border border-border p-8 text-center hover:border-primary/30 transition-colors">
                <p className="font-sans text-xs tracking-widest uppercase text-primary mb-2">{room.capacity} guests</p>
                <h3 className="font-serif text-2xl font-light mb-4">{room.name}</h3>
                <div className="gold-divider mx-auto mb-6" />
                <p className="text-muted-foreground font-sans">{room.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Book a Space
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
