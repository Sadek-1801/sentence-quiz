import { useCallback, useEffect, useMemo, useState } from "react";
import {
  isExactMatch,
  parseSentence,
  shuffleArray,
} from "../utils/sentenceQuiz";
import type { Word } from "../types/word";

function useSentenceQuiz(sentence: string) {
  const [pool, setPool] = useState<Word[]>([]);
  const [assembled, setAssembled] = useState<Word[]>([]);
  const [result, setResult] = useState<null | boolean>(null);
  const [checking, setChecking] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Memoize the parsed sentence to prevent re-computation on every render
  const correctSentenceWords = useMemo(
    () => parseSentence(sentence),
    [sentence]
  );
  const filteredSentence = useMemo(
    () => correctSentenceWords.map((w) => w.kanji),
    [correctSentenceWords]
  );

  // Used a useCallback hook to create a stable reset function
  const reset = useCallback(() => {
    const resetSentence = shuffleArray([...correctSentenceWords]);
    setPool(resetSentence);
    setAssembled([]);
    setResult(null);
    setAttempts(0); // Reset attempts on new sentence
    setChecking(false);
  }, [correctSentenceWords]);

  // It ensures the quiz state is reset for the new sentence.
  useEffect(() => {
    reset();
  }, [sentence, reset]);

  const selectWord = useCallback((word: Word) => {
    setAssembled((prev) => [...prev, word]);
    setPool((prev) => prev.filter((w) => w !== word));
  }, []);

  const removeWord = useCallback(
    (index: number) => {
      const word = assembled[index];
      setAssembled(assembled.filter((_, i) => i !== index));
      setPool([...pool, word]);
    },
    [assembled, pool]
  );

  const checkAnswer = useCallback(() => {
    setChecking(true);

    if (
      isExactMatch(
        assembled.map((w) => w.kanji),
        filteredSentence
      )
    ) {
      setResult(true);
      setAttempts(0);
      setChecking(false);
      return;
    }

    if (attempts === 0) {
      setAttempts(1);
      setResult(null);
    } else {
      setResult(false);
      // setAttempts(0); 
    }

    setChecking(false);
  }, [assembled, filteredSentence, attempts]);

  return {
    pool,
    assembled,
    correctSentence: correctSentenceWords,
    filteredSentence,
    selectWord,
    removeWord,
    reset,
    checkAnswer,
    result,
    checking,
    attempts,
  };
}

export default useSentenceQuiz;
