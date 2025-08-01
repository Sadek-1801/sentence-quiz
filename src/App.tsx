// import React from 'react';
import { useState } from "react";
import SentenceQuiz from "./component/SentenceQuiz/SentenceQuiz.tsx";
import { sentences } from "./data/setences.ts";

function App() {
  const [index, setIndex] = useState(0);

  const nextSentence = () => setIndex((i) => (i + 1) % sentences.length);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-xl w-full p-6 space-y-6 bg-white rounded-xl shadow-xl flex flex-col items-center">
        <SentenceQuiz data={sentences[index]} />
        <button
          onClick={nextSentence}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm
             bg-emerald-600 text-white shadow-md
             hover:bg-emerald-700 active:bg-emerald-800
             focus:outline-none focus:ring-2 focus:ring-emerald-400
             transition-all cursor-pointer"
        >
          <span className="text-base">🔄</span> Next Sentence
        </button>
      </div>
    </main>
  );
}

export default App;
