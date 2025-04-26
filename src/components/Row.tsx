import Square from "./Square";

const Row = ({ letter }: { letter: "a" | "b" | "c" }) => {
  return (
    <div className="gap-4 h-[33%] justify-center flex flex-row">
      <Square position={`${letter}1`} />
      <Square position={`${letter}2`} />
      <Square position={`${letter}3`} />
    </div>
  );
};

export default Row;
