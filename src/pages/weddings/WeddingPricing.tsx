import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import eventsBallroom from "@/assets/events-ballroom.jpg";
import { Link } from "react-router-dom";

const pricing = [
  {
    name: "The Garden Ceremony",
    price: "$3,500 – $5,000",
    guests: "Up to 100 guests",
    includes: ["Outdoor ceremony on the Veranda", "1-hour cocktail reception", "Ceremony coordination", "Sound system & mic", "Chairs & ceremony décor", "Bridal suite access"],
  },
  {
    name: "The Classic Reception",
    price: "$5,500 – $7,500",
    guests: "Up to 200 guests",
    includes: ["Indoor ballroom reception", "4-hour event window", "Plated or buffet dinner", "Standard bar package", "Tables, linens & centerpieces", "DJ setup & dance floor", "Wedding coordinator"],
  },
  {
    name: "The Grand Experience",
    price: "$8,000 – $9,500",
    guests: "Up to 250 guests",
    includes: ["Ceremony + cocktail + reception", "5-hour event window", "Premium multi-course dinner", "Premium open bar", "Custom floral arrangements", "Photo opportunities on grounds", "Dedicated planning team"],
  },
  {
    name: "The Estate Collection",
    price: "$10,000+",
    guests: "Up to 300 guests",
    includes: ["Full estate access", "6-hour event window", "Gourmet chef's tasting menu", "Top-shelf bar package", "Luxury floral design", "Valet parking", "Concierge service", "Late-night snack station"],
  },
];

export default function WeddingPricing() {
  return (
    <>
      <PageHero
        image={eventsBallroom}
        title="Wedding Pricing"
        subtitle="Transparent pricing for extraordinary celebrations"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Weddings", path: "/weddings" }, { label: "Pricing" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading
            editorial="Investment in forever"
            title="Our Wedding Packages"
            subtitle="All-inclusive pricing designed to make planning effortless. Every package can be customized to your vision."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {pricing.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-8 md:p-10 hover:border-primary/30 transition-colors"
              >
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">{pkg.guests}</p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">{pkg.name}</h3>
                <p className="font-serif text-xl text-primary mb-6">{pkg.price}</p>
                <div className="gold-divider mb-6" />
                <ul className="space-y-2.5 text-muted-foreground font-sans text-sm">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 max-w-xl mx-auto">
            <p className="text-editorial text-lg text-primary mb-3">Ready to begin?</p>
            <p className="text-muted-foreground font-sans mb-8">Pricing varies by season, guest count, and customizations. Contact us for a personalized quote.</p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
