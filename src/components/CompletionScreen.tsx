import { useContext } from "react";
import { GameContext } from "../App";

const CompletionScreen = () => {
  const { isX, resetGame } = useContext(GameContext);

  return (
    <>
      <div className="text-shadow-lg text-amber-900 flex-col gap-5 flex items-center justify-center h-[70vh] w-[95vw] bg-amber-100 rounded-3xl text-7xl font-extrabold">
        <p>{`${isX ? "X" : "O"} won the game!!!`}</p>
        <button
          onClick={resetGame}
          className="text-amber-100 shadow-xl bg-amber-500 text-5xl p-7 cursor-pointer hover:bg-amber-50 hover:text-amber-500 rounded-2xl"
        >
          Play again
        </button>
      </div>
    </>
  );
};

export default CompletionScreen;
