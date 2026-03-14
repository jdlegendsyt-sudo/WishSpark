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
            WishSpark is a free online platform that lets you create and share beautiful, personalized
            festival greetings with your loved ones. We believe that every celebration deserves a special touch,
            and our animated greeting cards bring joy and surprise to every occasion.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Our Mission</h2>
          <p>
            Our mission is to help people connect and celebrate together, no matter where they are.
            In a world where digital communication is the norm, we wanted to bring back the excitement
            of receiving a thoughtful, personalized greeting — with a modern twist. By making it easy
            to create and share stunning festival greetings, we aim to spread happiness and strengthen
            bonds between friends and family across the globe.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Our Story</h2>
          <p>
            WishSpark was born out of a simple idea: what if sending festival wishes could be more than
            just a text message? We noticed that during festivals, people share generic images and
            forwards that lack a personal touch. We wanted to create something different — a platform
            where anyone can send a unique, animated greeting that feels special and personal.
          </p>
          <p>
            Starting with a handful of festivals, we've grown to support over 35 festivals and
            occasions from diverse cultures and traditions. From Diwali and Christmas to Eid and Onam,
            from birthdays to anniversaries — WishSpark covers celebrations that matter to people worldwide.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>35+ festival and occasion greetings covering major celebrations worldwide</li>
            <li>Unique animated gift box surprise that delights recipients</li>
            <li>Special themed animations — Diwali lamp lighting, Easter egg cracking, and more</li>
            <li>Easy sharing via WhatsApp and other social platforms</li>
            <li>Completely free to use with no registration required</li>
            <li>Viral sharing — recipients can create and share their own greetings</li>
            <li>Mobile-friendly design that works beautifully on all devices</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground">Supported Festivals</h2>
          <p>
            We support greetings for all major festivals including Onam, Vishu, Christmas, New Year,
            Diwali, Eid, Holi, Raksha Bandhan, Independence Day, Republic Day, Valentine's Day,
            Mother's Day, Father's Day, Birthday, Anniversary, Thanksgiving, Easter, Pongal,
            Makar Sankranti, Navratri, Durga Puja, Ganesh Chaturthi, Janmashtami, Baisakhi,
            Lohri, Ugadi, Bihu, Ramadan, Friendship Day, Teachers' Day, Children's Day, and many more.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">How It Works</h2>
          <p>
            Simply choose a festival, enter your name, and share the generated link with your
            friends. When they open the link, they'll see a beautiful animated gift box with your name.
            Upon opening the gift, a stunning greeting is revealed with celebratory confetti and sparkles.
            They can then create their own greeting and continue the chain of joy!
          </p>
          <p>
            Learn more about the process on our{" "}
            <Link to="/how-it-works" className="text-primary underline">How It Works</Link> page.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground">Contact Us</h2>
          <p>
            Have questions, feedback, or suggestions? We'd love to hear from you! Reach out to us
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