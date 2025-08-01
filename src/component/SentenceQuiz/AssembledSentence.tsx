import type { Word } from "../../types/word";
import { distanceColor } from "../../utils/sentenceQuiz";

type Props = {
  words: Word[];
  onRemove: (index: number) => void;
  showFurigana: boolean;
  showResult: boolean;
  correctSentence: Word[];
  attempts: number;
};

function AssembledSentence({
  words,
  onRemove,
  showFurigana,
  showResult,
  correctSentence,
  attempts,
}: Props) {
  return (
    <div className="min-h-[3rem] p-2 rounded bg-gray-50 flex gap-2 flex-wrap">
      {words.map((word, index) => {
        const correctIndex = correctSentence.findIndex(
          (w) => w.kanji === word.kanji
        );

        const bgColor =
          attempts === 1
            ? distanceColor(index, correctIndex, correctSentence.length)
            : attempts === 2 || showResult
            ? index === correctIndex
              ? "bg-green-300"
              : "bg-red-300"
            : "bg-gray-200";

        const displayText =
          showFurigana && word.furigana ? (
            <ruby>
              {word.kanji}
              <rp>(</rp>
              <rt>{word.furigana}</rt>
              <rp>)</rp>
            </ruby>
          ) : (
            word.kanji
          );

        return (
          <button
            key={index}
            onClick={() => onRemove(index)}
            style={{ backgroundColor: bgColor }}
            className="px-3 py-1 rounded transition"
          >
            {displayText}
          </button>
        );
      })}
    </div>
  );
}

export default AssembledSentence;
