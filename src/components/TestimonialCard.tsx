import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating?: number;
}

const TestimonialCard = ({ quote, name, title, rating = 5 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-card-foreground/80 leading-relaxed mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-heading font-bold text-card-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
