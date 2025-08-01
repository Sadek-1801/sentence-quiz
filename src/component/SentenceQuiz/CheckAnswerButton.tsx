type CheckAnswerButtonProps = {
  onClick: () => void;
  isLoading: boolean;
  isCorrect: boolean | null;
  onReset: () => void;
  pool: number;
  label: string;
};
function CheckAnswerButton({
  label,
  onClick,
  isLoading,
  isCorrect,
  onReset,
  pool,
}: CheckAnswerButtonProps) {
  // Determine if the user has assembled the full sentence.
  const finished = pool === 0;

  // This is the core logic for rendering the button and its state.
  // We use a single button and change its text and behavior based on the state.
  const renderButton = () => {
    if (isLoading) {
      return (
        <button
          disabled
          className="w-40 text-white px-6 py-2 rounded-lg font-medium transition bg-gray-400 cursor-not-allowed"
        >
          Checking…
        </button>
      );
    }

    if (isCorrect === true) {
      return (
        <button
          disabled
          className="w-40 text-white px-6 py-2 rounded-lg font-medium transition bg-green-500 cursor-not-allowed"
        >
          Correct!
        </button>
      );
    }

    if (isCorrect === false) {
      return (
        <button
          onClick={onReset}
          className="w-40 text-white px-6 py-2 rounded-lg font-medium cursor-pointer transition bg-red-500 hover:bg-red-600"
        >
          Try Again
        </button>
      );
    }

    return (
      <button
        onClick={onClick}
        disabled={!finished}
        className={`w-40 text-white px-6 py-2 rounded-lg font-medium transition
        ${
          finished
            ? "bg-green-500 hover:bg-green-600 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="space-y-2 flex flex-col items-center">{renderButton()}</div>
  );
}

export default CheckAnswerButton;
