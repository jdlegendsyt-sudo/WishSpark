import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/AdBanner";
import { toast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-6xl">📝</p>
          <h1 className="text-2xl font-display font-bold text-foreground">Article Not Found</h1>
          <Link to="/blog">
            <Button variant="outline" className="border-gold/30">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied!", description: "Share it with your friends." });
    }
  };

  // Get related posts (same category, excluding current)
  const related = blogPosts
    .filter(p => p.slug !== post.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-3xl">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <span aria-hidden="true">←</span> Back to Blog
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">👤</span> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">📅</span> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">⏱️</span> {post.readTime}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="border-gold/20 text-muted-foreground hover:text-primary"
              >
                <span aria-hidden="true" className="mr-1">🔗</span> Share
              </Button>
            </div>
          </header>

          <AdBanner adSlot="BLOG_POST_TOP" adFormat="horizontal" className="mb-8" />

          {/* Article content */}
          <div className="space-y-5">
            {post.content.map((paragraph, i) => {
              // Handle paragraphs with bold markdown-style formatting
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i} className="text-foreground/90 leading-relaxed text-[15px]">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={j} className="text-foreground font-semibold">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </p>
              );
            })}
          </div>

          {post.content.length > 4 && (
            <AdBanner adSlot="BLOG_POST_MID" adFormat="horizontal" className="my-8" />
          )}
        </article>

        {/* Author box */}
        <div className="bg-glass rounded-2xl p-6 border border-gold/10 mt-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">
              ✍️
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">WishSpark Contributor</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/20 mt-8 text-center">
          <p className="text-lg font-display font-semibold text-foreground mb-2">
            Ready to spread some joy?
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Create a free personalized festival greeting and share it with your loved ones.
          </p>
          <Link to="/">
            <Button className="bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold">
              Create a Greeting
            </Button>
          </Link>
        </div>

        {/* Related posts */}
        <section className="mt-12">
          <h2 className="text-xl font-display font-semibold text-foreground mb-6">
            You might also enjoy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((relPost) => (
              <Link
                key={relPost.slug}
                to={`/blog/${relPost.slug}`}
                className="group block bg-glass rounded-xl p-4 border border-gold/10 hover:border-gold/30 transition-all"
              >
                <span className="text-xl mb-2 block">{relPost.emoji}</span>
                <h3 className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                  {relPost.title}
                </h3>
                <p className="text-xs text-muted-foreground">{relPost.readTime}</p>
              </Link>
            ))}
          </div>
        </section>

        <AdBanner adSlot="BLOG_POST_BOTTOM" adFormat="horizontal" className="mt-8" />

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              author: {
                "@type": "Person",
                name: post.author,
              },
              datePublished: post.date,
              publisher: {
                "@type": "Organization",
                name: "WishSpark",
                url: "https://wishspark.xyz",
              },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;