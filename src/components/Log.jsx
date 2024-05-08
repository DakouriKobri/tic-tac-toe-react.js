export default function Log({ turns }) {
  const turnsList = turns.map((turn) => {
    const { square, player } = turn;
    const { row, column } = square;

    return (
      <li key={`${row}${column}`}>
        {player} selected {row},{column}
      </li>
    );
  });

  return <ol id="log">{turnsList}</ol>;
}
