import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import wedding from "@/assets/wedding.jpg";
import wedding1 from "@/assets/wedding1.jpg";
import wedding2 from "@/assets/wedding2.jpg";
import wedding3 from "@/assets/wedding3.jpg";
import wedding4 from "@/assets/wedding4.jpg";
import wedding5 from "@/assets/wedding5.jpg";

const categories = ["All", "Ceremonies", "Receptions", "Details", "Grounds"];

const images = [
  { src: wedding, category: "Ceremonies", alt: "Wedding ceremony" },
  { src: wedding1, category: "Receptions", alt: "Wedding reception" },
  { src: wedding2, category: "Details", alt: "Wedding details" },
  { src: wedding3, category: "Ceremonies", alt: "Ceremony setup" },
  { src: wedding4, category: "Receptions", alt: "Reception decor" },
  { src: wedding5, category: "Details", alt: "Wedding flowers" },
  { src: wedding, category: "Grounds", alt: "Venue grounds" },
  { src: wedding1, category: "Ceremonies", alt: "Outdoor ceremony" },
  { src: wedding2, category: "Receptions", alt: "Indoor reception" },
];

export default function WeddingGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      <PageHero
        image={wedding}
        title="Wedding Gallery"
        subtitle="Moments of beauty, captured forever"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Weddings", path: "/weddings" },
          { label: "Gallery" },
        ]}
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
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
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

      {/* Lightbox */}
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
