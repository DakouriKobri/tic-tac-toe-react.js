// Project Imports
import GameBoard from './components/GameBoard';
import Players from './components/Players';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players initialName="Player 1" symbol="X" />
          <Players initialName="Player 2" symbol="O" />
        </ol>

        <GameBoard />
      </div>
    </main>
  );
}

export default App;
