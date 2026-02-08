import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import heroVenue from "@/assets/hero-venue.jpg";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "Your inquiry has been received. We'll be in touch shortly." });
    setForm({ name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero image={heroVenue} title="Contact Us" subtitle="We'd love to hear from you" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]} />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-editorial text-lg text-primary mb-3">Get in touch</p>
              <h2 className="font-serif text-4xl font-light mb-6">Request Information</h2>
              <div className="gold-divider mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" maxLength={100} />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" maxLength={255} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" maxLength={20} />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Event Type</label>
                    <select name="eventType" value={form.eventType} onChange={handleChange} className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors">
                      <option value="">Select...</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Golf Outing</option>
                      <option>Social Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Preferred Date(s)</label>
                    <input name="date" value={form.date} onChange={handleChange} placeholder="e.g., June 2025" className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" maxLength={100} />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Estimated Guests</label>
                    <input name="guests" value={form.guests} onChange={handleChange} placeholder="e.g., 150" className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" maxLength={10} />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors resize-none" maxLength={1000} />
                </div>
                <button type="submit" className="bg-primary text-primary-foreground px-10 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-dark transition-all">
                  Send Inquiry
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-editorial text-lg text-primary mb-3">Visit us</p>
              <h2 className="font-serif text-4xl font-light mb-6">Valle Vista</h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-4 font-sans text-muted-foreground mb-8">
                <p>1234 Valle Vista Drive<br />Greenwood, IN 46143</p>
                <p><a href="tel:+13175551234" className="text-foreground hover:text-primary transition-colors">(317) 555-1234</a></p>
                <p><a href="mailto:info@vallevista.com" className="text-foreground hover:text-primary transition-colors">info@vallevista.com</a></p>
                <p className="text-editorial text-primary text-lg">We LOVE to text!</p>
              </div>
              <div className="space-y-2 font-sans text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Office Hours</p>
                <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                <p>Saturday: 10:00 AM – 3:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
              {/* Map placeholder */}
              <div className="mt-8 bg-secondary aspect-video flex items-center justify-center">
                <p className="font-sans text-sm text-muted-foreground">Interactive map coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
