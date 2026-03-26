import type { Festival } from "@/data/festivals";

export interface FestivalFaq {
  question: string;
  answer: string;
}

const getFirstSentence = (text: string) => {
  const parts = text.split(".");
  const first = parts[0]?.trim();
  return first ? `${first}.` : text;
};

const getKeywordPhrase = (festival: Festival) => {
  const words = festival.keywords.slice(0, 4);
  if (words.length === 0) return festival.name;
  if (words.length === 1) return words[0];
  return words.join(", ");
};

const hashSlug = (slug: string) => {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const getCultureQuestionSet = (festival: Festival, keywordPhrase: string): FestivalFaq[] => [
  {
    question: `What makes ${festival.name} culturally important?`,
    answer: `${getFirstSentence(festival.longDescription)} It continues to be meaningful because people celebrate it through family rituals, food, and community traditions.`,
  },
  {
    question: `What are common ${festival.name} traditions?`,
    answer: `Popular traditions around ${festival.name} include ${keywordPhrase}, along with regional customs that vary by family and location.`,
  },
  {
    question: `How do I write a respectful ${festival.name} message?`,
    answer: `Start with a warm greeting such as "${festival.greeting}" and add one personal line about blessings, health, or togetherness.`,
  },
  {
    question: `When should I send ${festival.name} wishes?`,
    answer: `Most people send greetings on the main day of the festival, but sharing a thoughtful message a day earlier is also common.`,
  },
  {
    question: `Can I share ${festival.name} greetings with non-local friends?`,
    answer: `Yes. A short explanation with your wish helps friends from other backgrounds understand the festival and feel included.`,
  },
];

const getPracticalQuestionSet = (festival: Festival, keywordPhrase: string): FestivalFaq[] => [
  {
    question: `What should I include in a ${festival.name} greeting card?`,
    answer: `Include a greeting line, the recipient's name, and one meaningful sentence tied to ${festival.name}. Keep the message clear and personal.`,
  },
  {
    question: `How long should a ${festival.name} wish be?`,
    answer: `A concise 1-3 line message usually works best for social sharing. If needed, add a longer note below the main wish.`,
  },
  {
    question: `Which tone works best for ${festival.name} wishes?`,
    answer: `Use a warm and respectful tone. For close friends, you can keep it casual; for elders or formal contacts, keep it traditional.`,
  },
  {
    question: `Can I reuse one message for everyone during ${festival.name}?`,
    answer: `You can, but adding a small custom line for each person makes the message feel more genuine and less forwarded.`,
  },
  {
    question: `Which keywords are linked with ${festival.name}?`,
    answer: `${festival.name} is commonly associated with ${keywordPhrase}. Using one or two of these naturally can make wishes feel more relevant.`,
  },
];

const getSharingQuestionSet = (festival: Festival): FestivalFaq[] => [
  {
    question: `How can I make my ${festival.name} greeting feel personal online?`,
    answer: `Use the recipient's name, keep the wording natural, and avoid all-caps or copy-paste style phrasing. Small personal context improves impact.`,
  },
  {
    question: `Is a short ${festival.name} greeting enough for WhatsApp?`,
    answer: `Yes. A short but specific message often performs better than a long generic paragraph in chats.`,
  },
  {
    question: `Can I send ${festival.name} greetings to groups and individuals?`,
    answer: `Yes. Share a general version in groups and a personalized version for close friends or family members.`,
  },
  {
    question: `How do I avoid generic-sounding ${festival.name} wishes?`,
    answer: `Avoid overused lines and add one detail such as a shared memory, local custom, or a direct blessing for the recipient.`,
  },
  {
    question: `Should I include festival context in my ${festival.name} message?`,
    answer: `If the receiver may not know the festival well, a brief context line helps your message feel thoughtful and inclusive.`,
  },
];

export const getFestivalFaqs = (festival: Festival): FestivalFaq[] => {
  const keywordPhrase = getKeywordPhrase(festival);
  const variant = hashSlug(festival.slug) % 3;

  if (variant === 0) {
    return getCultureQuestionSet(festival, keywordPhrase);
  }

  if (variant === 1) {
    return getPracticalQuestionSet(festival, keywordPhrase);
  }

  return getSharingQuestionSet(festival);
};
