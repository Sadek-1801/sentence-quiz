import { useEffect, useState } from "react";
import type { SentenceQuizData } from "../../types/sentenceQuiz";
import useSentenceQuiz from "../../hooks/useSentenceQuiz";
import AssembledSentence from "./AssembledSentence";
import EnglishMeaning from "./EnglishMeaning";
import WordTile from "./WordTile";
import CheckAnswerButton from "./CheckAnswerButton";

function SentenceQuiz({ data }: { data: SentenceQuizData }) {
  // const [quizData, setQuizData] = useState(data);
  const [showFurigana, setShowFurigana] = useState(true);

  const {
    pool,
    assembled,
    correctSentence,
    selectWord,
    removeWord,
    reset,
    checkAnswer,
    result,
    checking,
    attempts,
  } = useSentenceQuiz(data.kunyomiSampleSentenceOne);

  const label = attempts === 0 ? "Check Answer" : "Second Check";

  useEffect(() => {
    if (attempts === 2 && result === false) {
      setTimeout(reset, 2000); // optional 2-second review
    }
  }, [attempts, result, reset]);

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <p className="font-medium text-sm">Your Answer:</p>

      <AssembledSentence
        words={assembled}
        onRemove={removeWord}
        showResult={result !== null}
        correctSentence={correctSentence}
        showFurigana={showFurigana}
        attempts={attempts}
      />

      <EnglishMeaning text={data.englishMeaning} />

      <div className="flex flex-wrap gap-2 rounded">
        {pool.map((word, index) => (
          <WordTile
            key={index}
            word={word}
            showFurigana={showFurigana}
            onClick={() => selectWord(word)}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setShowFurigana((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
             bg-indigo-100 text-indigo-700
             hover:bg-indigo-200 active:bg-indigo-300
             focus:outline-none focus:ring-2 focus:ring-indigo-400
             transition-all cursor-pointer"
        >
          {showFurigana ? (
            <>
              <span className="text-base">🈶</span> Hide Furigana
            </>
          ) : (
            <>
              <span className="text-base">🈚</span> Show Furigana
            </>
          )}
        </button>

        <CheckAnswerButton
          label={label}
          onClick={checkAnswer}
          isLoading={checking}
          isCorrect={result}
          onReset={reset}
          pool={pool.length}
        />
      </div>
    </main>
  );
}

export default SentenceQuiz;
