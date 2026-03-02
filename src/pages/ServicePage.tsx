import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceData {
  slug: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "lead-generation": {
    slug: "lead-generation",
    title: "Lead Generation for Home Improvement Businesses",
    metaDescription: "Get exclusive, high-quality leads for your roofing, HVAC, plumbing, or remodeling business. No shared leads, no wasted budget.",
    heroHeadline: "Stop Buying Shared Leads. Start Owning Your Pipeline.",
    heroSubheadline: "Our lead generation system delivers exclusive, high-intent homeowner leads directly to your business — not shared with 5 other contractors.",
    benefits: [
      "Exclusive leads — never shared with competitors",
      "Homeowners actively searching for your services",
      "Higher close rates than any lead platform",
      "Full transparency into lead sources and ROI",
      "Scales with your capacity — more crews, more leads",
      "Works for roofers, remodelers, HVAC, plumbers, and more",
    ],
    processSteps: [
      { title: "Market Analysis", description: "We analyze your service area, competition, and ideal customer profile." },
      { title: "Campaign Build", description: "We create targeted campaigns across Google, Maps, and local channels." },
      { title: "Landing Pages", description: "Optimized pages convert traffic into booked estimates." },
      { title: "Lead Delivery", description: "Leads are delivered in real-time with all contact details." },
      { title: "Optimization", description: "We continuously optimize for lower cost per lead and higher quality." },
    ],
    faqs: [
      { q: "How is this different from HomeAdvisor?", a: "Unlike HomeAdvisor or Angi, our leads are 100% exclusive to you. No bidding wars, no shared leads, and no surprise charges." },
      { q: "What types of contractors do you work with?", a: "We specialize in roofers, HVAC contractors, plumbers, electricians, kitchen & bath remodelers, general contractors, and specialty trade companies." },
      { q: "How quickly will I see results?", a: "Most clients see qualified leads within the first 2-3 weeks of campaign launch." },
      { q: "What's the average cost per lead?", a: "This varies by market and service, but our leads consistently cost less than platform leads while converting at 2-3x the rate." },
    ],
  },
  "speed-to-lead": {
    slug: "speed-to-lead",
    title: "Speed to Lead Automation for Contractors",
    metaDescription: "Respond to every lead in under 2 minutes with automated speed-to-lead systems built for contractors.",
    heroHeadline: "The Contractor Who Responds First Wins the Job. Every Time.",
    heroSubheadline: "78% of customers hire the first contractor who responds. Our automation ensures you're always first — within 2 minutes or less.",
    benefits: [
      "Automated response within 2 minutes of inquiry",
      "Text, email, and voicemail drop sequences",
      "Works 24/7 even when you're on a job site",
      "Increases close rate by up to 2.4x",
      "Integrates with your existing CRM",
      "Never lose a lead to a faster competitor again",
    ],
    processSteps: [
      { title: "System Setup", description: "We configure your automated response system and connect all lead sources." },
      { title: "Messaging", description: "We craft high-converting response scripts personalized to your services." },
      { title: "Multi-Channel", description: "Leads get contacted via text, email, and voicemail simultaneously." },
      { title: "Follow-Up", description: "Automated follow-up sequences nurture leads who don't respond immediately." },
      { title: "Booking", description: "Qualified leads are routed directly to your calendar for estimate booking." },
    ],
    faqs: [
      { q: "Will this feel robotic to my customers?", a: "No. Our messages are personalized and conversational. Homeowners think they're talking to a real person on your team." },
      { q: "What if I want to handle some leads personally?", a: "You can. The system notifies you of every lead and you can jump in at any time." },
      { q: "Does this work on weekends and evenings?", a: "Absolutely. The system works 24/7/365, which is when many homeowners are actually searching for contractors." },
    ],
  },
  "database-reactivation": {
    slug: "database-reactivation",
    title: "Database Reactivation Campaigns for Contractors",
    metaDescription: "Turn your old customer lists and past estimates into new revenue. Database reactivation for home improvement businesses.",
    heroHeadline: "Your Old Customer List Is Worth More Than You Think.",
    heroSubheadline: "Most contractors sit on thousands of past customers and old estimates. We turn those 'dead' contacts into booked jobs and real revenue.",
    benefits: [
      "Revenue from contacts you already paid to acquire",
      "Average $50K-$100K+ generated in first 90 days",
      "Re-engage past customers for repeat business",
      "Revive old estimates that never closed",
      "Seasonal reactivation campaigns",
      "Zero additional ad spend required",
    ],
    processSteps: [
      { title: "Data Import", description: "We import and clean your existing customer database and estimate records." },
      { title: "Segmentation", description: "Contacts are segmented by service type, recency, and revenue potential." },
      { title: "Campaign Launch", description: "Targeted reactivation campaigns go out via text, email, and ringless voicemail." },
      { title: "Response Handling", description: "Interested contacts are qualified and routed to your team for booking." },
      { title: "Revenue Tracking", description: "We track every dollar generated back to the campaign." },
    ],
    faqs: [
      { q: "How old can the contacts be?", a: "We've seen results from lists that are 5+ years old. If you have their phone number or email, there's potential." },
      { q: "Will this annoy my past customers?", a: "No. We use tasteful, value-driven messaging that past customers appreciate. Think seasonal reminders, exclusive offers, and check-ins." },
      { q: "What kind of ROI can I expect?", a: "Most clients see 10-30x ROI on database reactivation campaigns. One roofing client generated $87K from a single campaign." },
    ],
  },
  "reputation-management": {
    slug: "reputation-management",
    title: "Reputation Management for Home Improvement Companies",
    metaDescription: "Build a wall of 5-star reviews that makes you the obvious choice. Automated reputation management for contractors.",
    heroHeadline: "5-Star Reviews Don't Happen by Accident. We Systematize Them.",
    heroSubheadline: "93% of homeowners read reviews before hiring a contractor. We make sure yours are plentiful, positive, and prominently displayed.",
    benefits: [
      "Automated review requests after every completed job",
      "Negative review interception before they go public",
      "Review monitoring across Google, Yelp, and Facebook",
      "Professional response templates for all reviews",
      "Higher Google Maps rankings from review velocity",
      "Social proof that converts browsers into buyers",
    ],
    processSteps: [
      { title: "Audit", description: "We audit your current review profile across all platforms." },
      { title: "System Setup", description: "Automated review request sequences are configured for post-job delivery." },
      { title: "Interception", description: "Negative feedback is intercepted and resolved before becoming public reviews." },
      { title: "Monitoring", description: "All reviews across platforms are monitored and responded to professionally." },
      { title: "Amplification", description: "Best reviews are featured on your website and marketing materials." },
    ],
    faqs: [
      { q: "Is this buying fake reviews?", a: "Absolutely not. We simply make it easy for your happy customers to leave honest reviews. Every review is from a real customer." },
      { q: "What if I get a negative review?", a: "Our interception system catches unhappy customers before they leave public reviews. When negative reviews do happen, we help you respond professionally." },
      { q: "How many reviews can I expect per month?", a: "This depends on your job volume, but most clients see 10-30+ new reviews per month." },
    ],
  },
  "local-seo": {
    slug: "local-seo",
    title: "Local Map Pack SEO for Home Improvement Companies",
    metaDescription: "Rank in the top 3 of Google Maps for your services. Local SEO built specifically for contractors and home improvement businesses.",
    heroHeadline: "Dominate Google Maps. Be the First Contractor Homeowners See.",
    heroSubheadline: "46% of all Google searches have local intent. When homeowners search for contractors in your city, we make sure you're in the top 3.",
    benefits: [
      "Rank in Google's local Map Pack for your services",
      "Organic, free traffic from homeowners ready to hire",
      "Outrank competitors in your service area",
      "Optimized Google Business Profile",
      "Local citation building and management",
      "Long-term visibility that compounds over time",
    ],
    processSteps: [
      { title: "SEO Audit", description: "We analyze your current rankings, competitors, and opportunities." },
      { title: "GBP Optimization", description: "Your Google Business Profile is fully optimized for maximum visibility." },
      { title: "Citation Building", description: "We build and clean local citations across 100+ directories." },
      { title: "Content Strategy", description: "Location and service-specific content is created to boost relevance." },
      { title: "Ongoing SEO", description: "Monthly optimization, reporting, and strategy adjustments." },
    ],
    faqs: [
      { q: "How long does SEO take to work?", a: "Most clients see significant ranking improvements within 60-90 days, with top 3 positions typically achieved within 4-6 months." },
      { q: "Do I need a website for this?", a: "A website helps, but Google Business Profile optimization alone can get you into the Map Pack. We can help with both." },
      { q: "What happens if Google changes their algorithm?", a: "Our strategies focus on fundamentals that remain effective regardless of algorithm updates. We continuously adapt to any changes." },
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <Link to="/services" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
              ← Back to Services
            </Link>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-6 leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8">
              {service.heroSubheadline}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book a Strategy Call <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Contractors Choose This
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3 items-start p-4 rounded-lg bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-card-foreground font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-accent py-20 md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Process
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {service.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-heading font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="font-heading font-semibold text-card-foreground text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-dark py-16">
        <div className="container">
          <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(servicesData)
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Button key={s.slug} variant="outline" size="sm" asChild>
                  <Link to={`/services/${s.slug}`}>{s.title.replace(/for.*/, "").trim()}</Link>
                </Button>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
