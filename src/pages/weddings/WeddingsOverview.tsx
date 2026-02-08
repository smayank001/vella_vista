import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import eventsBallroom from "@/assets/events-ballroom.jpg";

const packages = [
  { name: "The Garden Ceremony", price: "From $3,500", desc: "An intimate outdoor celebration on the Veranda on the Green with up to 100 guests." },
  { name: "The Classic Reception", price: "From $5,500", desc: "Elegant indoor reception in our beautifully appointed ballroom for up to 200 guests." },
  { name: "The Grand Experience", price: "From $8,000", desc: "Our premier all-inclusive package featuring ceremony, cocktail hour, and grand reception." },
  { name: "The Estate Collection", price: "From $10,000", desc: "Complete estate access with personalized concierge, premium bar, and gourmet dining." },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export default function WeddingsOverview() {
  return (
    <>
      <PageHero
        image={weddingCeremony}
        title="Weddings"
        subtitle="Where love stories unfold against a backdrop of timeless beauty"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Weddings" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <p className="text-editorial text-lg text-primary mb-3">Your love, our passion</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">A Celebration As Unique As You</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              At Valle Vista, we believe every love story deserves a setting that takes your breath away. 
              From the sun-drenched gardens to our elegant indoor spaces, every corner of our estate has been 
              thoughtfully designed to create moments of pure magic. Our dedicated wedding team works closely 
              with you to ensure every detail reflects your vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <img src={weddingDetails} alt="Elegant table setting" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div {...fadeIn}>
              <p className="text-editorial text-lg text-primary mb-3">The Veranda on the Green</p>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">Ceremony & Reception Spaces</h3>
              <div className="gold-divider mb-8" />
              <p className="text-muted-foreground leading-relaxed font-sans mb-4">
                Exchange vows beneath open skies on our Veranda on the Green, surrounded by manicured gardens and 
                panoramic views. As the sun sets, transition seamlessly to our grand ballroom for an evening of 
                dining, dancing, and celebration.
              </p>
              <ul className="space-y-3 text-muted-foreground font-sans">
                {["Indoor & outdoor ceremony options", "Grand ballroom seating up to 300", "Cocktail terrace with panoramic views", "Bridal suite & groom's lounge", "On-site gourmet catering"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="Tailored to your vision" title="Wedding Packages" subtitle="All-inclusive experiences designed to make your celebration effortless and extraordinary." />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-border p-8 md:p-10 hover:border-primary/30 transition-colors"
              >
                <p className="font-sans text-sm tracking-widest uppercase text-primary mb-2">{pkg.price}</p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">{pkg.name}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{pkg.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/weddings/pricing" className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all">
              View Full Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-editorial">
          <SectionHeading editorial="Captured in light" title="Wedding Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[weddingCeremony, weddingDetails, couplePortrait, eventsBallroom, weddingCeremony, weddingDetails].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden"
              >
                <img src={img} alt="Wedding gallery" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/weddings/gallery" className="inline-block border border-primary text-primary px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all">
              View Wedding Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <p className="text-editorial text-lg text-primary mb-3">Continue exploring</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Wedding Details", path: "/weddings/details" },
              { label: "Pricing Guide", path: "/weddings/pricing" },
              { label: "Deals & Specials", path: "/weddings/deals" },
              { label: "Contact Us", path: "/contact" },
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
