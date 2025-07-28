import { useState } from "react";
import type { SentenceQuizData } from "../../types/sentenceQuiz";


function SentenceQuize (data: SentenceQuizData) 
{
  const [quizData, setQuizData] = useState(data)

  return <div></div>;
}

export default SentenceQuize;
