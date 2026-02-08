import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import eventsBallroom from "@/assets/events-ballroom.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const events = [
  "Anniversaries", "Birthday Celebrations", "Family Reunions", "Bridal & Baby Showers",
  "Retirement Parties", "Graduation Celebrations", "Holiday Parties", "Rehearsal Dinners",
];

export default function SocialEvents() {
  return (
    <>
      <PageHero image={eventsBallroom} title="Social Events" subtitle="Celebrate life's milestones in unforgettable style" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Events", path: "/events" }, { label: "Social" }]} />
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Every reason to celebrate" title="Banquets & Gatherings" subtitle="Our elegant spaces and attentive team make every occasion extraordinary." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.map((event, i) => (
              <motion.div key={event} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border border-border p-6 text-center hover:border-primary/30 transition-colors">
                <p className="font-serif text-lg">{event}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
