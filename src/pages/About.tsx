import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Contractor-First", description: "We only work with home improvement businesses. Period. This focus lets us build systems that actually work for your industry." },
  { icon: Users, title: "Results Over Retainers", description: "We don't sell hours. We sell booked estimates, signed contracts, and predictable revenue growth." },
  { icon: Award, title: "Proven Systems", description: "Every strategy we deploy has been tested and refined with hundreds of contractors across the country." },
  { icon: TrendingUp, title: "Long-Term Growth", description: "We build assets you own — rankings, reviews, and databases — not rented attention that disappears when you stop paying." },
];

const caseStudies = [
  { metric: "340%", label: "Increase in inbound calls for a Dallas roofing company in 6 months" },
  { metric: "#1", label: "Google Maps ranking for an HVAC company in Phoenix within 4 months" },
  { metric: "$87K", label: "Revenue from database reactivation for a kitchen remodeler in Atlanta" },
  { metric: "2.4x", label: "More booked estimates for a general contractor using speed-to-lead" },
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              We Don't Do "Marketing."<br />
              <span className="text-gradient">We Build Growth Engines for Contractors.</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              ContractorFlow was built by people who understand the home improvement industry — not generalist marketers who treat your business like every other client. We specialize in one thing: helping roofers, remodelers, HVAC contractors, plumbers, electricians, and specialty trades book more high-value jobs, consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We started ContractorFlow after watching too many good contractors get burned by marketing agencies that didn't understand their business. Agencies that promised "leads" but delivered tire-kickers. Agencies that talked about "brand awareness" when all you wanted was the phone to ring.
              </p>
              <p>
                So we built something different. A system designed from the ground up for home improvement businesses — combining local SEO, speed-to-lead automation, database reactivation, and reputation management into one predictable growth engine.
              </p>
              <p>
                Today, we work exclusively with contractors who are serious about growth. Our clients don't just get more leads — they get better leads, faster response times, more booked estimates, and the kind of online presence that makes them the obvious choice in their market.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-accent py-20 md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Results That Speak for Themselves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <p className="font-heading text-4xl font-bold text-primary mb-2">{c.metric}</p>
                <p className="text-muted-foreground text-sm">{c.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AboutPage;
