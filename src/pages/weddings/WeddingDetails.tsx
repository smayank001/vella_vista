import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import weddingDetails from "@/assets/wedding-details.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export default function WeddingDetailsPage() {
  return (
    <>
      <PageHero
        image={weddingDetails}
        title="Wedding Details"
        subtitle="Every element thoughtfully curated for your perfect day"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Weddings", path: "/weddings" }, { label: "Details" }]}
      />

      <section className="section-padding">
        <div className="container-editorial max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-editorial text-lg text-primary mb-3">The Valle Vista experience</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">What Makes Us Different</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              Every wedding at Valle Vista is a bespoke experience. From the first consultation to the last dance,
              our team of experienced planners ensures that every moment reflects your unique love story.
            </p>
          </motion.div>

          <div className="space-y-20">
            <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
              <img src={weddingCeremony} alt="Ceremony" className="w-full aspect-[4/3] object-cover" />
              <div>
                <h3 className="font-serif text-3xl font-light mb-4">The Ceremony</h3>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  Choose from our sun-drenched garden pavilion, the iconic Veranda on the Green, or our 
                  elegant indoor chapel. Each space is designed to create an intimate atmosphere where your 
                  vows resonate with meaning.
                </p>
                <ul className="space-y-2 text-muted-foreground font-sans text-sm">
                  <li>• Seating for 50–300 guests</li>
                  <li>• Professional sound & lighting</li>
                  <li>• Custom floral arrangements</li>
                  <li>• Dedicated ceremony coordinator</li>
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img src={couplePortrait} alt="Couple" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-light mb-4">Gourmet Dining</h3>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  Our executive chef creates culinary masterpieces tailored to your preferences. From elegant 
                  plated dinners to lavish buffets, every dish is prepared with the finest seasonal ingredients.
                </p>
                <ul className="space-y-2 text-muted-foreground font-sans text-sm">
                  <li>• Customizable multi-course menus</li>
                  <li>• Dietary accommodations</li>
                  <li>• Premium bar packages</li>
                  <li>• Late-night snack stations</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial">
          <SectionHeading editorial="Included in every package" title="Your Experience Includes" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Personal Planning", items: ["Dedicated wedding coordinator", "Timeline creation", "Vendor referrals", "Rehearsal coordination"] },
              { title: "Venue & Setup", items: ["Ceremony & reception space", "Tables, chairs & linens", "Dance floor & staging", "Bridal suite access"] },
              { title: "Dining & Service", items: ["Chef-prepared cuisine", "Professional wait staff", "Bar service & bartenders", "Wedding cake cutting"] },
            ].map((col, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <h3 className="font-serif text-2xl font-light mb-4">{col.title}</h3>
                <div className="gold-divider mb-6" />
                <ul className="space-y-3 text-muted-foreground font-sans">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial text-center">
          <Link to="/weddings/pricing" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
            View Pricing Guide
          </Link>
        </div>
      </section>
    </>
  );
}
