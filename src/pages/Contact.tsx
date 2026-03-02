import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within 24 hours to schedule your strategy session.");
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Let's Map Out Your <span className="text-gradient">Growth Plan</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed">
              Book a free strategy session and we'll show you exactly how to get more high-quality home improvement jobs in your area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Book Your Strategy Session</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Smith Roofing LLC"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@smithroofing.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">What Service Are You Interested In?</label>
                  <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lead-gen">Lead Generation</SelectItem>
                      <SelectItem value="speed-to-lead">Speed to Lead Automation</SelectItem>
                      <SelectItem value="database">Database Reactivation</SelectItem>
                      <SelectItem value="reputation">Reputation Management</SelectItem>
                      <SelectItem value="seo">Local Map Pack SEO</SelectItem>
                      <SelectItem value="all">All Services / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Tell Us About Your Business</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What services do you offer? What's your biggest growth challenge right now?"
                    rows={4}
                  />
                </div>
                <Button variant="hero" size="xl" type="submit" className="w-full">
                  Book My Free Strategy Session <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No obligation. No pressure. Just a conversation about growing your business.
                </p>
              </form>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@contractorflow.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Service Area</p>
                    <p className="text-muted-foreground">Nationwide, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-card-foreground mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 30-minute strategy session</li>
                  <li>✓ Custom growth roadmap for your business</li>
                  <li>✓ Competitive analysis of your market</li>
                  <li>✓ Clear next steps (no pressure)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
