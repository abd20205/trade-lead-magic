import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  headline = "Ready to Fill Your Schedule With High-Value Jobs?",
  subheadline = "Book a free strategy call and we'll map out a custom growth plan for your home improvement business.",
  buttonText = "Get More High-Quality Jobs Now",
  buttonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container text-center max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
          {headline}
        </h2>
        <p className="text-secondary-foreground/70 text-lg mb-10 leading-relaxed">
          {subheadline}
        </p>
        <Button variant="hero" size="xl" asChild>
          <Link to={buttonLink}>
            {buttonText} <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
