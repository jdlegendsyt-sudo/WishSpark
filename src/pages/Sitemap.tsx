import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { festivals } from "@/data/festivals";
import { blogPosts } from "@/data/blogPosts";

const toolLinks = [
  { to: "/tools/birthday-wishes-generator", label: "🎂 Birthday Wishes Generator" },
  { to: "/tools/birthday-card-maker", label: "🎨 Birthday Card Maker" },
  { to: "/tools/age-calculator", label: "🧮 Age Calculator" },
  { to: "/tools/birthday-countdown", label: "⏳ Birthday Countdown Timer" },
  { to: "/tools/love-calculator", label: "💕 Love Calculator" },
  { to: "/tools/crush-calculator", label: "🔥 Crush Calculator" },
  { to: "/tools/couple-name-generator", label: "💑 Couple Name Generator" },
  { to: "/tools/friendship-calculator", label: "👯 Friendship Calculator" },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Sitemap</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/blog", label: "Blog" },
                { to: "/about", label: "About Us" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/faq", label: "Frequently Asked Questions" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Fun Tools ({toolLinks.length})</h2>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Blog Articles ({blogPosts.length})</h2>
            <ul className="space-y-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="text-sm text-primary hover:underline flex items-center gap-2">
                    <span>{post.emoji}</span> {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Festival Greetings ({festivals.length}+)</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {festivals.map((f) => (
                <li key={f.slug}>
                  <Link to={`/${f.slug}`} className="text-sm text-primary hover:underline flex items-center gap-2">
                    <span>{f.emoji}</span> {f.name} Wishes
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Legal</h2>
            <ul className="space-y-2">
              {[
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Use" },
                { to: "/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
