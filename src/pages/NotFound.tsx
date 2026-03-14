import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <div className="text-8xl mb-6">😢</div>
        <h1 className="text-5xl font-display font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-muted-foreground mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry — you can explore our festivals, tools, or head back home!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold" size="lg">
              <span aria-hidden="true" className="mr-2">🏠</span> Go to Homepage
            </Button>
          </Link>
          <Link to="/sitemap">
            <Button variant="outline" size="lg" className="border-gold/20">
              <span aria-hidden="true" className="mr-2">🔎</span> View Sitemap
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
