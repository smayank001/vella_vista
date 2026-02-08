import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import couplePortrait from "@/assets/couple-portrait.jpg";

const testimonials = [
  { quote: "Valle Vista made our wedding day absolutely magical. The attention to detail was impeccable, and our guests are still talking about the breathtaking setting. It truly exceeded all our expectations.", author: "Sarah & Michael", event: "Wedding, June 2024" },
  { quote: "From the first tour to our reception, the team went above and beyond. The ballroom was stunning, the food was exceptional, and the coordination was seamless. We couldn't have asked for a more perfect day.", author: "Jessica & David", event: "Wedding, September 2024" },
  { quote: "We hosted our corporate retreat at Valle Vista and it was a game-changer. The conference facilities were top-notch, the golf was incredible, and the dinner reception was elegant. Our entire team was impressed.", author: "Robert K.", event: "Corporate Event, October 2024" },
  { quote: "Our 50th anniversary celebration at Valle Vista was everything we dreamed of. The staff treated us like family, the venue was gorgeous, and every detail was thoughtfully handled.", author: "Margaret & Harold", event: "Anniversary, August 2024" },
  { quote: "The golf course is pristine and challenging in the best way. I've played courses across the country, and Valle Vista stands shoulder to shoulder with the finest. The views alone are worth the trip.", author: "James T.", event: "Golf Member" },
  { quote: "We chose Valle Vista for our daughter's bridal shower and it was perfection. The veranda overlooking the green was the most beautiful setting. The food was divine and the service impeccable.", author: "Linda M.", event: "Bridal Shower, May 2024" },
];

export default function Testimonials() {
  return (
    <>
      <PageHero image={couplePortrait} title="Testimonials" subtitle="Stories from those who celebrated with us" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Testimonials" }]} />

      <section className="section-padding">
        <div className="container-editorial">
          <SectionHeading editorial="In their words" title="Guest Experiences" />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.15 }}
                className="border border-border p-8 md:p-10"
              >
                <p className="text-editorial text-xl md:text-2xl text-foreground leading-relaxed mb-6">"{t.quote}"</p>
                <div className="gold-divider mb-4" />
                <p className="font-sans text-sm font-semibold text-foreground">{t.author}</p>
                <p className="font-sans text-xs text-muted-foreground tracking-widest uppercase">{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
