import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">About WishSpark</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            WishSpark is a web platform designed to help people create and share personalized greetings and celebration-focused
            utility content with minimal effort. The product began with a simple principle: meaningful digital wishes should not
            require design skills, paid software, or complicated workflows. Over time, the platform expanded from greeting card
            experiences into a broader set of practical tools that support birthdays, social sharing, and light entertainment.
          </p>
          <p>
            Today, WishSpark serves users who want speed, clarity, and personalization in one place. Whether someone is preparing a
            festival greeting, generating birthday wishes, or using a quick calculator, the goal is the same: reduce friction and make
            digital communication feel thoughtful instead of generic.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">What the Website Is</h2>
          <p>
            At its core, WishSpark is a browser-based creation and sharing platform. It combines interactive greeting pages,
            message generation tools, date and age utilities, and social engagement calculators in a single ecosystem. The product is
            intentionally accessible across devices and internet conditions so users can complete tasks quickly, even on mobile.
          </p>
          <p>
            WishSpark is not positioned as a social network or messaging app. Instead, it works as a preparation and publishing layer
            that helps users craft better shareable content before they distribute it on their preferred communication channels.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Why WishSpark Was Created</h2>
          <p>
            The initial idea came from a common behavior observed during festive seasons: people want to send wishes at scale, but most
            messages become repetitive and impersonal. Generic forwards are easy, but they do not reflect genuine intent. On the other
            hand, truly customized design work takes time and effort many users cannot spare.
          </p>
          <p>
            WishSpark was created to close that gap. The platform allows users to add personal identity, choose a suitable format,
            and share a presentable outcome quickly. The objective is to preserve the emotional value of greetings while still matching
            the pace of modern digital communication.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Who the Platform Is For</h2>
          <p>
            WishSpark is built for a broad audience: students sharing birthday wishes with friends, professionals sending festive
            messages to colleagues, families celebrating across cities, and creators looking for quick, polished assets they can share.
            It is equally useful for users who prefer utility-first tools, such as age or countdown calculators, and those who want
            engagement-focused content for chat groups.
          </p>
          <p>
            The platform is especially helpful for users who prioritize convenience without compromising presentation quality. If someone
            needs a professional-looking output quickly, WishSpark provides a reliable path from input to shareable result.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">What Makes WishSpark Useful</h2>
          <p>
            Usefulness on WishSpark comes from three design choices: focused task flows, strong personalization defaults, and clear
            navigation. Each tool is built around one primary outcome, which reduces confusion and improves completion rates. Users are
            not required to learn complex interfaces before getting value.
          </p>
          <p>
            Personalization is integrated into nearly every experience, which increases perceived relevance and shareability. Internal
            structure is also designed so users can move naturally between related pages, improving discoverability and time on site.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Festival greeting experiences for major celebrations and seasonal moments</li>
            <li>Birthday-focused tools for cards, countdowns, and personalized wishes</li>
            <li>Lightweight social calculators and generators for group engagement</li>
            <li>Mobile-friendly interfaces with low-friction sharing paths</li>
            <li>No complicated setup for basic usage</li>
            <li>Consistent visual language and predictable interaction patterns</li>
            <li>Regular content and feature refinement based on user behavior</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground">Coverage and Content Scope</h2>
          <p>
            WishSpark supports a broad set of occasions across cultural and personal contexts, including major festivals, national days,
            birthdays, and recurring celebration moments. This broad coverage allows users to rely on one destination throughout the year
            instead of searching for a new tool every time an event arrives.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">How It Works in Practice</h2>
          <p>
            In a typical flow, users pick a page based on intent, provide a few inputs, preview the output, and share the result.
            The process is intentionally short and repeatable. For users who return regularly, this consistency improves confidence and
            reduces the effort needed to create high-quality wishes for multiple contacts.
          </p>
          <p>
            Learn more about the process on our{" "}
            <Link to="/how-it-works" className="text-primary underline">How It Works</Link> page.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Future Plans</h2>
          <p>
            The roadmap focuses on depth, trust, and usability. Future iterations include richer content guidance for each tool,
            stronger internal recommendations between related pages, and better educational context so users understand when and how to
            use each feature effectively. Additional work is planned for improved accessibility, faster mobile performance, and clearer
            policy documentation for users and advertisers.
          </p>
          <p>
            WishSpark also plans to improve transparency around product updates, content quality standards, and support workflows.
            The long-term objective is to maintain a platform that is reliable for users and credible for publishing partners.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Contact Us</h2>
          <p>
            Questions, feedback, and partnership inquiries are welcome. Reach out to us
            at{" "}
            <a href="mailto:support@wishspark.xyz" className="text-primary underline">support@wishspark.xyz</a>{" "}
            or visit our{" "}
            <Link to="/contact" className="text-primary underline">Contact page</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;