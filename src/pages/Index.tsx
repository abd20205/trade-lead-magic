import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight, Search, Zap, RotateCcw, Star, TrendingUp,
  XCircle, CheckCircle, Phone, Clock, MapPin, Users, DollarSign, BarChart3
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import CTASection from "@/components/CTASection";

const stats = [
  { value: "340%", label: "Average Increase in Inbound Calls" },
  { value: "2.4x", label: "More Booked Estimates" },
  { value: "$1.2M+", label: "Revenue Generated for Clients" },
  { value: "Top 3", label: "Google Maps Rankings" },
];

const oldWay = [
  "Buying shared leads on HomeAdvisor & Angi",
  "Waiting on referrals that dry up seasonally",
  "Running random Facebook boosts with no strategy",
  "Ignoring your database of past customers",
  "Slow response times losing jobs to competitors",
  "Zero review management strategy",
];

const newWay = [
  "Own your lead flow with local SEO dominance",
  "Automated speed-to-lead contacts in under 2 minutes",
  "Database reactivation turns old contacts into revenue",
  "Systematic 5-star review generation",
  "Predictable, month-over-month booked estimates",
  "Full visibility into ROI and pipeline",
];

const painPoints = [
  { icon: Phone, text: "Inconsistent call volume that makes planning impossible" },
  { icon: DollarSign, text: "Wasting thousands on overpriced lead platforms with garbage leads" },
  { icon: Clock, text: "Slow follow-up costing you high-ticket jobs to faster competitors" },
  { icon: MapPin, text: "Competitors dominating Google Maps while you're invisible" },
  { icon: Users, text: "A database full of past customers that never gets touched" },
  { icon: BarChart3, text: "No predictable system — just hoping the phone rings" },
];

const testimonials = [
  {
    quote: "We went from 15 calls a month to over 60. Our schedule is booked 6 weeks out now. This system completely changed our business.",
    name: "Mike Reynolds",
    title: "Owner, Reynolds Roofing Co.",
  },
  {
    quote: "The database reactivation alone generated $87,000 in the first 90 days from customers we thought were dead. Absolute game-changer.",
    name: "Sarah Mitchell",
    title: "Owner, Mitchell Kitchen & Bath",
  },
  {
    quote: "We ranked #1 in Google Maps within 4 months and the leads are 10x better quality than anything we got from Angi. Higher ticket, higher close rate.",
    name: "James Ortega",
    title: "Owner, Ortega HVAC Services",
  },
  {
    quote: "Speed-to-lead doubled our booked estimates. We contact every lead within 2 minutes now. Our close rate went from 20% to 45%.",
    name: "David Chen",
    title: "Owner, Chen General Contracting",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Home improvement contractors at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/30">
              For Home Improvement Businesses
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-secondary-foreground">
              Go From Unpredictable Leads and Slow Seasons to a{" "}
              <span className="text-gradient">Consistent Flow of High-Value Local Jobs</span>{" "}
              on Autopilot
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/70 mb-10 leading-relaxed max-w-2xl">
              Stop wasting money on HomeAdvisor. Stop waiting for referrals. Get a proven system that books profitable kitchen remodels, roof replacements, HVAC installs, and more — consistently, every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get More High-Quality Jobs <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sound Familiar?
            </h2>
            <p className="text-muted-foreground text-lg">
              These are the frustrations we hear from contractors every single day. If even one hits home, keep reading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-card-foreground font-medium">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Way vs New Way */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              The Old Way vs. The <span className="text-gradient">ContractorFlow</span> Way
            </h2>
            <p className="text-secondary-foreground/60 text-lg">
              Stop gambling on outdated tactics. Start running a system that actually scales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary-foreground/5 rounded-xl p-8 border border-secondary-foreground/10">
              <h3 className="font-heading text-xl font-bold text-destructive mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> The Old Way
              </h3>
              <ul className="space-y-4">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex gap-3 text-secondary-foreground/60">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" /> The New Way
              </h3>
              <ul className="space-y-4">
                {newWay.map((item, i) => (
                  <li key={i} className="flex gap-3 text-secondary-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Our 5-step system turns your business into a lead-generating machine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StepCard
              number={1}
              title="Attract"
              description="Dominate local search and Google Map Pack rankings so homeowners searching for services find you first — not your competitor."
              icon={Search}
            />
            <StepCard
              number={2}
              title="Capture"
              description="Convert visitors into booked estimates using optimized landing pages and compelling offers that make saying 'yes' the easy choice."
              icon={TrendingUp}
            />
            <StepCard
              number={3}
              title="Respond"
              description="Automated speed-to-lead systems contact new inquiries within minutes — before competitors even check their voicemail."
              icon={Zap}
            />
            <StepCard
              number={4}
              title="Reactivate"
              description="Turn past customers and old estimates into new revenue through targeted database reactivation campaigns."
              icon={RotateCcw}
            />
            <StepCard
              number={5}
              title="Amplify"
              description="Systematically generate and manage 5-star reviews to build unshakable trust and outrank every competitor in your city."
              icon={Star}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-accent py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contractors Love the Results
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results from real home improvement businesses using the ContractorFlow system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
