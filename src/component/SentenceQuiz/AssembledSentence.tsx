import React from "react";
import type { Word } from "../../types/word";

type Props = {
  words: Word[];
  onRemove: (index: number) => void;
  showFurigana: boolean;
  showResult: boolean;
  correctSentence: Word[];
};
function AssembledSentence({
  words,
  onRemove,
  showFurigana,
  showResult,
  correctSentence,
}: Props) {
  const tileButtons = words.map((word, index) => {
    const isCorrect = showResult ? word.kanji === correctSentence[index].kanji : true;

    const bgColor = isCorrect ? "bg-blue-200" : "bg-red-300";

    const displayTexts =
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
        className={`px-3 py-1 rounded transition ${bgColor}`}
      >
        {displayTexts}
      </button>
    );
  });
  return (
    <div className="min-h-[3rem] p-2 rounded bg-gray-50 flex gap-2 flex-wrap">
      {tileButtons}
    </div>
  );
}

export default AssembledSentence;
