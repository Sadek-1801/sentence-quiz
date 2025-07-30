# 🧩 Japanese Sentence-Assembly Quiz Component

A **React + TypeScript + Tailwind CSS** component that lets learners practise Japanese syntax by re-assembling a sentence from its English meaning using drag-and-drop (or click-to-place) tiles.

---

## 📦 Features

- ✅ **Click-to-place** tiles – no external libraries
- ✅ **Furigana toggle** (reading hints)
- ✅ **Auto-shuffle** & **reset**
- ✅ **Exact-match validation** (ignores spaces / furigana)
- ✅ **Kimi K2 AI fallback** for lenient grading (optional)
- ✅ **Responsive** & **accessible**
- ✅ **Tiny bundle** – zero runtime dependencies

---

## 🚀 Quick Start

1. **Install**

   ```bash
   yarn install
   yarn run dev   # Vite
   ```

2. **Use the component**

   ```tsx
   import SentenceQuiz from "./components/SentenceQuiz";

   <SentenceQuiz
     data={{
       inputType: "english",
       englishMeaning: "I can't believe the story at all.",
       kunyomiSampleSentenceOne:
         "その話//はなし//は全//まった//く信//しん//じられません。",
       onScreenValue: "",
       questionAssociatedKanji: "全",
       type: "kunyomiVocabularyAssembleTheSetenceOne",
     }}
   />;
   ```

---

## ⚙️ Data Shape

```ts
type SentenceQuizData = {
  inputType: "english";
  englishMeaning: string; // English prompt
  kunyomiSampleSentenceOne: string; // “kanji//furigana//…”
  onScreenValue: string; // leave ""
  questionAssociatedKanji: string; // kanji to highlight later
  type: "kunyomiVocabularyAssembleTheSetenceOne";
};
```

---

## 🧪 Utilities

| Function        | Purpose                                    |
| --------------- | ------------------------------------------ |
| `parseSentence` | Split `//` string into `{kanji, furigana}` |
| `shuffleArray`  | Fisher-Yates shuffle                       |
| `isExactMatch`  | Compare sentences ignoring spaces/furigana |

---

## 🎯 Styling

Tailwind classes only.  
Override colours, spacing, fonts via Tailwind config or by passing custom CSS classes to the root `<div>`.

---

## 🌐 Browser Support

- **Chrome 90+**, **Firefox 88+**, **Safari 14+**
- No polyfills needed.

---

## 📄 License

MIT – hack, fork, embed freely.
