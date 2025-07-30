type Props = {
  onClick: () => void;
  isLoading: boolean;
  isCorrect: boolean | null;
  onReset: () => void;
  pool: number;
};

function CheckAnswerButton({
  onClick,
  isLoading,
  isCorrect,
  onReset,
  pool,
}: Props) {
  const finished = pool === 0;

  const renderResult = () => {
    if (isCorrect === null) return null;

    const resultClass = isCorrect
      ? "bg-blue-500 hover:bg-blue-700 text-white"
      : "bg-red-400 hover:bg-red-700 text-black";

    const label = isCorrect ? "Correct" : "Incorrect";

    return (
      <>
        <button className={`${resultClass} font-bold py-2 px-4 rounded`}>
          {label}
        </button>
        <button
          onClick={onReset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </>
    );
  };

  return (
    <div className="space-y-2 flex flex-col items-center">
      <button
        onClick={onClick}
        disabled={isLoading || !finished || isCorrect !== null}
        className={`w-40 text-white px-6 py-2 rounded-lg font-medium transition
    ${
      isLoading || !finished || isCorrect === true
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
    }`}
      >
        {isLoading ? "Checking…" : "Check Answer"}
      </button>

      <div className="flex gap-2 justify-center">{renderResult()}</div>
    </div>
  );
}

export default CheckAnswerButton;
