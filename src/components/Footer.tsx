import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-border/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">C</span>
              </div>
              <span className="font-heading font-bold text-lg text-secondary-foreground">ContractorFlow</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              The marketing engine built exclusively for home improvement businesses that want consistent, high-value local jobs.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Lead Generation", path: "/services/lead-generation" },
                { label: "Speed to Lead", path: "/services/speed-to-lead" },
                { label: "Database Reactivation", path: "/services/database-reactivation" },
                { label: "Reputation Management", path: "/services/reputation-management" },
                { label: "Local Map Pack SEO", path: "/services/local-seo" },
              ].map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Services", path: "/services" },
              ].map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <Phone className="w-4 h-4 text-primary" /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <Mail className="w-4 h-4 text-primary" /> hello@contractorflow.com
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <MapPin className="w-4 h-4 text-primary" /> Nationwide, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} ContractorFlow. All rights reserved. Built for contractors who want to dominate their market.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
