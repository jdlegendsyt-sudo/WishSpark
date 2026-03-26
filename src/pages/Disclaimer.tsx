import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Disclaimer</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: March 26, 2026</p>

          <h2 className="text-xl font-display font-semibold text-foreground">General Information</h2>
          <p>
            WishSpark is a web platform that offers greeting experiences, utility-style tools, and entertainment-focused features.
            All content and functionality on this website are provided for general information, creativity, and personal use.
            By using this website, you acknowledge that you are responsible for how you interpret and apply any information,
            generated results, or shared outputs.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Entertainment and Informational Use</h2>
          <p>
            Several tools on WishSpark, including compatibility calculators and name generators, are intended for entertainment.
            These tools are not scientific, psychological, medical, legal, financial, or relationship counseling services.
            Results are algorithmic outputs based on user input and should not be treated as objective truth or professional guidance.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">No Professional Advice</h2>
          <p>
            Content on WishSpark does not constitute professional advice of any kind. If you need professional support in legal,
            financial, health, or personal matters, consult a qualified practitioner. Any decisions you make based on content from
            this website are made at your own discretion and risk.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Accuracy and Completeness</h2>
          <p>
            We aim to keep information current and useful, but we do not guarantee that all content is complete, accurate,
            or continuously up to date. Festival references, examples, and descriptive text may be simplified for readability.
            We reserve the right to revise content without prior notice to improve quality or compliance.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">User Inputs and Shared Outputs</h2>
          <p>
            Users are solely responsible for text, names, and messages entered into tools. You should not submit unlawful,
            abusive, misleading, or rights-infringing content. If you share generated outputs publicly or privately,
            you are responsible for ensuring that such use is appropriate and lawful in your jurisdiction.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Third-Party Links</h2>
          <p>
            WishSpark may include links to external websites or services for convenience. We do not control external content,
            security, or privacy practices. Accessing third-party websites is your decision, and we are not responsible for
            losses or issues arising from those external resources.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Advertising Disclaimer</h2>
          <p>
            This website may display advertisements from Google AdSense and other third-party networks. Ad content is delivered by
            external providers and may be personalized through cookies or similar technologies according to third-party policies.
            WishSpark does not endorse every advertised claim and is not liable for transactions, outcomes, or disputes related to
            products or services promoted through third-party ads.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Availability and Technical Limitations</h2>
          <p>
            We work to maintain website reliability, but uninterrupted service cannot be guaranteed. Temporary downtime, browser
            incompatibility, data loss in client-side sessions, or delayed rendering may occur due to network conditions,
            third-party dependencies, or maintenance activity. We are not liable for losses resulting from temporary service issues.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, WishSpark and its operators are not liable for direct or indirect damages
            resulting from use of the website, reliance on generated outputs, interaction with advertisements, or use of external links.
            This includes, without limitation, loss of data, business interruption, reputation impact, or incidental damages.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Policy Relationship</h2>
          <p>
            This Disclaimer should be read together with our Privacy Policy and Terms and Conditions. Where specific data practices,
            user rights, or service rules are covered in those documents, those policies provide additional detail and govern your use
            of the relevant features.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Changes to This Disclaimer</h2>
          <p>
            We may revise this page periodically to reflect product changes, legal requirements, or compliance updates. Revisions become
            effective when published on this page. Continued use of the website after updates indicates acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Contact</h2>
          <p>
            If you have questions regarding this disclaimer, contact us at
            <a href="mailto:support@wishspark.xyz" className="text-primary underline"> support@wishspark.xyz</a>
            or use the Contact page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
