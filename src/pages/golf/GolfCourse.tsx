import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import golfAerial from "@/assets/golf-aerial.jpg";
import { Link } from "react-router-dom";

const holes = Array.from({ length: 18 }, (_, i) => ({
  number: i + 1,
  par: [4, 3, 5, 4, 4, 3, 5, 4, 4, 4, 5, 3, 4, 4, 3, 5, 4, 4][i],
  yards: [385, 165, 520, 410, 375, 190, 545, 360, 430, 395, 510, 175, 420, 380, 200, 535, 405, 445][i],
  handicap: [7, 15, 1, 9, 11, 17, 3, 13, 5, 8, 2, 16, 6, 12, 14, 4, 10, 18][i],
  desc: [
    "Slight dogleg left with water guarding the green",
    "Downhill par 3 over a scenic pond",
    "Long par 5 with strategic bunkering",
    "Straight away with elevated green",
    "Tree-lined fairway, approach to tiered green",
    "Short par 3 with bunkers front and back",
    "Reachable par 5, risk-reward second shot",
    "Wide fairway, undulating green",
    "Signature hole, panoramic hilltop views",
    "Gentle dogleg right through mature oaks",
    "Three-shot par 5 along the creek",
    "Precision par 3 to a well-protected green",
    "Demanding par 4, narrow landing area",
    "Welcoming fairway, tricky pin positions",
    "Elevated tee box with valley views",
    "Long par 5 finishing along water",
    "Semi-blind approach to a hidden green",
    "Finishing hole, dramatic uphill approach",
  ][i],
}));

export default function GolfCourse() {
  return (
    <>
      <PageHero
        image={golfAerial}
        title="Course Layout"
        subtitle="18 holes of championship golf, each with its own character"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Golf", path: "/golf" }, { label: "Course" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Hole by hole" title="Explore the Course" subtitle="Discover the unique challenges and beauty of each hole." />

          {/* Scorecard */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full min-w-[800px] font-sans text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left text-xs tracking-widest uppercase text-muted-foreground">Hole</th>
                  {holes.map((h) => (
                    <th key={h.number} className="py-3 px-2 text-center text-xs font-semibold">{h.number}</th>
                  ))}
                  <th className="py-3 px-4 text-center text-xs tracking-widest uppercase text-primary">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-xs tracking-widest uppercase text-muted-foreground">Par</td>
                  {holes.map((h) => (
                    <td key={h.number} className="py-3 px-2 text-center">{h.par}</td>
                  ))}
                  <td className="py-3 px-4 text-center font-semibold text-primary">{holes.reduce((sum, h) => sum + h.par, 0)}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-xs tracking-widest uppercase text-muted-foreground">Yards</td>
                  {holes.map((h) => (
                    <td key={h.number} className="py-3 px-2 text-center">{h.yards}</td>
                  ))}
                  <td className="py-3 px-4 text-center font-semibold text-primary">{holes.reduce((sum, h) => sum + h.yards, 0).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-xs tracking-widest uppercase text-muted-foreground">Hdcp</td>
                  {holes.map((h) => (
                    <td key={h.number} className="py-3 px-2 text-center text-muted-foreground">{h.handicap}</td>
                  ))}
                  <td className="py-3 px-4" />
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hole Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holes.map((hole, i) => (
              <motion.div
                key={hole.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-serif text-2xl font-light">Hole {hole.number}</h3>
                  <span className="font-sans text-xs tracking-widest uppercase text-primary">Par {hole.par} · {hole.yards} yds</span>
                </div>
                <div className="gold-divider mb-4" />
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{hole.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/golf/tee-times" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Book Your Round
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
