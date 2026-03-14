import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is WishSpark?",
    a: "WishSpark is a free online platform that lets you create and share beautiful, personalized festival greetings with your loved ones. You can create animated greeting cards for 35+ festivals and occasions including Diwali, Christmas, Eid, Onam, Birthday, Anniversary, and many more."
  },
  {
    q: "Is WishSpark completely free to use?",
    a: "Yes! WishSpark is 100% free to use. There are no hidden charges, no premium plans, and no registration required. You can create unlimited greetings and share them with anyone."
  },
  {
    q: "How do I create a greeting?",
    a: "Simply choose a festival or occasion from our homepage, enter your name in the form provided, and click 'Create Greeting'. A unique shareable link will be generated that you can send to your friends and family via WhatsApp or any other platform."
  },
  {
    q: "How does the gift box animation work?",
    a: "When your friend opens the link you share, they will see a beautiful animated gift box (or special animations like Easter Egg or Diwali Chirag Vilakku for specific festivals) with your name on it. When they tap to open, a stunning greeting card is revealed with celebratory confetti and animations."
  },
  {
    q: "Can the recipient create their own greeting?",
    a: "Yes! After viewing your greeting, the recipient gets an option to create their own greeting for the same festival. This creates a viral chain of wishes where everyone can spread joy to their loved ones."
  },
  {
    q: "Do I need to create an account or sign up?",
    a: "No! WishSpark requires no registration, no login, and no account creation. Just visit the website, create your greeting, and share it instantly. It's that simple!"
  },
  {
    q: "Which festivals are supported?",
    a: "WishSpark supports 35+ festivals and occasions including Onam, Vishu, Christmas, New Year, Diwali, Eid Mubarak, Holi, Raksha Bandhan, Independence Day, Republic Day, Valentine's Day, Mother's Day, Father's Day, Birthday, Anniversary, Thanksgiving, Easter, Pongal, Navratri, Durga Puja, Ganesh Chaturthi, and many more."
  },
  {
    q: "How do I share my greeting?",
    a: "After creating your greeting, you'll get a unique link that you can share via WhatsApp, Facebook, Instagram, Twitter, email, or any messaging app. Simply copy the link or use the WhatsApp share button for instant sharing."
  },
  {
    q: "Is my personal information safe?",
    a: "Absolutely! We only use the name you provide to generate a shareable link. Your name is encoded directly in the URL and is not stored on our servers. We respect your privacy and do not collect or sell any personal data."
  },
  {
    q: "Can I use WishSpark on my mobile phone?",
    a: "Yes! WishSpark is fully responsive and works perfectly on all devices — smartphones, tablets, laptops, and desktops. The animations and greeting cards look beautiful on every screen size."
  },
  {
    q: "Why do I see ads on WishSpark?",
    a: "WishSpark is a free platform, and we use advertisements to support the costs of running and maintaining the service. The ads help us keep WishSpark free for everyone. We use Google AdSense to display relevant and non-intrusive advertisements."
  },
  {
    q: "Can I suggest a new festival to be added?",
    a: "Of course! We're always looking to add more festivals and occasions. Please reach out to us through our Contact page with your suggestion, and we'll do our best to add it."
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-gold-gradient mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Everything you need to know about WishSpark and how to create beautiful festival greetings.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-glass border border-gold/10 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground font-display font-semibold text-left hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
