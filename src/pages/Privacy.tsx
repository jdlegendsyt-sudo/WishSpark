import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — WishSpark | How We Protect Your Data";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Read WishSpark's privacy policy. Learn how we collect, use, and protect your data. We use Google AdSense for ads and respect GDPR & CCPA privacy rights.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: March 1, 2026</p>

          <p>
            WishSpark ("we", "our", or "us") operates the website{" "}
            <a href="https://wishspark.xyz" className="text-primary underline">
              https://wishspark.xyz
            </a>{" "}
            (the "Service"). This page informs you of our policies regarding the collection, use, and
            disclosure of personal data when you use our Service.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">1. Information We Collect</h2>
          <p>
            WishSpark collects minimal personal information. When you create a greeting, we only use
            the name you provide to generate a shareable link. We do not store your name on our servers.
            The name is encoded directly in the URL you share.
          </p>
          <p>
            <strong className="text-foreground">Automatically collected information:</strong> When you visit our website,
            our servers may automatically log standard data provided by your web browser. This may include
            your device's Internet Protocol (IP) address, browser type and version, pages visited,
            time and date of your visit, and time spent on each page.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">2. How We Use Information</h2>
          <p>
            The information you provide (your name) is used solely to create a personalized greeting
            link. We do not sell, trade, or transfer your personal information to third parties.
            Automatically collected data is used to analyze website traffic and improve our service.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our
            website. A cookie is a small text file stored on your device when you visit a website.
          </p>
          <p><strong className="text-foreground">Types of cookies we use:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Essential cookies:</strong> Required for basic website functionality, such as remembering your cookie consent preference.</li>
            <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong className="text-foreground">Advertising cookies:</strong> Used by Google AdSense and its partners to serve relevant advertisements based on your browsing habits.</li>
          </ul>
          <p>
            You can control cookies through your browser settings. However, disabling cookies may
            affect the functionality of certain parts of our website.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">4. Third-Party Advertising (Google AdSense)</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google, as a third-party
            vendor, uses cookies to serve ads based on your prior visits to our website or other websites
            on the Internet.
          </p>
          <p>
            Google's use of advertising cookies enables it and its partners to serve ads to you based
            on your visit to our site and/or other sites on the Internet. You may opt out of
            personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Google's Ads Settings
            </a>.
          </p>
          <p>
            For more information about how Google uses data when you use our site, please visit{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              How Google uses data when you use our partners' sites or apps
            </a>.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect against
            unauthorized access, alteration, disclosure, or destruction of your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">6. Children's Privacy</h2>
          <p>
            Our Service is intended for general audiences and does not knowingly collect personal
            information from children under the age of 13. If we become aware that we have collected
            personal data from a child under 13, we will take steps to delete such information promptly.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">7. Your Rights (GDPR & CCPA)</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The right to access the personal data we hold about you</li>
            <li>The right to request correction or deletion of your data</li>
            <li>The right to opt out of the sale of personal information (California residents)</li>
            <li>The right to withdraw consent for data processing</li>
            <li>The right to lodge a complaint with a data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:support@wishspark.xyz" className="text-primary underline">support@wishspark.xyz</a>.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">8. Third-Party Links</h2>
          <p>
            Our Service may contain links to third-party websites that are not operated by us.
            We have no control over and assume no responsibility for the content, privacy policies,
            or practices of any third-party sites or services.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
            Your continued use of the Service after any changes constitutes acceptance of the new policy.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;