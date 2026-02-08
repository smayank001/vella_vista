import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import heroVenue from "@/assets/hero-venue.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import golfAerial from "@/assets/golf-aerial.jpg";
import eventsBallroom from "@/assets/events-ballroom.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8 },
};

const testimonials = [
  { quote: "Valle Vista made our wedding day absolutely magical. Every detail was perfection.", author: "Sarah & Michael" },
  { quote: "The most stunning venue we've ever seen. Our guests are still talking about it.", author: "Jessica & David" },
  { quote: "From the moment we arrived, we knew this was the place for our celebration.", author: "Emily & James" },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroVenue} alt="Valle Vista venue at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative text-center text-primary-foreground px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-editorial text-lg md:text-xl mb-4 text-primary-foreground/80"
          >
            Where every moment becomes a memory
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide"
          >
            Valle Vista
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="gold-divider mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-sans text-sm tracking-[0.3em] uppercase mt-6 text-primary-foreground/70"
          >
            Weddings · Golf · Events
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/weddings"
              className="border border-primary-foreground/40 text-primary-foreground px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary-foreground/10 transition-all"
            >
              Explore Weddings
            </Link>
            <Link
              to="/contact"
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary-foreground/20 transition-all"
            >
              Schedule a Tour
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Story */}
      <section className="section-padding">
        <div className="container-editorial">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <p className="text-editorial text-lg text-primary mb-3">A legacy of elegance</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              Decades of Unforgettable Celebrations
            </h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              For generations, Valle Vista has been the premier destination for life's most cherished moments.
              Nestled among rolling green landscapes, our estate offers a timeless backdrop where sophistication
              meets natural beauty — creating experiences that linger in the heart long after the last dance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weddings Feature */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <img
                src={weddingCeremony}
                alt="Romantic outdoor wedding ceremony"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div {...fadeIn} className="lg:pl-4">
              <p className="text-editorial text-lg text-primary mb-3">Your perfect day awaits</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Weddings</h2>
              <div className="gold-divider mb-8" />
              <p className="text-muted-foreground leading-relaxed font-sans mb-4">
                From intimate garden ceremonies to grand ballroom receptions, Valle Vista offers a range
                of stunning settings for your celebration. Our dedicated team handles every detail, ensuring
                your day is as effortless as it is extraordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans mb-8">
                All-inclusive packages from $3,500 to $10,000, featuring gourmet chef-prepared meals,
                personalized planning, and the breathtaking Veranda on the Green.
              </p>
              <Link
                to="/weddings"
                className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Discover Weddings
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Golf Feature */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn} className="lg:order-2">
              <img
                src={golfAerial}
                alt="Aerial view of Valle Vista golf course"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div {...fadeIn} className="lg:order-1 lg:pr-4">
              <p className="text-editorial text-lg text-primary mb-3">A championship experience</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Golf</h2>
              <div className="gold-divider mb-8" />
              <p className="text-muted-foreground leading-relaxed font-sans mb-4">
                Challenge yourself on our meticulously maintained course, where every hole offers a unique
                blend of strategy and natural beauty. From leagues to outings, Valle Vista delivers an
                exceptional golfing experience.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans mb-8">
                Men's and Ladies' clubs, seasonal leagues, corporate outings, and flexible tee times
                available throughout the season.
              </p>
              <Link
                to="/golf"
                className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Explore Golf
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Feature */}
      <section className="relative section-padding overflow-hidden">
        <img src={eventsBallroom} alt="Elegant ballroom setup" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container-editorial text-center text-primary-foreground">
          <SectionHeading
            editorial="Celebrations of every kind"
            title="Events & Gatherings"
            subtitle="From corporate conferences to milestone celebrations, our versatile spaces and attentive team make every event remarkable."
            light
          />
          <Link
            to="/events"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary-foreground/10 transition-all"
          >
            Plan Your Event
          </Link>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Captured moments" title="Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[heroVenue, weddingCeremony, couplePortrait, golfAerial, eventsBallroom, weddingDetails].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`overflow-hidden ${i === 2 ? "row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt="Valle Vista gallery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial">
          <SectionHeading editorial="In their words" title="Testimonials" />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <p className="text-editorial text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="gold-divider mx-auto mb-4" />
                <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground">
                  {t.author}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-editorial text-lg text-primary mb-3">Begin your journey</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              Let's Create Something Beautiful
            </h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed font-sans mb-10">
              Whether you're envisioning an intimate garden ceremony, a grand ballroom celebration,
              or a memorable day on the green — we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all"
              >
                Request Information
              </Link>
              <Link
                to="/contact"
                className="border border-primary text-primary px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Schedule a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
