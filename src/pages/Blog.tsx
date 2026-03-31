import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import AdBanner from "@/components/AdBanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 12;

const parseDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
};

const Blog = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "readTime">("newest");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    [],
  );

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const posts = blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;
      const haystack = [post.title, post.excerpt, post.author, post.category].join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    });

    return [...posts].sort((a, b) => {
      if (sortBy === "newest") return parseDate(b.date) - parseDate(a.date);
      if (sortBy === "oldest") return parseDate(a.date) - parseDate(b.date);

      const readA = Number.parseInt(a.readTime, 10) || 0;
      const readB = Number.parseInt(b.readTime, 10) || 0;
      return readB - readA;
    });
  }, [query, activeCategory, sortBy]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug);

  const totalPages = Math.max(1, Math.ceil(regularPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = regularPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const handleFiltersChange = (nextPage = 1) => {
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            WishSpark Blog
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stories, tips, and traditions from the world of festivals and celebrations.
            Written by real people who love spreading joy.
          </p>
        </div>

        {/* Blog intro content block */}
        <div className="bg-glass rounded-2xl p-6 border border-gold/10 mb-10 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-lg font-display font-semibold text-foreground">About the WishSpark Blog</h2>
          <p>
            The WishSpark Blog is a space where we explore the meaning behind the celebrations, festivals, and milestones that bring people together. Every culture has its own way of marking important moments — from the lights of Diwali and the colors of Holi to the quiet warmth of a birthday message sent across a screen at midnight. Our articles aim to capture those moments with depth and sincerity.
          </p>
          <p>
            We cover a wide range of topics including festival traditions and their origins, how to write heartfelt wishes for different occasions, ideas for birthday surprises and gifts, and tips for celebrating relationship milestones in meaningful ways. Whether you are looking for inspiration for a wedding anniversary message, trying to understand the significance of Eid greetings, or simply want to know how to make someone's birthday feel special, you will find practical and thoughtful content here.
          </p>
          <p>
            Our writers draw from real experiences, cultural research, and conversations with people who take celebrations seriously. Each article is written to be genuinely useful — not just a list of generic lines you could find anywhere, but actual context that helps you connect with the person you are trying to reach. We believe a well-chosen word at the right moment carries more weight than any gift ever could.
          </p>
          <p>
            We publish articles regularly on topics like love and relationships, friendship appreciation, seasonal festivals, birthday culture, and digital tools that help you express yourself better. Browse the posts below, save the ones that resonate, and share them with the people in your life who deserve a little extra appreciation today.
          </p>
        </div>

        <div className="bg-glass rounded-2xl p-4 md:p-5 border border-gold/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                handleFiltersChange();
              }}
              placeholder="Search by topic, keyword, author..."
              className="md:col-span-2"
              aria-label="Search blog articles"
            />
            <div className="grid grid-cols-2 gap-3">
              <select
                value={activeCategory}
                onChange={(event) => {
                  setActiveCategory(event.target.value);
                  handleFiltersChange();
                }}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                aria-label="Filter posts by category"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(event) => {
                  setSortBy(event.target.value as "newest" | "oldest" | "readTime");
                  handleFiltersChange();
                }}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                aria-label="Sort posts"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="readTime">Longest Read</option>
              </select>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Showing {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* Featured post */}
        {featuredPost ? (
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-glass rounded-2xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                Featured
              </span>
              <span className="text-xs text-muted-foreground">{featuredPost.category}</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl md:text-5xl shrink-0">{featuredPost.emoji}</span>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ) : null}

        <AdBanner adSlot="BLOG_TOP_SLOT" adFormat="horizontal" className="max-w-4xl mx-auto mb-8" />

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paginatedPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block bg-glass rounded-2xl p-5 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{post.emoji}</span>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-glass rounded-2xl border border-gold/10 mt-6">
            <p className="text-2xl mb-2">🔎</p>
            <h2 className="text-lg font-display font-semibold text-foreground">No posts found</h2>
            <p className="text-sm text-muted-foreground mt-1">Try a different keyword or category filter.</p>
          </div>
        ) : null}

        {totalPages > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleFiltersChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-gold/20"
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground px-2">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleFiltersChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-gold/20"
            >
              Next
            </Button>
          </div>
        ) : null}

        {/* Tools cross-link section */}
        <div className="mt-12 bg-glass rounded-2xl p-6 border border-gold/10">
          <h2 className="text-lg font-display font-semibold text-foreground mb-2">Try Our Free Birthday &amp; Fun Tools</h2>
          <p className="text-sm text-muted-foreground mb-5">Beyond articles, WishSpark offers free interactive tools for birthdays, love, and friendship.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link to="/tools/birthday-wishes-generator" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>🎂</span><span>Birthday Wishes</span>
            </Link>
            <Link to="/tools/birthday-card-maker" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>🎨</span><span>Card Maker</span>
            </Link>
            <Link to="/tools/love-calculator" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>💕</span><span>Love Calculator</span>
            </Link>
            <Link to="/tools/age-calculator" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>🧮</span><span>Age Calculator</span>
            </Link>
            <Link to="/tools/birthday-countdown" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>⏳</span><span>Birthday Countdown</span>
            </Link>
            <Link to="/tools/crush-calculator" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>🔥</span><span>Crush Calculator</span>
            </Link>
            <Link to="/tools/couple-name-generator" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>💑</span><span>Couple Names</span>
            </Link>
            <Link to="/tools/friendship-calculator" className="flex items-center gap-2 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-gold/10 hover:border-gold/30 transition-all text-sm font-medium text-foreground hover:text-primary">
              <span>👯</span><span>Friendship Test</span>
            </Link>
          </div>
        </div>

        <AdBanner adSlot="BLOG_BOTTOM_SLOT" adFormat="horizontal" className="max-w-4xl mx-auto mt-8" />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;