import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import golfAerial from "@/assets/golf-aerial.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const packages = [
  { name: "Corporate Classic", guests: "16–72 golfers", price: "From $75/person", includes: ["18 holes with cart", "Range balls", "Beverage cart", "Boxed lunch", "Scoring & prizes"] },
  { name: "Premium Outing", guests: "24–144 golfers", price: "From $110/person", includes: ["18 holes with cart", "Range & putting green", "On-course contests", "Buffet lunch & dinner", "Custom scorecards", "Awards ceremony"] },
  { name: "Charity Tournament", guests: "72–144 golfers", price: "Custom pricing", includes: ["Full event coordination", "Sponsorship signage", "Registration management", "Shotgun start", "Banquet dinner", "Dedicated event planner"] },
];

export default function GolfOutings() {
  return (
    <>
      <PageHero image={golfAerial} title="Golf Outings" subtitle="Memorable tournaments and corporate events" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Golf", path: "/golf" }, { label: "Outings" }]} />
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Events on the course" title="Outing Packages" subtitle="From corporate team-building to charity tournaments, we handle every detail." />
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="border border-border p-8 hover:border-primary/30 transition-colors">
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">{pkg.guests}</p>
                <h3 className="font-serif text-2xl font-light mb-2">{pkg.name}</h3>
                <p className="font-serif text-lg text-primary mb-6">{pkg.price}</p>
                <div className="gold-divider mb-6" />
                <ul className="space-y-2.5 text-muted-foreground font-sans text-sm">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Plan Your Outing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
