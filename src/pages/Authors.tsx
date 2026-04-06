import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authorProfiles } from "@/data/blogPosts";

const Authors = () => {
  const profiles = Object.values(authorProfiles);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-4">Authors</h1>
        <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
          Meet the contributors behind WishSpark content. Each profile reflects the contributor's editorial focus,
          writing role, and practical domain strengths across celebrations, communication, and utility tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {profiles.map((author) => (
            <article key={author.name} className="bg-glass rounded-2xl p-6 border border-gold/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-display font-semibold text-foreground">{author.name}</h2>
                  <p className="text-sm text-primary mt-1">{author.role}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg" aria-hidden="true">
                  ✍️
                </span>
              </div>

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{author.bio}</p>

              <div className="mt-4 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Focus:</span> {author.focus}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authors;
