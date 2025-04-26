import Row from "./Row";

const Board = () => {
  return (
    <section className=" gap-1 w-[90vw] h-[90vh] p-2 flex flex-col align-middle justify-center">
      <Row letter="a" />
      <Row letter="b" />
      <Row letter="c" />
    </section>
  );
};

export default Board;
