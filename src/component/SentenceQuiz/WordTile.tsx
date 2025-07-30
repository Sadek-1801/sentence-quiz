import type { Word } from "../../types/word";

type Props = {
  word: Word;
  onClick: () => void;
  showFurigana: boolean;
};

function WordTile({ word, onClick, showFurigana }: Props) {
  return (
    <button
      onClick={onClick}
      className="min-h-[3rem] px-3 py-2 text-xl bg-blue-100 rounded hover:bg-blue-200 transition"
    >
      {showFurigana && word.furigana ? (
        <ruby className="leading-none">
          <span className="text-xl">{word.kanji}</span>
          <rt className="text-xs leading-none text-gray-600 mt-0.5">
            {word.furigana}
          </rt>
        </ruby>
      ) : (
        <span className="text-xl">{word.kanji}</span>
      )}
    </button>
  );
}

export default WordTile;
