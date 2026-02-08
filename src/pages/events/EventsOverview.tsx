import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import eventsBallroom from "@/assets/events-ballroom.jpg";
import conference from "@/assets/conference.jpg";
import heroVenue from "@/assets/hero-venue.jpg";

const eventTypes = [
  { title: "Conference Center", desc: "State-of-the-art facilities for corporate meetings, seminars, and workshops. Accommodating 10 to 200 attendees.", img: conference, path: "/events/conference" },
  { title: "Social Events", desc: "Banquets, anniversaries, birthdays, family reunions, showers, and more in our elegant event spaces.", img: eventsBallroom, path: "/events/social" },
  { title: "Golf Outings", desc: "Corporate tournaments and charity events on our championship course with full event coordination.", img: heroVenue, path: "/golf/outings" },
];

export default function EventsOverview() {
  return (
    <>
      <PageHero
        image={eventsBallroom}
        title="Events"
        subtitle="Extraordinary spaces for every occasion"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Events" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Celebrate with us" title="Event Spaces" subtitle="From intimate gatherings to grand celebrations, our versatile venues adapt to your vision." />
          <div className="space-y-20">
            {eventTypes.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={event.img} alt={event.title} className="w-full aspect-[4/3] object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">{event.title}</h3>
                  <div className="gold-divider mb-6" />
                  <p className="text-muted-foreground font-sans leading-relaxed mb-8">{event.desc}</p>
                  <Link to={event.path} className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
