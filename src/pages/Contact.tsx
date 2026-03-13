import { useState, useEffect } from "react";
import { Send, Mail, MessageCircle, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const WEB3FORMS_KEY = "775e0d8e-4a35-4c6c-a847-ca467fdfe402";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us — WishSpark | Get in Touch";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Contact the WishSpark team. Have questions, feedback, or suggestions about our festival greeting card maker? Reach out via our contact form or email us at support@wishspark.xyz.");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
      } else {
        toast({ title: "Error", description: data.message || "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please check your connection and try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-4 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-8">
          We'd love to hear from you! Reach out with questions, suggestions, or feedback.
        </p>

        <div className="bg-glass rounded-2xl p-6 border border-gold/10 mb-8 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Email Us</p>
              <a href="mailto:support@wishspark.xyz" className="text-sm text-primary hover:underline">
                support@wishspark.xyz
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Response Time</p>
              <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="bg-glass rounded-2xl p-8 text-center border border-gold/20 shadow-gold">
            <p className="text-4xl mb-4">✅</p>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground">Your message has been received. We'll get back to you within 24-48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-glass rounded-2xl p-6 md:p-8 space-y-4 border border-gold/20 shadow-gold">
            <h2 className="text-lg font-display font-semibold text-foreground">Send us a message</h2>
            <input type="hidden" name="subject" value="New Contact Form Submission - WishSpark" />
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name</label>
              <Input name="name" required placeholder="Your name" maxLength={100} className="bg-secondary/50 border-gold/20 text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input name="email" required type="email" placeholder="your@email.com" maxLength={255} className="bg-secondary/50 border-gold/20 text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Subject</label>
              <Input name="subject_line" required placeholder="What is this about?" maxLength={200} className="bg-secondary/50 border-gold/20 text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea name="message" required placeholder="Your message..." rows={5} maxLength={2000} className="bg-secondary/50 border-gold/20 text-foreground placeholder:text-muted-foreground" />
            </div>
            {/* Web3Forms honeypot for spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            <Button type="submit" disabled={loading} className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold" size="lg">
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
