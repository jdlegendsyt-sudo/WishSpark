import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Use — WishSpark | Usage Guidelines";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Read the terms of use for WishSpark. Understand how to use our free festival greeting card maker, user content guidelines, and intellectual property policies.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Terms of Use</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: March 1, 2026</p>

          <h2 className="text-xl font-display font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing and using WishSpark, you agree to be bound by these Terms of Use.
            If you do not agree with any part of these terms, please do not use our service.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">2. Use of Service</h2>
          <p>
            WishSpark provides a free greeting card creation and sharing service. You may use our
            service to create personalized greetings for festivals and special occasions. You agree
            not to use the service for any unlawful or harmful purpose.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">3. User Content</h2>
          <p>
            You are responsible for the names and content you provide when creating greetings.
            You agree not to submit any content that is offensive, defamatory, or violates
            the rights of others.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">4. Intellectual Property</h2>
          <p>
            All content, designs, graphics, and animations on WishSpark are the property of
            WishSpark and are protected by intellectual property laws. You may not reproduce,
            modify, or distribute our content without permission.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">5. Disclaimer</h2>
          <p>
            WishSpark is provided "as is" without warranties of any kind. We do not guarantee
            that the service will be uninterrupted, error-free, or secure.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>
            WishSpark shall not be liable for any indirect, incidental, special, or consequential
            damages arising from the use of our service.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">7. Third-Party Advertising</h2>
          <p>
            WishSpark displays advertisements provided by third-party ad networks, including Google AdSense.
            These ads may use cookies and similar technologies to serve relevant content based on your
            browsing activity. By using our Service, you acknowledge the presence of third-party ads
            and agree that WishSpark is not responsible for the content or accuracy of these advertisements.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">8. Third-Party Links</h2>
          <p>
            Our Service may contain links to external websites or services that are not owned or controlled
            by WishSpark. We have no control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party websites. You acknowledge and agree that WishSpark
            shall not be liable for any damage or loss caused by the use of such external sites.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws, without
            regard to conflict of law principles. Any disputes arising under these Terms shall be
            resolved through appropriate legal channels.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be
            effective immediately upon posting on this page. Your continued use of the Service
            after changes are posted constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>By email: <a href="mailto:support@wishspark.xyz" className="text-primary underline">support@wishspark.xyz</a></li>
            <li>By visiting our <a href="/contact" className="text-primary underline">Contact page</a></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
