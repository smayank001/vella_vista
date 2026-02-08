import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import { Link } from "react-router-dom";

const deals = [
  { title: "Winter Wonderland Special", period: "December – February", discount: "Save up to 20%", desc: "Embrace the magic of a winter celebration with special pricing on our Classic and Grand packages." },
  { title: "Weekday Elegance", period: "Monday – Thursday", discount: "Save up to 25%", desc: "Enjoy exclusive savings on weekday celebrations without compromising on any of our premium amenities." },
  { title: "Last-Minute Love", period: "Within 90 days", discount: "Save up to 30%", desc: "For couples ready to say 'I do' soon, enjoy significant savings on available dates within the next three months." },
  { title: "Off-Peak Advantage", period: "January – March", discount: "Save up to 15%", desc: "Take advantage of our quieter months with reduced rates and full access to all venue amenities." },
];

export default function WeddingDeals() {
  return (
    <>
      <PageHero
        image={weddingCeremony}
        title="Deals & Specials"
        subtitle="Extraordinary celebrations at exceptional value"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Weddings", path: "/weddings" }, { label: "Deals" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Limited-time offerings" title="Seasonal Specials" subtitle="We believe every couple deserves an extraordinary wedding. Explore our current promotions." />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {deals.map((deal, i) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-8 md:p-10 hover:border-primary/30 transition-colors"
              >
                <p className="font-sans text-xs tracking-widest uppercase text-primary mb-1">{deal.discount}</p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">{deal.title}</h3>
                <p className="font-sans text-sm text-muted-foreground mb-4">{deal.period}</p>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground font-sans leading-relaxed">{deal.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-editorial text-lg text-primary mb-6">Interested in a special offer?</p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Inquire About Specials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
