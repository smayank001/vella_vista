import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import gallery from "@/assets/gallery.jpg";
import galleryEvent from "@/assets/gallery_event.jpg";
import galleryEvent1 from "@/assets/gallery_event1.jpg";
import galleryEvent2 from "@/assets/gallery_event2.jpg";
import galleryEvent3 from "@/assets/gallery_event3.jpg";
import galleryEvent4 from "@/assets/gallery_event4.jpg";
import galleryGolf from "@/assets/gallery_golf.jpg";
import wedding from "@/assets/wedding.jpg";
import wedding1 from "@/assets/wedding1.jpg";
import wedding2 from "@/assets/wedding2.jpg";
import wedding3 from "@/assets/wedding3.jpg";
import wedding4 from "@/assets/wedding4.jpg";
import wedding5 from "@/assets/wedding5.jpg";

const categories = ["All", "Weddings", "Golf", "Events", "Special Moments"];

const images = [
  { src: wedding, category: "Weddings", alt: "Wedding ceremony" },
  { src: wedding1, category: "Weddings", alt: "Wedding reception" },
  { src: wedding2, category: "Weddings", alt: "Wedding details" },
  { src: wedding3, category: "Weddings", alt: "Ceremony setup" },
  { src: wedding4, category: "Weddings", alt: "Reception decor" },
  { src: wedding5, category: "Weddings", alt: "Wedding flowers" },
  { src: galleryGolf, category: "Golf", alt: "Golf course" },
  { src: galleryEvent, category: "Events", alt: "Event setup" },
  { src: galleryEvent1, category: "Events", alt: "Event celebration" },
  { src: galleryEvent2, category: "Events", alt: "Event gathering" },
  { src: galleryEvent3, category: "Events", alt: "Event atmosphere" },
  { src: galleryEvent4, category: "Events", alt: "Event details" },
  { src: gallery, category: "Special Moments", alt: "Valle Vista gallery" },
  { src: wedding, category: "Special Moments", alt: "Wedding moment" },
  { src: galleryGolf, category: "Special Moments", alt: "Golf moment" },
  { src: galleryEvent, category: "Special Moments", alt: "Event moment" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      <PageHero
        image={gallery}
        title="Gallery"
        subtitle="A visual journey through Valle Vista"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs font-sans font-semibold tracking-widest uppercase border transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.alt}-${i}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-hidden cursor-pointer"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <p className="absolute bottom-8 text-editorial text-primary-foreground/70 text-lg">
              {filtered[lightbox]?.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
