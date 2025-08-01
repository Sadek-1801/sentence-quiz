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
  const normalize = (s: string) =>
    (ignoreSpace ? s.replace(/\s+/g, "") : s).normalize("NFKC");
  return (
    normalize(givenSentence.join("")) === normalize(correctSentence.join(""))
  );
}

// export function distanceColor(index: number, correctIndex: number, total: number) {
//   const distance = Math.abs(index - correctIndex);
//   const maxDistance = total - 1;
//   const ratio = Math.min(distance / maxDistance, 1);
//   const hue = 120 - ratio * 120; // From green (120) to red (0)
//   return `hsl(${hue}, 70%, 80%)`;
// }

export function distanceColor(
  index: number,
  correctIndex: number,
  total: number
) {
  const distance = Math.abs(index - correctIndex);
  const max = total - 1 || 1; // prevent /0
  const ratio = distance / max; // 0 = spot-on, 1 = farthest
  // 0 %  red  → 100 % red
  const saturation = 30 + ratio * 70; // 30 % → 100 %
  const lightness = 85 - ratio * 40; // 85 % → 45 %
  return `hsl(0, ${saturation}%, ${lightness}%)`;
}
