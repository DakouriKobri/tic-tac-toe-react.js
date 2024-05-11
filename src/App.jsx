// NPM Packages
import { useState } from 'react';

// Project Imports
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Log from './components/Log';
import Players from './components/Players';
import { derivedActivePlayer, derivedGameBoard, derivedWinner } from './utils';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = derivedGameBoard(gameTurns);

  const winner = derivedWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, column: columnIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((currentPlayers) => {
      return {
        ...currentPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Players
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
