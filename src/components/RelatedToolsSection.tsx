import { Link } from "react-router-dom";

const toolLinks = [
  { to: "/tools/birthday-wishes-generator", label: "Birthday Wishes Generator", emoji: "🎂" },
  { to: "/tools/birthday-card-maker", label: "Birthday Card Maker", emoji: "🎨" },
  { to: "/tools/age-calculator", label: "Age Calculator", emoji: "🧮" },
  { to: "/tools/birthday-countdown", label: "Birthday Countdown", emoji: "⏳" },
  { to: "/tools/love-calculator", label: "Love Calculator", emoji: "💕" },
  { to: "/tools/crush-calculator", label: "Crush Calculator", emoji: "🔥" },
  { to: "/tools/couple-name-generator", label: "Couple Name Generator", emoji: "💑" },
  { to: "/tools/friendship-calculator", label: "Friendship Calculator", emoji: "👯" },
];

type RelatedToolsSectionProps = {
  currentToolPath: string;
};

const RelatedToolsSection = ({ currentToolPath }: RelatedToolsSectionProps) => {
  const related = toolLinks.filter((tool) => tool.to !== currentToolPath);

  return (
    <section className="mt-10 bg-glass rounded-2xl p-6 border border-gold/10">
      <h2 className="text-lg font-display font-semibold text-foreground mb-2">Related Free Tools</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Explore more WishSpark tools for birthdays, relationships, and quick celebration planning.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {related.map((tool) => (
          <Link
            key={tool.to}
            to={tool.to}
            className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary"
          >
            <span>{tool.emoji}</span>
            <span>{tool.label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <Link to="/blog" className="text-primary hover:underline">
          Read practical celebration guides on our blog
        </Link>
      </div>
    </section>
  );
};

export default RelatedToolsSection;
