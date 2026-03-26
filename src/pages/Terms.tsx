import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Terms of Use</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: March 26, 2026</p>

          <h2 className="text-xl font-display font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using WishSpark, you acknowledge that you have read, understood, and agree to be bound by these Terms and
            Conditions and all applicable laws. If you do not agree with these terms, you should discontinue use of the website.
            These terms apply to all users, including visitors, contributors, and users of interactive tools.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">2. Service Description</h2>
          <p>
            WishSpark provides web-based tools and content for festival greetings, birthday utilities, name-based generators,
            and related informational pages. Features may include personalization fields, shareable links, and utility calculations.
            Services are provided on an "as available" basis and may change over time as we improve functionality and content quality.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">3. Eligibility and User Responsibility</h2>
          <p>
            You are responsible for ensuring your use of the Service is lawful in your jurisdiction and suitable for your circumstances.
            If you use the Service on behalf of an organization, you represent that you have authority to accept these terms on that
            organization's behalf. You are responsible for any content or data you enter into forms and generators.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">4. Acceptable Use</h2>
          <p>
            You agree not to misuse the Service. Prohibited behavior includes but is not limited to: submitting unlawful or abusive
            content, attempting to interfere with site security, using automation to scrape content at scale, introducing malicious code,
            or using outputs in ways that violate intellectual property or privacy rights of others.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">5. User Input and Generated Outputs</h2>
          <p>
            Interactive pages on WishSpark may generate outputs based on user-provided names, dates, or messages. You retain
            responsibility for all input you submit and for how generated output is used or shared. You agree not to submit content that
            is defamatory, discriminatory, deceptive, or otherwise prohibited by law or platform standards.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">6. Intellectual Property</h2>
          <p>
            Unless otherwise stated, the website design, code, branding, text, graphics, and visual assets are owned by WishSpark or used
            under valid rights. You may use the Service for personal and lawful purposes. You may not copy, republish, distribute,
            reverse engineer, or commercially exploit substantial parts of the Service without prior written permission.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">7. Third-Party Services and Advertising</h2>
          <p>
            The website may display third-party advertisements, including Google AdSense. Third-party advertisers may use cookies or
            similar technologies according to their own policies. WishSpark does not control third-party ad content and does not guarantee
            the claims, quality, or safety of any advertised products or services. Your interactions with advertisers are between you and
            the relevant third party.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">8. External Links</h2>
          <p>
            WishSpark may contain links to external websites or resources for convenience. We are not responsible for the content,
            availability, security, or privacy practices of third-party sites. Accessing any third-party site is at your own discretion
            and risk.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">9. Availability and Modifications</h2>
          <p>
            We may update, suspend, or discontinue any part of the Service at any time, with or without prior notice. We also reserve the
            right to modify page content, feature sets, and technical implementation to maintain quality, compliance, and performance.
            We are not liable for interruptions, delays, or temporary unavailability.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">10. No Warranty</h2>
          <p>
            The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including
            merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted operation,
            complete accuracy, or that the Service will always be error-free.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, WishSpark and its operators will not be liable for indirect, incidental, special,
            consequential, or punitive damages, including loss of data, loss of profits, or business interruption arising from or related
            to use of the Service. Your sole remedy for dissatisfaction is to stop using the website.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless WishSpark, its operators, and affiliates from claims, liabilities, damages, and
            expenses resulting from your misuse of the Service, your violation of these terms, or your infringement of third-party rights.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">13. Governing Law and Disputes</h2>
          <p>
            These terms are governed by applicable laws in the relevant jurisdiction of operation. Any disputes arising from these terms
            shall be resolved through appropriate legal channels. Where legally permitted, parties should first attempt good-faith informal
            resolution before initiating formal proceedings.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">14. Changes to These Terms</h2>
          <p>
            We may revise these Terms and Conditions periodically to reflect legal, operational, or product updates. Any revision will be
            posted on this page with an updated "Last updated" date. Continued use of the Service after updates indicates acceptance of
            the revised terms.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">15. Contact</h2>
          <p>
            For questions related to these terms, contact us using the details below:
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
