export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  emoji: string;
  content: string[];
}

export interface AuthorProfile {
  name: string;
  role: string;
  focus: string;
  bio: string;
  profileUrl: string;
}

export const authorProfiles: Record<string, AuthorProfile> = {
  "Ananya Krishnan": {
    name: "Ananya Krishnan",
    role: "Culture & Storytelling Editor",
    focus: "Festival culture, greeting etiquette, and digital communication",
    bio: "Ananya writes practical guides on celebrations, relationships, and thoughtful communication based on real user behavior and community feedback.",
    profileUrl: "https://www.wishspark.xyz/about",
  },
  "Rahul Menon": {
    name: "Rahul Menon",
    role: "Festival Research Writer",
    focus: "Festival traditions, historical context, and regional celebration practices",
    bio: "Rahul researches festival traditions and converts cultural context into readable, actionable content for modern digital audiences.",
    profileUrl: "https://www.wishspark.xyz/about",
  },
  "Sneha Patel": {
    name: "Sneha Patel",
    role: "Lifestyle & User Experience Contributor",
    focus: "Messaging habits, relationship communication, and social sharing behavior",
    bio: "Sneha focuses on practical communication advice and audience-friendly content formats that improve message quality and shareability.",
    profileUrl: "https://www.wishspark.xyz/about",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-digital-greetings-matter",
    title: "Why Digital Greetings Still Matter in 2026",
    excerpt: "In a world of instant messages and memes, here's why taking a moment to send a real greeting still makes all the difference.",
    date: "February 28, 2026",
    author: "Ananya Krishnan",
    readTime: "4 min read",
    category: "Culture",
    emoji: "💌",
    content: [
      "I'll be honest — I used to be one of those people who'd just forward a random \"Happy Diwali\" image from a WhatsApp group and call it a day. No thought, no effort, just tap-forward-done. And I'm guessing a lot of you reading this have done the same thing at some point.",
      "But last year, something changed. My grandmother, who lives in Thrissur, told me on a phone call that she could always tell which wishes were \"real\" and which were just forwards. \"The ones with your name feel different,\" she said. That stuck with me.",
      "Think about it — when was the last time you received a greeting that actually felt personal? Not a mass-forwarded image with glittery text that someone found on Google, but something that had YOUR name on it, something that someone specifically created for you?",
      "That's the gap we noticed when building WishSpark. People want to send something personal, but they don't have the time or skills to design a greeting card from scratch. So they default to forwards. But what if creating a personalized greeting was as easy as typing your name?",
      "Digital greetings aren't going away. In fact, they're becoming MORE important as families spread across cities and countries. My cousins are in Dubai, my sister's in Bangalore, my parents are in Kochi. We can't always be together for every festival. But a thoughtful digital greeting? That bridges the gap.",
      "The trick is making it feel personal. A greeting with the sender's name, a surprise animation, a moment of delight — that's what separates a forgettable forward from a memorable wish. And honestly, it takes about 10 seconds to do. No excuses.",
      "So next time a festival comes around, skip the generic forward. Take those 10 seconds. Your grandmother will notice the difference. Trust me on that one."
    ]
  },
  {
    slug: "onam-traditions-you-didnt-know",
    title: "7 Onam Traditions You Probably Didn't Know About",
    excerpt: "Beyond the sadya and pookalam, Onam has some fascinating lesser-known traditions that have been passed down for generations.",
    date: "February 25, 2026",
    author: "Rahul Menon",
    readTime: "6 min read",
    category: "Festivals",
    emoji: "🌼",
    content: [
      "Everyone knows about the Onam Sadya — that legendary banana-leaf feast with 26+ dishes that makes you question every diet you've ever been on. And yes, Pookalam flower carpets are Instagram-famous at this point. But Onam is so much deeper than what most people see on social media.",
      "Let me share some traditions that even many Keralites don't fully know about.",
      "**1. Onakalikal — The forgotten games.** Before smartphones took over, Onam was THE gaming festival. Talappanthukali (ball game), Ambeyyal (archery), and Kutukutu (a tag-like game) were played in every neighborhood. My grandfather talks about how entire villages would compete. Today? Most kids haven't even heard of these games.",
      "**2. Thumbi Thullal — The dance of the dragonflies.** This is a women-only folk dance performed during Onam. Groups of women dress in the traditional Kerala kasavu saree and dance in circular formations. It's mesmerizing but rarely seen outside rural Kerala anymore.",
      "**3. Pulikali — Tiger play with a twist.** You might have seen the painted tiger dancers of Thrissur, but did you know Pulikali was originally a way for common people to mock the ruling class? The \"tigers\" and \"hunters\" were satire. It was political commentary disguised as folk art. Pretty clever for something that started centuries ago.",
      "**4. Onavillu — The musical bow.** This traditional musical instrument is played only during Onam season. It's essentially a bow with a string that produces a unique twanging sound. Artists go door to door playing it and singing Onam songs. I heard one for the first time at my great-aunt's house, and the sound is hauntingly beautiful.",
      "**5. Athapookalam's hidden math.** Those gorgeous flower arrangements aren't random. Traditional Pookalam designs follow precise geometric patterns passed down through families. My mother's family has a specific design that's been made for at least four generations. Each ring of flowers has meaning — the inner ring represents the home, outer rings represent the community.",
      "**6. Vallamkali — It's not just a boat race.** The snake boat races get all the attention (and they ARE spectacular), but the boats themselves are considered sacred. Before every race, there are elaborate rituals. The boats have names and histories. Some are over 100 years old. Rowers train for months. It's closer to a religious ceremony than a sporting event.",
      "**7. Maveli's promise.** The story of King Mahabali isn't just mythology for Keralites — it's a value system. Maveli's kingdom was one where \"everyone was equal\" — no theft, no poverty, no dishonesty. Onam isn't just celebrating a king's return; it's a reminder of what society could be. That's honestly my favorite part of the festival.",
      "These traditions are what make Onam more than just a holiday. They're living connections to a culture that's thousands of years old. So this Onam, maybe skip the generic WhatsApp forward and share something meaningful instead — a story, a tradition, a personal memory. That's the real spirit of the festival."
    ]
  },
  {
    slug: "best-ways-share-wishes-whatsapp",
    title: "The Best Way to Share Festival Wishes on WhatsApp (Without Being Annoying)",
    excerpt: "We've all been in those groups. Here's how to send wishes that people actually enjoy receiving.",
    date: "February 22, 2026",
    author: "Sneha Patel",
    readTime: "3 min read",
    category: "Tips",
    emoji: "📱",
    content: [
      "Okay, let's address the elephant in the room. We ALL have that one uncle who forwards 47 festival greetings to every single WhatsApp group at 5 AM. Blurry images, weird fonts, sometimes with completely wrong festival names. You know exactly who I'm talking about.",
      "I love the enthusiasm, I really do. But there's a better way to spread festive cheer without making people mute their notifications for a week.",
      "**Tip 1: Personal beats generic, every single time.** Here's a test — would YOU feel good receiving the same image that's already been forwarded 10,000 times? Probably not. But a wish with someone's actual name on it? That hits different. It shows you thought of that specific person.",
      "**Tip 2: One good wish > ten mediocre ones.** Instead of bombing all your groups, send one thoughtful greeting to each person. Quality over quantity. Your contacts will actually read it instead of scrolling past.",
      "**Tip 3: Timing matters more than you think.** Don't send wishes at midnight or 5 AM unless you want to be silently cursed. Mid-morning is the sweet spot — people are awake, in a good mood, and actually checking their phones leisurely.",
      "**Tip 4: Add a personal line.** Even if you're using a greeting tool (like, ahem, WishSpark), add a quick personal message with it. \"Hey Priya, made this for you! Miss our Diwali celebrations at college 🪔\" — see how that's 100x better than just a link?",
      "**Tip 5: Don't send the same wish to everyone.** People talk. If your wife, your mother, and your sister all get the exact same forward, someone's going to bring it up at dinner. I speak from experience.",
      "Look, the whole point of festival wishes is to make people feel remembered and valued. If your method of wishing does that, you're doing it right. If it makes people reach for the mute button, maybe it's time to switch things up."
    ]
  },
  {
    slug: "history-of-greeting-cards",
    title: "From Paper to Pixels: A Quick History of Greeting Cards",
    excerpt: "Greeting cards have been around for centuries. Here's how they evolved from handwritten notes to animated digital surprises.",
    date: "February 18, 2026",
    author: "Ananya Krishnan",
    readTime: "5 min read",
    category: "History",
    emoji: "📜",
    content: [
      "The earliest known greeting card dates back to around 1415, when a French duke sent a card to his wife from prison. Romantic? Absolutely. Practical? Well, it worked — we're still talking about it 600 years later.",
      "But greeting cards really took off in the 1800s when the penny post system made it affordable to send mail in England. Suddenly, you didn't need to be a duke to send someone a card. By the 1850s, mass-produced Christmas cards were a thing, and the greeting card industry was born.",
      "For about 150 years, not much changed. Cards got fancier — pop-ups, musical cards (who remembers those birthday cards that wouldn't stop playing music?), scented cards. But the format was the same: buy a card, write something, put it in an envelope, mail it.",
      "Then came the internet, and everything shifted. E-cards exploded in the early 2000s — remember those websites where you'd pick an animated card and type the recipient's email? They felt revolutionary at the time. But they also felt... impersonal. Like you couldn't even be bothered to go to a store.",
      "The smartphone era changed things again. WhatsApp and Instagram became the default way people share wishes. But instead of thoughtful messages, we got an avalanche of forwarded images. A step backward, honestly.",
      "Now we're seeing a new wave — interactive digital greetings. Not just static images, but experiences. Animated gift boxes that open. Festival-specific interactions like lighting a Diwali lamp or cracking an Easter egg. The greeting isn't just a message anymore; it's a moment.",
      "What's interesting is that the core purpose hasn't changed in 600 years. Whether it's a duke writing from a prison cell or someone typing their name into WishSpark, the intent is the same — telling someone \"I'm thinking of you.\" The medium changes, but the meaning doesn't.",
      "I think that's why greeting cards have survived every technological shift. They're not about the paper or the pixels. They're about the connection. And that never goes out of style."
    ]
  },
  {
    slug: "diwali-around-the-world",
    title: "How Diwali is Celebrated Differently Around the World",
    excerpt: "From the streets of Jaipur to the suburbs of New Jersey, Diwali looks wildly different depending on where you are.",
    date: "February 14, 2026",
    author: "Rahul Menon",
    readTime: "5 min read",
    category: "Festivals",
    emoji: "🪔",
    content: [
      "My first Diwali away from India was in London, and honestly, it felt wrong. No firecrackers at 4 AM (the neighbors would've called the police), no smell of mom's murukku frying, no random relatives showing up unannounced with mithai boxes. Just me, a scented candle from Tesco, and a video call home.",
      "But then a friend invited me to the Diwali celebrations at Trafalgar Square, and I realized something — Diwali doesn't shrink when you take it abroad. It shape-shifts.",
      "**India — The full experience.** Obviously, nothing beats Diwali in India. The weeks of preparation, the house cleaning (which I always conveniently had exams during), the shopping, the lights, the food. Every state does it differently too. In the North, it's all about Lakshmi Puja and card parties. In the South, it's more about oil baths at sunrise and family gatherings. In Bengal, they celebrate Kali Puja on the same night. Same festival, completely different vibes.",
      "**UK — Community celebrations.** Leicester has the largest Diwali celebrations outside India, and it's genuinely impressive. The Golden Mile lights up with thousands of bulbs, there's a full-on fireworks display, and the atmosphere is electric. The British-Indian community has created their own version that's both authentic and uniquely British.",
      "**USA — The suburban Diwali.** American Diwali has its own charm. Families decorate their porches with diyas and string lights (which confused my American neighbor who thought we were doing early Christmas). Community temples host massive celebrations with food stalls, dance performances, and fireworks. Some cities like San Antonio even have official Diwali events now.",
      "**Singapore and Malaysia — The multicultural twist.** In Singapore, Little India transforms during Diwali. What's beautiful is that it's not just Indians celebrating — Malay and Chinese friends join in. The food bazaars are insane. I ate my body weight in murukku at a Diwali market in KL once. No regrets.",
      "**Fiji, Trinidad, and Guyana — The diaspora keeping it alive.** The Indian diaspora in these countries has been celebrating Diwali for over a century, and they've developed their own unique traditions. In Trinidad, Diwali is a national holiday. In Fiji, entire neighborhoods light up. It's a testament to how deeply the festival is rooted in identity.",
      "**The digital Diwali.** And then there's the Diwali that exists across phone screens — the wishes, the video calls, the shared memories. For every Indian living abroad, Diwali morning starts with opening a flood of WhatsApp messages from family. It's chaotic, overwhelming, and honestly? It's the part I look forward to most.",
      "No matter where you are, Diwali finds a way to show up. It might look different, but the light — both literal and metaphorical — is the same everywhere."
    ]
  },
  {
    slug: "making-festivals-fun-for-kids",
    title: "5 Simple Ideas to Make Festivals Actually Fun for Kids",
    excerpt: "Beyond the sugar rush and screen time, here's how to get kids genuinely excited about festival traditions.",
    date: "February 10, 2026",
    author: "Sneha Patel",
    readTime: "4 min read",
    category: "Family",
    emoji: "👨‍👩‍👧‍👦",
    content: [
      "My 7-year-old nephew once asked me, \"Why do we celebrate Onam?\" and I panicked. I vaguely mumbled something about King Mahabali and a banana leaf feast, and he looked at me like I was making it all up. Fair enough — I was kind of winging it.",
      "That moment made me realize we often celebrate festivals on autopilot. We do the rituals because our parents did, but we don't always pass on the WHY. And kids? They need the why. They're tiny little why-machines.",
      "Here are some things that actually worked with the kids in our family:",
      "**1. Turn the story into an adventure.** Instead of lecturing about Mahabali or Rama, make it interactive. We did a \"Mahabali treasure hunt\" last Onam where clues were based on the story. The kids were SO into it. They learned the whole legend without even realizing it because they were too busy looking for the next clue behind the pookalam.",
      "**2. Let them OWN a tradition.** Kids love responsibility (in small doses). Let them be in charge of ONE thing. My niece is the official family Pookalam designer now. She takes it incredibly seriously. She researches designs, picks the flowers, and guards the pookalam from the dog with fierce dedication.",
      "**3. Send greetings together.** This sounds simple, but sit with your kid and create festival greetings together. Let them type the names, choose which friends and family to send to. It teaches them that festivals are about connecting with people, not just getting sweets and new clothes.",
      "**4. Cook ONE dish together.** You don't need to make the entire Onam Sadya with a 5-year-old (that's a recipe for chaos, literally). Just pick one dish. We do payasam every year with the kids. Is it messy? Absolutely. Is the payasam always perfect? Definitely not. But they remember making it. That's the point.",
      "**5. Share YOUR memories.** Kids love hearing about what you did as a child. \"When I was your age, we used to...\" — they eat this up. Tell them about your childhood Diwalis, your school Christmas parties, your grandmother's special festival recipes. These stories become THEIR memories too.",
      "The goal isn't to create perfect, Pinterest-worthy festival moments. It's to make kids feel like they're part of something bigger — a family, a culture, a tradition that goes back generations. If they grow up knowing WHY they celebrate, they'll keep celebrating long after we're gone. And that's kind of the whole point, isn't it?"
    ]
  },
  {
    slug: "christmas-vs-new-year-greetings",
    title: "Christmas Greetings vs New Year Wishes — What's the Etiquette?",
    excerpt: "Should you send both? Can you combine them? What about people who don't celebrate Christmas? Let's sort this out.",
    date: "February 6, 2026",
    author: "Ananya Krishnan",
    readTime: "3 min read",
    category: "Tips",
    emoji: "🎄",
    content: [
      "Every December, I face the same dilemma. Do I send Christmas wishes on the 25th AND New Year wishes on the 1st? Can I get away with a combined \"Merry Christmas and Happy New Year\" message? What about my friends who don't celebrate Christmas — do I skip straight to New Year?",
      "After years of overthinking this (and yes, I have spreadsheets), here's what I've figured out:",
      "**If someone celebrates Christmas, wish them on Christmas.** Don't wait and combine it with New Year. Christmas and New Year are different celebrations with different meanings. Combining them is like saying \"Happy Birthday and Congrats on your promotion\" in the same message — technically fine, but it dilutes both.",
      "**For friends who don't celebrate Christmas, just do New Year.** Simple. Clean. Nobody feels awkward. I made the mistake once of sending a \"Merry Christmas\" to my friend Faisal, and he was nice about it, but I could tell he was thinking \"bro, we've been friends for 15 years.\"",
      "**New Year wishes are universal — go wild.** This is the one time of year where you can literally wish every single person you know without any cultural concerns. New Year is a global reset button. Everyone's in.",
      "**Timing tip:** Send Christmas wishes on Christmas Eve or Christmas morning. Send New Year wishes on December 31st evening or January 1st morning. Don't be that person who sends New Year wishes on January 3rd. At that point, just wait for the next festival.",
      "**The combo message is okay in one specific case:** If you're sending a greeting to someone you only contact during festivals (we all have those contacts), a combined message on December 26-30 is acceptable. It covers both bases without being weird.",
      "Honestly though? The fact that you're thinking about this means you care, and that's the part that matters. Nobody's going to be offended by a well-timed, personalized wish — regardless of which holiday it's for."
    ]
  },
  {
    slug: "eid-mubarak-greeting-guide",
    title: "A Non-Muslim's Guide to Wishing Eid Mubarak (Without Being Awkward)",
    excerpt: "Want to wish your Muslim friends on Eid but not sure about the etiquette? Here's everything you need to know.",
    date: "February 2, 2026",
    author: "Rahul Menon",
    readTime: "4 min read",
    category: "Culture",
    emoji: "🌙",
    content: [
      "I grew up in a neighborhood in Kochi where Eid was everyone's festival. My mother would make special payasam, we'd get invited to our neighbor Ammi's house for biryani (the BEST biryani, I will die on this hill), and the whole street would be celebrating. It never occurred to me as a kid that Eid was \"not my festival.\"",
      "But I've noticed that many people, especially those who didn't grow up in diverse neighborhoods, feel nervous about wishing Eid. They want to, but they're worried about saying the wrong thing or being inappropriate. So let me clear some things up.",
      "**\"Eid Mubarak\" is all you need to say.** It literally means \"Blessed Eid.\" You don't need to know Arabic, you don't need to add anything fancy. Just \"Eid Mubarak!\" with a smile. That's it. Your Muslim friends will appreciate it.",
      "**There are TWO Eids, and they're different.** Eid ul-Fitr comes after Ramadan (the month of fasting) and is the bigger celebration for most families. Eid ul-Adha comes about two months later and is associated with Hajj. Both are important, both deserve wishes.",
      "**Don't say \"Happy Ramadan.\"** Ramadan is a month of fasting and reflection. You can say \"Ramadan Mubarak\" or \"Ramadan Kareem\" during the month, but \"Happy Ramadan\" sounds a bit off to most people. It's like saying \"Happy Lent\" — technically not wrong, but the vibe is different.",
      "**Food is the universal connector.** If your Muslim colleague brings Eid sweets to the office, eat them enthusiastically. If you're invited to an Eid gathering, GO. The food alone is worth it, but more importantly, your presence shows you care. I've never met an aunty who didn't beam when non-Muslim friends showed up for Eid.",
      "**A small gesture goes a long way.** Send a greeting, bring over sweets, wish the kids \"Eid Mubarak\" — these tiny things build bridges. In today's world, we need more bridge-builders.",
      "My neighbor Ammi is 78 now, and every Eid, I still send her a personalized greeting. Last year she called me and said, \"Mol, your wish was the first one I got this morning.\" That phone call was worth more than any biryani. (Though the biryani is still incredible.)"
    ]
  },
  {
    slug: "why-we-love-surprise-gifts",
    title: "The Psychology Behind Why Surprise Gifts Make Us So Happy",
    excerpt: "There's actual science behind why opening a surprise feels better than getting something expected. Here's what's happening in your brain.",
    date: "January 28, 2026",
    author: "Sneha Patel",
    readTime: "4 min read",
    category: "Psychology",
    emoji: "🎁",
    content: [
      "Quick experiment: think about the last time you received a gift you knew was coming versus a completely unexpected one. Which memory makes you smile more? If you're like most people, it's the surprise. And there's a real neurological reason for that.",
      "When your brain encounters something unexpected and positive, it releases a burst of dopamine — the \"feel-good\" chemical — that's actually LARGER than what it releases for expected positive events. Neuroscientists at Emory University and Baylor College of Medicine found this in a study where participants showed significantly more brain activity in pleasure centers when rewards were unpredictable.",
      "This is why the element of surprise is so powerful in gift-giving. It's not about the gift itself — it's about the moment of not knowing, the anticipation, and then the reveal. Your brain is literally more excited by the unexpected.",
      "Think about how this plays out in festival greetings. Someone sends you a link. You don't know exactly what's behind it. You tap. There's a gift box with a name on it. You tap again. BOOM — confetti, music, a personalized greeting. Your brain just went on a mini dopamine rollercoaster, and all it took was two taps.",
      "This is also why kids go absolutely ballistic over birthday presents. Their brains are even more sensitive to surprise rewards than adult brains. The wrapping paper isn't just decoration — it's building anticipation. The tearing of paper is the release. Every parent instinctively knows this, which is why nobody gives kids unwrapped gifts.",
      "The reverse is also true — predictable greetings produce almost no emotional response. This is why forwarded WhatsApp images feel so flat. There's no surprise. You see it, you know exactly what it is, your brain goes \"meh,\" and you scroll past.",
      "So if you want your festival wishes to actually land, to actually make someone feel something, build in an element of surprise. Don't just send a message — send an experience. The extra 10 seconds of anticipation is the difference between a wish that's forgotten in minutes and one that makes someone's day."
    ]
  },
  {
    slug: "raksha-bandhan-long-distance",
    title: "Celebrating Raksha Bandhan When Your Sibling is Miles Away",
    excerpt: "Distance doesn't have to dampen the bond. Here are heartfelt ways to make Rakhi special across time zones.",
    date: "January 24, 2026",
    author: "Ananya Krishnan",
    readTime: "4 min read",
    category: "Festivals",
    emoji: "🧶",
    content: [
      "The first Raksha Bandhan after my brother moved to Canada was rough. Not gonna sugarcoat it. I had the rakhi ready, the tikka plate set up, and a video call scheduled — but when the time came, it just wasn't the same. You can't tie a rakhi through a screen. You can't steal your brother's chocolates through FaceTime.",
      "But over the years, we've figured out a system. It's not perfect — nothing replaces being in the same room — but it's ours, and it actually feels special now.",
      "**Mail the rakhi early. Like, really early.** International shipping is unreliable at best. I once sent a rakhi that arrived two months late. Now I send it three weeks in advance. Yes, THREE weeks. It sits in a drawer until the day, but at least it's there. Some things need to be physical.",
      "**The video call needs to be a proper event.** Don't just casually FaceTime and say \"Happy Rakhi.\" Set up properly. Put the tikka plate out. Light a diya. Make him show you that he actually has the rakhi ready. Create the ritual even if you're 10,000 km apart. My brother puts the rakhi on at his end at the exact moment I do the tikka on my end. We've synced it across time zones. It works.",
      "**Share a meal (sort of).** We both order or cook the same dish and eat \"together\" on video call. Last year it was chole bhature. His was from a restaurant in Toronto, mine was homemade. We compared. Mine was better. (This is an objective fact, not up for debate.)",
      "**Digital wishes as a bridge.** Before the call, I send him a personalized greeting — something animated, with his name, that he has to \"open.\" It's not the main event, but it builds the excitement. He's 30 years old and still gets excited opening a digital gift box. Big-brother energy, tiny-kid enthusiasm.",
      "**The post-Rakhi transfer.** Let's be real — part of Raksha Bandhan is the brother giving money to the sister. This tradition has seamlessly transitioned to the digital age. UPI, PayPal, whatever works. He sends, I happily accept. Some traditions adapt beautifully to technology.",
      "Distance is hard. Missing your sibling during festivals is genuinely painful. But I've learned that the bond doesn't weaken with distance — it just stretches. And every Raksha Bandhan, when I hear my brother say \"Happy Rakhi, chechi\" through the screen, that stretch doesn't matter at all."
    ]
  },
  {
    slug: "festival-food-memories",
    title: "Festival Foods That Take You Back Home (No Matter Where You Are)",
    excerpt: "Every festival has that ONE dish that instantly transports you to your grandmother's kitchen. Here's our collection of food memories.",
    date: "January 20, 2026",
    author: "Rahul Menon",
    readTime: "5 min read",
    category: "Food",
    emoji: "🍛",
    content: [
      "I have a theory: you can take a person out of their hometown, but you cannot take the taste of their festival food out of their memory. It's hardwired. One bite of the right dish and you're 8 years old again, sitting on the kitchen floor, watching your grandmother work magic.",
      "**Onam — Ada Pradhaman.** If you know, you know. That first spoonful of ada pradhaman (rice ada cooked in jaggery and coconut milk) on Onam day is basically a religious experience. My ammamma's version had exactly the right amount of cardamom. I've spent 15 years trying to replicate it. I'm getting closer. Maybe.",
      "**Diwali — Murukku and Mixture.** The week before Diwali, every South Indian household sounds the same — the rhythmic pressing of murukku makers and the sizzle of hot oil. My mother makes seven types of snacks, packages them in steel containers, and distributes them to the entire apartment complex. It's her Diwali superpower.",
      "**Christmas — Plum Cake.** Kerala Christian families start making Christmas cake in October. OCTOBER. The fruits soak in rum (or grape juice, for the kids' version) for months. The house smells like heaven from November onwards. My friend Riya's mother makes the best plum cake in all of Kottayam, and I will arm-wrestle anyone who disagrees.",
      "**Eid — Biryani and Sheer Khurma.** Eid morning without biryani is like... I can't even think of an analogy because it's never happened. And sheer khurma (that rich vermicelli pudding with nuts and dates) is mandatory. My neighbor's version has this golden color that I'm convinced is some kind of ancient family secret.",
      "**Holi — Gujiya and Thandai.** Gujiya is basically the Indian empanada filled with sweet khoya, and thandai is an almond-pistachio spiced milk that's available for approximately 48 hours a year. The limited availability makes it taste even better. Supply and demand applies to food cravings too.",
      "**Pongal — Well, Pongal.** The dish is literally named after the festival (or is it the other way around?). That moment when the milk boils over the clay pot and everyone shouts \"Pongalo Pongal!\" — it's pure chaos and pure joy. Sweet pongal with ghee, cashews, and raisins. I'm getting hungry just typing this.",
      "**Vishu — Vishu Kanji and Thoran.** The traditional Vishu feast starts with looking at the Vishu Kani (auspicious arrangement) and then sitting down to a specific meal. The kanji (rice porridge) with coconut milk is simple but deeply comforting. It tastes like Vishu morning, and I don't know how else to describe it.",
      "Here's what I find beautiful — these food memories are universal. Every culture, every festival, every family has their version. The specific dishes are different, but the feeling is the same: warmth, family, home. That's what food does during festivals. It doesn't just feed you; it reconnects you."
    ]
  },
  {
    slug: "birthday-wishes-that-dont-suck",
    title: "How to Write Birthday Wishes That Don't Sound Like a Hallmark Card",
    excerpt: "\"Wishing you a wonderful year ahead\" — please stop. Here's how to write birthday messages people actually remember.",
    date: "January 16, 2026",
    author: "Sneha Patel",
    readTime: "3 min read",
    category: "Tips",
    emoji: "🎂",
    content: [
      "\"Happy Birthday! Wishing you a year filled with joy and happiness!\" There. I just wrote the most generic birthday wish in the history of birthday wishes. You've seen it a thousand times. You've probably SENT it a thousand times. And you know what? Nobody remembers it. Not a single person has ever screenshot that message and saved it.",
      "But I bet you remember the birthday message that made you laugh or tear up. The one that referenced an inside joke. The one that showed the person actually KNOWS you. Those are the wishes that stick.",
      "Here's the framework I use (yes, I have a framework for birthday wishes, judge me):",
      "**Start with a specific memory.** \"Remember when we got lost in Goa and ended up at that random wedding? That's still the best night of my life.\" Specific memories > generic sentiments. Always.",
      "**Mention something you admire about them.** Not the generic \"you're amazing\" but something real. \"You're the only person I know who actually reads the terms and conditions, and I respect that deeply.\" See? Personal. Memorable. Slightly weird. Perfect.",
      "**Skip the life advice.** Nobody wants \"may you find success in all your endeavors\" on their birthday. They want to know you care. Save the advice for LinkedIn.",
      "**Use humor if that's your relationship.** My best friend's birthday message to me last year was: \"Another year older. Still haven't figured out left from right. Proud of your consistency. Happy birthday.\" I loved it. It was real. It was US.",
      "**If you're not close, keep it short and warm.** For acquaintances and colleagues, a simple \"Happy birthday, [name]! Hope you have a great day!\" with their actual name is better than a paragraph of generic fluff. The name matters — it shows you're not copy-pasting.",
      "The best birthday wishes feel like conversations, not greeting cards. They sound like YOU, not like a template. So next time, put down the \"wishing you happiness and prosperity\" script and just... be real. Your friend will appreciate it way more."
    ]
  },
  {
    slug: "new-year-resolutions-actually-keep",
    title: "The Only New Year's Resolution Strategy That's Ever Worked for Me",
    excerpt: "I've tried elaborate systems, apps, and accountability partners. Here's the embarrassingly simple thing that actually stuck.",
    date: "January 12, 2026",
    author: "Rahul Menon",
    readTime: "4 min read",
    category: "Lifestyle",
    emoji: "🎯",
    content: [
      "I have a graveyard of abandoned New Year's resolutions. Learn guitar (lasted 3 weeks). Wake up at 5 AM (lasted 4 days, and that's being generous). Read 52 books in a year (I read 11, and two were audiobooks, which I'm told is cheating).",
      "Every January 1st, I'd write this ambitious list of 10-15 resolutions, feel incredibly motivated for about 72 hours, and then quietly pretend the list never existed by February.",
      "Then in 2024, I tried something different. Something so simple that I almost didn't bother because it felt too easy. Here it is:",
      "**I picked ONE thing. And I made it tiny.**",
      "That's it. That's the strategy. I know, I know — you were expecting some revolutionary system with spreadsheets and KPIs. Sorry.",
      "My one thing for 2024 was: \"Write one sentence every day.\" Not a journal entry. Not a blog post. Not 1000 words. ONE SENTENCE. About anything. My day, a thought, something I ate, whatever.",
      "Here's what happened: Day 1, I wrote one sentence. Day 2, same. By Day 5, I was writing 3-4 sentences because once you start, it's hard to stop at one. By Month 2, I was writing full paragraphs. By the end of the year, I had accidentally developed a daily writing habit and had a journal full of memories.",
      "The trick isn't discipline or motivation — it's making the starting point so ridiculously easy that NOT doing it feels harder than doing it. One sentence takes 15 seconds. You can't claim you don't have 15 seconds.",
      "This works for anything. Want to exercise? Don't commit to an hour at the gym. Commit to ONE pushup. Want to read more? ONE page before bed. Want to eat healthier? Replace ONE snack. The tiny version gets your foot in the door, and momentum does the rest.",
      "So this New Year, skip the grand list. Pick one thing. Make it embarrassingly small. And let January 1st be the start of something that actually lasts instead of a list that lives in a forgotten Notes app.",
      "Oh, and send your New Year wishes on time this year. That's a freebie resolution. You're welcome."
    ]
  },
  {
    slug: "mothers-day-beyond-flowers",
    title: "What Your Mom Actually Wants for Mother's Day (Hint: It's Not Flowers)",
    excerpt: "After surveying exactly one mom (mine), here are the gifts that actually make mothers happy.",
    date: "January 8, 2026",
    author: "Ananya Krishnan",
    readTime: "3 min read",
    category: "Family",
    emoji: "👩‍👧",
    content: [
      "Last Mother's Day, I asked my mom what she wanted. She said, \"Nothing, nothing, don't waste money.\" Classic Indian mom response. So I got her flowers. She smiled, put them in a vase, and then said, \"These will die in three days, you know.\"",
      "I love her, but she has a point. Flowers ARE a temporary solution to a permanent appreciation problem. So I did some research (read: I called my mom, my aunt, and my grandmother and actually LISTENED to what they said instead of just nodding and ordering from Amazon).",
      "**What moms actually want:**",
      "**1. Your time. Undistracted, phone-down time.** My mom doesn't care about expensive gifts. She cares that I sit with her and watch her favorite serial without checking my phone every 30 seconds. She wants a conversation that isn't just \"what's for dinner?\" This costs exactly ₹0, and yet it's the hardest gift to give.",
      "**2. A day off from being \"the mom.\"** She wants to NOT cook, NOT clean, NOT be the family logistics coordinator for ONE day. Order food. Do the dishes. Handle the chaos. Let her sit and drink tea without being needed for 4 consecutive hours. Revolutionary concept, I know.",
      "**3. Something that shows you remember.** My grandmother lights up when I reference something she told me months ago. \"Ammamma, I tried that sambar recipe you mentioned\" — you'd think I gave her a Rolex. Moms want to feel heard. Most of the time, they feel like they're talking to walls.",
      "**4. A message with actual words.** Not a forwarded image. Not just \"Happy Mother's Day.\" Actual words about what she means to you. Write it. Text it. Say it. It doesn't need to be poetry — just be specific. \"Thank you for always packing extra food in my lunch box because you knew I shared with Arjun\" hits harder than any Hallmark card.",
      "**5. Call her friends and wish them too.** This is a pro move. Wish your mom's friends on Mother's Day and let them tell your mom about it. Moms LOVE bragging about their kids to other moms. You get bonus points without doing extra work.",
      "The best Mother's Day gift I ever gave was a video — just a 2-minute clip where I listed 10 specific memories of things she did for me. She cried. I cried. We ate dosa afterwards. Perfect day.",
      "This year, skip the flowers. Give her something that won't die in three days. Give her the feeling that she's seen, remembered, and loved. That's all she's ever wanted."
    ]
  },
  {
    slug: "thanksgiving-gratitude-practice",
    title: "A Thanksgiving Gratitude Exercise That Changed How I See Everything",
    excerpt: "It started as a cheesy assignment and ended up genuinely rewiring how I think. Here's the exercise.",
    date: "January 4, 2026",
    author: "Sneha Patel",
    readTime: "4 min read",
    category: "Lifestyle",
    emoji: "🍁",
    content: [
      "I'll be upfront — I used to roll my eyes at \"gratitude practices.\" It felt like one of those things people on Instagram talk about between sunrise yoga photos and matcha latte reels. Performative. Shallow. Not for me.",
      "Then, two Thanksgivings ago, a friend challenged me to try something for just one week. \"Write down three things you're grateful for every night before bed. But here's the rule — you can NEVER repeat an item.\"",
      "Never repeat. That's the part that changes everything.",
      "Days 1-3 were easy. Health. Family. Friends. Job. Roof over my head. The obvious stuff that you'd list without thinking. But by Day 4, I'd used up all the big ones. I had to start looking harder.",
      "Day 4: \"I'm grateful that the auto driver didn't argue about the meter today.\" Day 5: \"I'm grateful that my coffee was the exact right temperature this morning.\" Day 6: \"I'm grateful that my colleague Meena always says good morning, even on bad days.\"",
      "See what happened? I started NOTICING things. Tiny, everyday things that I'd been walking past without a glance. The fact that the street light near my house works (it didn't for months). That my local shopkeeper knows my order without asking. That my neighbor waters my plants when I travel.",
      "By Week 2, I was actively hunting for things to be grateful for DURING the day, because I knew I needed three new ones by night. My brain literally started scanning for positivity instead of problems. I didn't plan this. It just happened.",
      "The neuroscience backs this up, by the way. Dr. Robert Emmons at UC Davis found that consistent gratitude practice physically changes brain patterns — it strengthens neural pathways associated with positive thinking. You're not just feeling better; your brain is actually restructuring.",
      "I've been doing this for two years now. I have a note on my phone with over 2,000 entries. Some are profound (\"I'm grateful my grandmother is still healthy enough to fight with me about my hair\"). Some are ridiculous (\"I'm grateful that the mosquito in my room last night chose to bite my foot instead of my face\").",
      "Thanksgiving as a holiday is one day. But the practice of thankfulness? That's an everyday thing. And it doesn't require a turkey, a harvest table, or an Instagram-worthy flat lay. It just requires noticing.",
      "Try the exercise. One week. Three things. No repeats. The worst that can happen is you'll feel slightly better about the world. And honestly, couldn't we all use a bit of that?"
    ]
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAuthorProfile = (authorName: string): AuthorProfile => {
  return authorProfiles[authorName] ?? {
    name: authorName,
    role: "WishSpark Contributor",
    focus: "Celebrations, greetings, and communication",
    bio: "Contributes practical and reader-first articles on greetings, festivals, and sharing culture.",
    profileUrl: "https://www.wishspark.xyz/about",
  };
};