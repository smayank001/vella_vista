import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Weddings",
    path: "/weddings",
    children: [
      { label: "Overview", path: "/weddings" },
      { label: "Wedding Details", path: "/weddings/details" },
      { label: "Pricing Guide", path: "/weddings/pricing" },
      { label: "Gallery", path: "/weddings/gallery" },
      { label: "Deals & Specials", path: "/weddings/deals" },
    ],
  },
  {
    label: "Golf",
    path: "/golf",
    children: [
      { label: "Overview", path: "/golf" },
      { label: "Tee Times", path: "/golf/tee-times" },
      { label: "Pricing", path: "/golf/pricing" },
      { label: "Course Layout", path: "/golf/course" },
      { label: "Leagues", path: "/golf/leagues" },
      { label: "Outings", path: "/golf/outings" },
    ],
  },
  {
    label: "Events",
    path: "/events",
    children: [
      { label: "Conference Center", path: "/events/conference" },
      { label: "Social Events", path: "/events/social" },
      { label: "Golf Outings", path: "/golf/outings" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <h1
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Valle Vista
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setHoveredNav(item.label)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-sans font-medium tracking-widest uppercase transition-colors duration-300 ${
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  } ${location.pathname.startsWith(item.path) ? (scrolled ? "text-primary" : "text-primary-foreground") : ""}`}
                >
                  {item.label}
                </Link>
                {item.children && hoveredNav === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-background/98 backdrop-blur-lg border border-border rounded-sm shadow-lg py-3 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-2 text-sm font-sans text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <Link
            to="/contact"
            className={`hidden lg:inline-block text-xs font-sans font-semibold tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Request a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-10 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 text-xs font-sans font-semibold tracking-widest uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Request a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
