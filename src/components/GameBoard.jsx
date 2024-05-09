export default function GameBoard({ onSelectSquare, board }) {
  const gameBoardOutput = board.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, columnIndex) => (
          <li key={columnIndex}>
            <button
              disabled={playerSymbol !== null}
              onClick={() => onSelectSquare(rowIndex, columnIndex)}
            >
              {playerSymbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{gameBoardOutput}</ol>;
}
