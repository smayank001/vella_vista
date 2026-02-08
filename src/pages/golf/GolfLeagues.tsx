import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import golfTee from "@/assets/golf-tee.jpg";
import { motion } from "framer-motion";

const leagues = [
  { name: "Men's Club", schedule: "Wednesdays & Saturdays", desc: "Our Men's Club features weekly tournaments with handicap tracking, seasonal championships, and social events. All skill levels welcome." },
  { name: "Ladies' Club", schedule: "Tuesdays & Thursdays", desc: "A supportive community of women golfers enjoying regular play days, skill clinics, and seasonal social gatherings." },
  { name: "Couples League", schedule: "Friday Evenings", desc: "A fun, relaxed format for couples to enjoy the course together with 9-hole scrambles followed by dinner at the clubhouse." },
  { name: "Senior League", schedule: "Monday Mornings", desc: "Early morning tee times for our 62+ community. Best-ball and scramble formats in a friendly, competitive atmosphere." },
];

export default function GolfLeagues() {
  return (
    <>
      <PageHero image={golfTee} title="Leagues & Clubs" subtitle="Join our vibrant golfing community" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Golf", path: "/golf" }, { label: "Leagues" }]} />
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Community on the course" title="Golf Leagues" subtitle="From friendly competition to serious play, there's a league for everyone." />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {leagues.map((league, i) => (
              <motion.div key={league.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-border p-8 hover:border-primary/30 transition-colors">
                <p className="font-sans text-xs tracking-widest uppercase text-primary mb-1">{league.schedule}</p>
                <h3 className="font-serif text-2xl font-light mb-4">{league.name}</h3>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground font-sans leading-relaxed">{league.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
