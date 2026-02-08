import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <h3 className="font-serif text-3xl font-semibold mb-4">Valle Vista</h3>
            <p className="text-background/60 text-sm leading-relaxed font-sans">
              Where timeless elegance meets unforgettable celebrations. Nestled in rolling landscapes, Valle Vista has been crafting extraordinary experiences for decades.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6 text-gold-light">Experiences</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Weddings", path: "/weddings" },
                { label: "Golf", path: "/golf" },
                { label: "Events", path: "/events" },
                { label: "Gallery", path: "/gallery" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-background/60 hover:text-background transition-colors font-sans">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6 text-gold-light">Information</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Contact", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-background/60 hover:text-background transition-colors font-sans">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6 text-gold-light">Contact</h4>
            <div className="space-y-3 text-sm text-background/60 font-sans">
              <p>1234 Valle Vista Drive</p>
              <p>Greenwood, IN 46143</p>
              <p className="pt-2">
                <a href="tel:+13175551234" className="hover:text-background transition-colors">(317) 555-1234</a>
              </p>
              <p>
                <a href="mailto:info@vallevista.com" className="hover:text-background transition-colors">info@vallevista.com</a>
              </p>
              <p className="text-editorial text-gold-light pt-2">We LOVE to text!</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40 font-sans">© {new Date().getFullYear()} Valle Vista. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-background/40 hover:text-background/70 font-sans transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-background/40 hover:text-background/70 font-sans transition-colors">Terms</Link>
            <Link to="/sitemap" className="text-xs text-background/40 hover:text-background/70 font-sans transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
