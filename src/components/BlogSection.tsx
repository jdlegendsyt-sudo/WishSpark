import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section className="py-16 border-t border-gold/10" style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}>
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          From Our <span className="text-gold-gradient">Blog</span>
        </h2>
        <Link to="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
          View all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogPosts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block bg-glass rounded-2xl p-5 border border-gold/10 hover:border-gold/30 transition-colors duration-200 hover:shadow-gold"
          >
            <span className="text-2xl mb-2 block">{post.emoji}</span>
            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 text-sm">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.author}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
