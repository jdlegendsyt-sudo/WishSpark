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

export const getFestivalFaqs = (festival: Festival): FestivalFaq[] => {
  const coreMeaning = getFirstSentence(festival.longDescription);
  const keywordPhrase = getKeywordPhrase(festival);

  return [
    {
      question: `What is special about ${festival.name}?`,
      answer: `${coreMeaning} This is why ${festival.name} greetings are widely shared with friends and family.`,
    },
    {
      question: `Which traditions are linked to ${festival.name}?`,
      answer: `${festival.name} celebrations are commonly associated with ${keywordPhrase}.`,
    },
    {
      question: `What should I write in a ${festival.name} greeting?`,
      answer: `Keep it warm and personal. You can use "${festival.greeting}" and add a short blessing for joy, peace, and prosperity.`,
    },
    {
      question: `Can I share ${festival.name} wishes online instantly?`,
      answer: `Yes. Create your greeting, copy the generated link, and share it on WhatsApp or social media in seconds.`,
    },
    {
      question: `Is this ${festival.name} greeting creator free to use?`,
      answer: `Yes. WishSpark lets you create and share ${festival.name} wishes cards for free.`,
    },
  ];
};
