import { useContext } from "react";
import { GameContext, PositionType } from "../App";

const Square = ({ position }: { position: PositionType }) => {
  const { gameMap, handleClick } = useContext(GameContext);

  return (
    <div
      className="h-[95%] w-[33%] items-center justify-center flex rounded-sm border-gray-300 border cursor-pointer text-gray-200 font-extrabold text-9xl shadow-xl text-shadow-lg"
      onClick={() => handleClick(position)}
    >
      {gameMap[position]}
    </div>
  );
};

export default Square;
