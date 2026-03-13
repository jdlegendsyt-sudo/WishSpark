import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  useEffect(() => {
    document.title = "Disclaimer — WishSpark | Important Information";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Read WishSpark's disclaimer. Important information about our free greeting card platform, accuracy of content, external links, and third-party advertisements.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Disclaimer</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: March 1, 2026</p>

          <h2 className="text-xl font-display font-semibold text-foreground">General Information</h2>
          <p>
            The information provided on WishSpark (https://wishspark.xyz) is for general
            informational and entertainment purposes only. WishSpark is a free greeting card creation platform
            that allows users to create and share personalized festival greetings.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">No Professional Advice</h2>
          <p>
            The content on this website does not constitute professional advice of any kind. WishSpark is
            purely an entertainment and social sharing platform. Any festival descriptions, cultural information,
            or historical references are provided for informational purposes and should not be considered
            authoritative sources.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information about festivals and celebrations,
            WishSpark makes no representations or warranties about the completeness, reliability, or accuracy
            of this information. Any action you take based on the information on this website is strictly
            at your own risk.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">External Links</h2>
          <p>
            WishSpark may contain links to external websites. We do not control the content or practices
            of these external sites and are not responsible for their privacy policies or content.
            Visiting external links is at your own risk.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">User-Generated Content</h2>
          <p>
            Users are responsible for the names and messages they include in their greetings. WishSpark
            is not responsible for any content created by users through our platform. We reserve the right
            to take action against misuse of our service.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Advertisements</h2>
          <p>
            WishSpark displays advertisements through Google AdSense and other advertising networks.
            These ads are served by third-party companies and may use cookies to personalize content.
            WishSpark is not responsible for the content of these advertisements. For more information,
            please review our Privacy Policy.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Changes to This Disclaimer</h2>
          <p>
            WishSpark reserves the right to modify this disclaimer at any time. Changes will be
            effective immediately upon posting. We encourage you to review this page periodically.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Contact Us</h2>
          <p>
            If you have any questions or concerns about this disclaimer, please contact us through
            our Contact page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
