import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Festival } from "@/data/festivals";

interface FestivalCardProps {
  festival: Festival;
  index: number;
}

const FestivalCard = ({ festival, index }: FestivalCardProps) => {
  return (
    <Link
      to={`/${festival.slug}`}
      className="group block bg-glass rounded-2xl p-5 border border-gold/10 hover:border-gold/30 transition-colors duration-200 hover:shadow-gold"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{
            background: `linear-gradient(135deg, ${festival.accentColor}, hsl(43 80% 55%))`,
          }}
        >
          {festival.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {festival.name}
          </h3>
          <p className="text-xs text-muted-foreground truncate">{festival.description}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </Link>
  );
};

export default FestivalCard;