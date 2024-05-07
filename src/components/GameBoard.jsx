// NPM Packages
import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [...prevGameBoard].map((innerArray) => [
        ...innerArray,
      ]);
      updateBoard[rowIndex][columnIndex] = activePlayerSymbol;
      return updateBoard;
    });

    onSelectSquare();
  }

  const gameBoardOutput = gameBoard.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, columnIndex) => (
          <li key={columnIndex}>
            <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>
              {playerSymbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{gameBoardOutput}</ol>;
}
