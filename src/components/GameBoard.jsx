const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const gameBoard = initialGameBoard.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, columnIndex) => (
          <li key={columnIndex}>
            <button>{playerSymbol}</button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{gameBoard}</ol>;
}
