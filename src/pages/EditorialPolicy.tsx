import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EditorialPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-8">Editorial Policy</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: April 6, 2026</p>

          <p>
            This page explains how WishSpark creates, reviews, updates, and governs published content across
            blog posts, celebration guidance, and tool-focused explainers. Our objective is to publish practical,
            people-first content that is accurate, transparent, and useful for real users.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">1. Editorial Mission</h2>
          <p>
            WishSpark publishes content that helps users create better greetings, understand celebration contexts,
            and use tools responsibly. We prioritize clarity, practical value, and cultural respect over clickbait,
            sensational claims, or shallow summaries.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">2. Content Creation Standards</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Every article is drafted by a named contributor and reviewed before publication.</li>
            <li>We aim for original writing with concrete examples and actionable guidance.</li>
            <li>We avoid auto-generated filler text, spun content, and duplicate page variants.</li>
            <li>We use clear headings, readable formatting, and internal links where they improve navigation.</li>
            <li>For practical tools, we explain intended usage, limits, and user expectations in plain language.</li>
          </ul>

          <h2 className="text-xl font-display font-semibold text-foreground">3. Accuracy and Source Hygiene</h2>
          <p>
            For cultural, policy, or technical topics, we validate claims using reputable public references.
            When relevant, we include a references section in articles so users can review source material
            directly. If we cannot verify a claim with confidence, we revise or remove it.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">4. Human Review and Quality Checks</h2>
          <p>
            Before publishing, content is checked for factual consistency, readability, and user usefulness.
            We also review page quality signals such as excessive repetition, weak sections, and broken links.
            Articles that do not meet our quality threshold are updated or marked for expansion.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">5. Updates, Corrections, and Retractions</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Material updates are reflected by updating article metadata when applicable.</li>
            <li>If a factual error is identified, we correct it as quickly as possible.</li>
            <li>Outdated pages may be revised, merged, or removed to maintain site quality.</li>
            <li>Users can report issues through <a href="mailto:support@wishspark.xyz" className="text-primary underline">support@wishspark.xyz</a>.</li>
          </ul>

          <h2 className="text-xl font-display font-semibold text-foreground">6. Advertising and Editorial Independence</h2>
          <p>
            Advertising does not determine editorial conclusions. We do not publish content solely to host ads,
            and we do not accept paid placement that misleads users about factual or policy-sensitive topics.
            Editorial decisions are made on usefulness and quality standards, not advertiser preference.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">7. AI and Automation Disclosure</h2>
          <p>
            We may use software-assisted drafting workflows for structure support, but published content is reviewed
            and edited by humans before it is released. We do not intentionally publish fully unreviewed machine output.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">8. User Trust and Transparency</h2>
          <p>
            We maintain transparent identity, policy, and support pages so users can evaluate who runs the platform,
            how content is produced, and how to request help. See our <Link to="/authors" className="text-primary underline">Authors</Link>,
            <Link to="/about" className="text-primary underline"> About</Link>, and <Link to="/contact" className="text-primary underline"> Contact</Link> pages for details.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditorialPolicy;
