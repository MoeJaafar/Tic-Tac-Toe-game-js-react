import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const checkForWinner = (gameState) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  const handleCellClick = (index) => {
    if (!gameState[index] && !gameOver) {
      setGameState(prev => {
        const newState = [...prev];
        newState[index] = isXTurn ? 'X' : 'O';
        return newState;
      });
      setIsXTurn(!isXTurn);
    }
  }

  const resetGame = () => {
    setGameState(Array(9).fill(null));
    setIsXTurn(true);
    setGameOver(false);
  }

  useEffect(() => {
    // Check for a winner after every render
    const winner = checkForWinner(gameState);
    if (winner && !gameOver) {
      setGameOver(true);
      alert(`Player ${winner} wins!`);
    }
  }, [gameState, gameOver]);

  return (
    <div className="App">
      <div className="tictactoe">
        <div className="title"> <h1>Tic Tac Toe</h1>  </div>
        {[0, 1, 2].map(i => (
          <div className="row" key={i}>
            {[0, 1, 2].map(j => (
              <button 
                key={3*i + j}
                onClick={() => handleCellClick(3*i + j)}
                className={gameState[3*i + j] === 'O' ? "oStyle" : gameState[3*i + j] === 'X' ? "xStyle" : "buttonStyle"} 
              >
                {gameState[3*i + j]}
              </button>
            ))}
          </div>
        ))}
        
        <br/>
        <button onClick={resetGame} className={"resetbuttonStyle"}>
  <FontAwesomeIcon icon={faSync} />
</button>
        
        <div class="logo-container">
          <a href="https://github.com/MoeJaafar" target="_blank" rel="noreferrer" >
            <img src='./black.png' alt="MOE J" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default App;
