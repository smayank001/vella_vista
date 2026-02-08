import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import golfAerial from "@/assets/golf-aerial.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rates = [
  { category: "Weekday", items: [{ label: "18 Holes (Walking)", price: "$35" }, { label: "18 Holes (Riding)", price: "$50" }, { label: "9 Holes (Walking)", price: "$22" }, { label: "9 Holes (Riding)", price: "$30" }] },
  { category: "Weekend", items: [{ label: "18 Holes (Walking)", price: "$45" }, { label: "18 Holes (Riding)", price: "$60" }, { label: "9 Holes (Walking)", price: "$28" }, { label: "9 Holes (Riding)", price: "$38" }] },
  { category: "Twilight", items: [{ label: "Weekday (after 3pm)", price: "$25" }, { label: "Weekend (after 3pm)", price: "$30" }, { label: "Junior (18 & under)", price: "$20" }, { label: "Senior (62+)", price: "$30" }] },
];

export default function GolfPricing() {
  return (
    <>
      <PageHero image={golfAerial} title="Golf Pricing" subtitle="Competitive rates for an exceptional course" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Golf", path: "/golf" }, { label: "Pricing" }]} />
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Green fees" title="Course Rates" />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {rates.map((group, i) => (
              <motion.div key={group.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="border border-border p-8">
                <h3 className="font-serif text-2xl font-light mb-4 text-center">{group.category}</h3>
                <div className="gold-divider mx-auto mb-6" />
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex justify-between font-sans text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/golf/tee-times" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Book a Tee Time
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
