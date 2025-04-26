import { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import CompletionScreen from "./components/CompletionScreen";

export type PositionType =
  | "a1"
  | "a2"
  | "a3"
  | "b1"
  | "b2"
  | "b3"
  | "c1"
  | "c2"
  | "c3";

export interface GameObj {
  a1: string;
  a2: string;
  a3: string;
  b1: string;
  b2: string;
  b3: string;
  c1: string;
  c2: string;
  c3: string;
}

const initialGameMap = {
  a1: "",
  a2: "",
  a3: "",
  b1: "",
  b2: "",
  b3: "",
  c1: "",
  c2: "",
  c3: "",
};

export const GameContext = createContext({
  gameMap: initialGameMap,
  setGameMap: (arg: GameObj): void => {
    arg;
  },
  isX: true,
  setIsX: (arg: boolean): void => {
    arg;
  },
  didWin: (): boolean => {
    return true;
  },
  handleWin: (): void => {},
  resetGame: (): void => {},
  handleClick: (arg: PositionType): void => {
    arg;
  },
});

function App() {
  const [isX, setIsX] = useState(true);
  const [gameMap, setGameMap] = useState(initialGameMap);
  const [gameOver, setGameOver] = useState(false);

  const handleWin = () => {
    setGameOver(true);
  };

  const checkForFullBoard = () => {
    if (Object.values(gameMap).indexOf("") === -1) {
      resetGame();
    }
  };

  useEffect(() => {
    if (didWin()) {
      handleWin();
      return;
    } else {
      setIsX(!isX);
    }
    checkForFullBoard();
  }, [gameMap]);

  const resetGame = () => {
    setGameOver(false);
    setGameMap(initialGameMap);
  };

  const wonDiagonal = () => {
    return (
      (gameMap["a1"] === "X" &&
        gameMap["b2"] === "X" &&
        gameMap["c3"] === "X") ||
      (gameMap["a3"] === "X" &&
        gameMap["b2"] === "X" &&
        gameMap["c1"] === "X") ||
      (gameMap["a1"] === "O" &&
        gameMap["b2"] === "O" &&
        gameMap["c3"] === "O") ||
      (gameMap["a3"] === "O" && gameMap["b2"] === "O" && gameMap["c1"] === "O")
    );
  };

  const wonVertical = () => {
    return (
      (gameMap["a1"] === "X" &&
        gameMap["b1"] === "X" &&
        gameMap["c1"] === "X") ||
      (gameMap["a2"] === "X" &&
        gameMap["b2"] === "X" &&
        gameMap["c2"] === "X") ||
      (gameMap["a3"] === "X" &&
        gameMap["b3"] === "X" &&
        gameMap["c3"] === "X") ||
      (gameMap["a1"] === "O" &&
        gameMap["b1"] === "O" &&
        gameMap["c1"] === "O") ||
      (gameMap["a2"] === "O" &&
        gameMap["b2"] === "O" &&
        gameMap["c2"] === "O") ||
      (gameMap["a3"] === "O" && gameMap["b3"] === "O" && gameMap["c3"] === "O")
    );
  };

  const wonHorizontal = () => {
    return (
      (gameMap["a1"] === "X" &&
        gameMap["a2"] === "X" &&
        gameMap["a3"] === "X") ||
      (gameMap["a1"] === "O" &&
        gameMap["a2"] === "O" &&
        gameMap["a3"] === "O") ||
      (gameMap["b1"] === "X" &&
        gameMap["b2"] === "X" &&
        gameMap["b3"] === "X") ||
      (gameMap["b1"] === "O" &&
        gameMap["b2"] === "O" &&
        gameMap["b3"] === "O") ||
      (gameMap["c1"] === "X" &&
        gameMap["c2"] === "X" &&
        gameMap["c3"] === "X") ||
      (gameMap["c1"] === "O" && gameMap["c2"] === "O" && gameMap["c3"] === "O")
    );
  };

  const didWin = (): boolean => {
    return wonHorizontal() || wonVertical() || wonDiagonal();
  };

  const handleClick = (position: PositionType) => {
    if (gameMap[position] === "") {
      const temp = { ...gameMap };
      temp[position] = isX ? "X" : "O";
      setGameMap(temp);
    }
  };

  return (
    <>
      <GameContext.Provider
        value={{
          isX,
          setIsX,
          gameMap,
          setGameMap,
          didWin,
          handleWin,
          resetGame,
          handleClick,
        }}
      >
        {!gameOver ? <Board /> : <CompletionScreen />}
      </GameContext.Provider>
    </>
  );
}

export default App;
