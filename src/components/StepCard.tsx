import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const StepCard = ({ number, title, description, icon: Icon }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className="relative bg-card rounded-xl p-8 shadow-md border border-border hover:border-primary/30 transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-5xl font-heading font-bold text-muted/80 select-none">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-heading font-bold text-xl text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default StepCard;
