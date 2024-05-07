import Players from './components/Players';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Player 1" symbol="X" />
          <Players name="Player 2" symbol="O" />
        </ol>
        <div>Game Board</div>
      </div>

      <div>Game Log</div>
    </main>
  );
}

export default App;
