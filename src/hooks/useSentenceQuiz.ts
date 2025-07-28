import { useState } from "react";
import {
  isExactMatch,
  parseSentence,
  shuffleArray,
} from "../utils/sentenceQuiz";
import type { Word } from "../types/word";

function useSentenceQuiz(sentence: string) {
  const fullSentence = parseSentence(sentence);
  const filteredSentence = fullSentence.map((w) => w.kanji);

  const [pool, setPool] = useState<Word[]>(shuffleArray([...fullSentence]));
  const [assembled, setAssembled] = useState<Word[]>([]);
  const [result, setResult] = useState<null | boolean>(null);
  const [checking, setChecking] = useState(false);

  const selectWord = (word: Word) => {
    if (assembled.includes(word)) return;
    setAssembled([...assembled, word]);
    setPool(pool.filter((w) => w !== word));
  };

  const removeWord = (index: number) => {
    const word = assembled[index];
    setAssembled(assembled.filter((_, i) => i !== index));
    setPool([...pool, word]);
  };

  const reset = () => {
    const resetSentence = shuffleArray([...fullSentence]);
    setPool(resetSentence);
    setAssembled([]);
    setResult(null);
  };

  const checkAnswer = () => {
    setChecking(true);

    if (
      isExactMatch(
        assembled.map((w) => w.kanji),
        filteredSentence
      )
    ) {
      setResult(true);
    } else {
      setResult(false);
    }

    setChecking(false);
  };

  return {
    pool,
    assembled,
    fullSentence,
    selectWord,
    removeWord,
    reset,
    checkAnswer,
    result,
    checking,
  };
}

export default useSentenceQuiz;
