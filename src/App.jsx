/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSequares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquares(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquare = squares.slice();

    nextSquare[i] = xIsNext ? "X" : "O";

    setSequares(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner =    calculateWinner(squares);
  let status = '';
  if (winner) {
    status = 'Winner:' + winner;
  } else {
    status = 'Next Turn: ' + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <div className="status"><h1>Simple Tic Tac Toe Games</h1>{status}</div>
    <div className="board">
      <Square value={squares[0]} onSquareClick={() => handleSquares(0)} />
      <Square value={squares[1]} onSquareClick={() => handleSquares(1)} />
      <Square value={squares[2]} onSquareClick={() => handleSquares(2)} />
      <Square value={squares[3]} onSquareClick={() => handleSquares(3)} />
      <Square value={squares[4]} onSquareClick={() => handleSquares(4)} />
      <Square value={squares[5]} onSquareClick={() => handleSquares(5)} />
      <Square value={squares[6]} onSquareClick={() => handleSquares(6)} />
      <Square value={squares[7]} onSquareClick={() => handleSquares(7)} />
      <Square value={squares[8]} onSquareClick={() => handleSquares(8)} />
    </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
    }
  }

  return false;
}
