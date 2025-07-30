// import React from 'react';
import SentenceQuiz from "./component/SentenceQuiz/SentenceQuiz.tsx";
function App() {
  return (
    <>
      <SentenceQuiz
        data={{
          inputType: "english",
          englishMeaning: "I can't believe the story at all.",
          kunyomiSampleSentenceOne:
            "その話//はなし//は全//まった//く信//しん//じられません。",
          onScreenValue: "",
          questionAssociatedKanji: "全",
          type: "kunyomiVocabularyAssembleTheSentenceOne",
        }}
      />
    </>
  );
}

export default App;
