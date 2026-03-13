import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import AdBanner from "@/components/AdBanner";

const Blog = () => {
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

        {/* Featured post */}
        <Link
          to={`/blog/${blogPosts[0].slug}`}
          className="group block bg-glass rounded-2xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              Featured
            </span>
            <span className="text-xs text-muted-foreground">{blogPosts[0].category}</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-4xl md:text-5xl shrink-0">{blogPosts[0].emoji}</span>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {blogPosts[0].title}
              </h2>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" /> {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {blogPosts[0].readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>

        <AdBanner adSlot="BLOG_TOP_SLOT" adFormat="horizontal" className="max-w-4xl mx-auto mb-8" />

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.slice(1).map((post) => (
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

        <AdBanner adSlot="BLOG_BOTTOM_SLOT" adFormat="horizontal" className="max-w-4xl mx-auto mt-8" />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;