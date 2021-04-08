import { LoremIpsum } from 'lorem-ipsum'

export default function ReplyMaker() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  return lorem.generateSentences(5);
}
