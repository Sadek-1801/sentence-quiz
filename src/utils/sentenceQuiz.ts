import type { Word } from "../types/word";

export function parseSentence(sentence: string): Word[] {
  const words = sentence.split("//");
  const result: Word[] = [];

  for (let i = 0; i < words.length; i += 2) {
    const kanji = words[i];
    const kana = words[i + 1];

    if (kanji) {
      result.push({ kanji: kanji, furigana: kana });
    }
  }

  return result;
}

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function isExactMatch(
  givenSentence: string[],
  correctSentence: string[],
  ignoreSpace = true
): boolean {
  const normalize = (s: string) => {
    (ignoreSpace ? s.replace(/\s+/g, "") : s).normalize("NFKC");
  };

  return (
    normalize(givenSentence.join("")) === normalize(correctSentence.join(""))
  );
}
