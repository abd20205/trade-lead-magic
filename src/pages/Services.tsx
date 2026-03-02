import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, Zap, RotateCcw, Star, TrendingUp, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Get a consistent flow of high-quality, exclusive leads from homeowners actively searching for your services. No more shared leads or cold calls.",
    link: "/services/lead-generation",
  },
  {
    icon: Zap,
    title: "Speed to Lead Automation",
    description: "Contact every new inquiry within 2 minutes automatically. The fastest response wins the job — and we make sure that's you.",
    link: "/services/speed-to-lead",
  },
  {
    icon: RotateCcw,
    title: "Database Reactivation",
    description: "Your past customers and old estimates are a goldmine. We reactivate them with targeted campaigns that generate revenue on autopilot.",
    link: "/services/database-reactivation",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Build a wall of 5-star reviews that makes you the obvious choice. Automated review requests, monitoring, and response management.",
    link: "/services/reputation-management",
  },
  {
    icon: Search,
    title: "Local Map Pack SEO",
    description: "Rank in the top 3 of Google Maps so homeowners find you first when they search for contractors in your area.",
    link: "/services/local-seo",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Services Built for <span className="text-gradient">Contractor Growth</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              Every service is designed to solve a specific growth problem for home improvement businesses. No fluff, no generic marketing — just systems that book jobs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={service.link}>
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicesPage;
