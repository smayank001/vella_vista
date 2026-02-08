import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import golfAerial from "@/assets/golf-aerial.jpg";
import golfTee from "@/assets/golf-tee.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export default function GolfOverview() {
  return (
    <>
      <PageHero
        image={golfAerial}
        title="Golf"
        subtitle="Where the game meets unparalleled natural beauty"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Golf" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <p className="text-editorial text-lg text-primary mb-3">A course like no other</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Championship Golf at Valle Vista</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              Our meticulously maintained course winds through rolling hills, mature trees, and scenic water features.
              Each hole presents a unique challenge, making every round a memorable experience for golfers of all skill levels.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <img src={golfTee} alt="Golfer on course" className="w-full aspect-[3/4] object-cover" />
            </motion.div>
            <motion.div {...fadeIn}>
              <p className="text-editorial text-lg text-primary mb-3">Tee up your experience</p>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">Tee Times & Bookings</h3>
              <div className="gold-divider mb-8" />
              <p className="text-muted-foreground leading-relaxed font-sans mb-6">
                Reserve your preferred tee time online or by phone. We offer flexible booking options throughout 
                the week, with special twilight rates and weekend availability.
              </p>
              <Link to="/golf/tee-times" className="inline-block bg-primary text-primary-foreground px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
                Book Tee Time
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Get involved" title="Clubs & Leagues" subtitle="Join our vibrant golfing community." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Men's Club", desc: "Weekly tournaments, handicap tracking, and camaraderie on the course. Open to members of all skill levels.", link: "/golf/leagues" },
              { title: "Ladies' Club", desc: "A welcoming community of women golfers enjoying regular play days, clinics, and social events.", link: "/golf/leagues" },
              { title: "Golf Leagues", desc: "Seasonal leagues for competitive and recreational players. Multiple formats available throughout the year.", link: "/golf/leagues" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-border p-8 hover:border-primary/30 transition-colors text-center"
              >
                <h3 className="font-serif text-2xl font-light mb-4">{item.title}</h3>
                <div className="gold-divider mx-auto mb-6" />
                <p className="text-muted-foreground font-sans mb-6">{item.desc}</p>
                <Link to={item.link} className="text-xs font-sans font-semibold tracking-widest uppercase text-primary hover:text-gold-dark transition-colors">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial text-center">
          <SectionHeading editorial="Explore more" title="Related Pages" />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Tee Times", path: "/golf/tee-times" },
              { label: "Course Layout", path: "/golf/course" },
              { label: "Pricing", path: "/golf/pricing" },
              { label: "Outings", path: "/golf/outings" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="border border-border text-foreground px-6 py-2.5 text-xs font-sans font-medium tracking-widest uppercase hover:border-primary hover:text-primary transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
