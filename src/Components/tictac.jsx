import React from 'react'
import { useState } from 'react'
import "./tictac.css"
import { MarkGithubIcon} from '@primer/octicons-react';

function Square({value,onSquareClick}){
    return <button className='square'
    onClick={onSquareClick}
    >{value}</button>
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default function TicTac() {
    const [isNext,setIsNext]=useState(true);
    const [squares,setSquares]=useState(Array(9).fill(null));

    function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
            return
        }
        const nextSquares= squares.slice();
        if(isNext)
        {
            nextSquares[i] = 'X';
        }
        else{
            nextSquares[i] = 'O';
        }
        
        setSquares(nextSquares);
        setIsNext(!isNext);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Congratulations , The Winner is " + winner;
      } else if (squares.every((square) => square !== null)) {
        status = "Game is Draw.";
      } else {
        status = "Players Turn : " + (isNext ? "X" : "O");
      }
    function reset(){
        setSquares(Array(9).fill(null));
        status="";
        setIsNext(true);
    }
  return (
    <>
    <div className='container'>
    <div className='turn Owner'>
        <span>
           {status}
    <button onClick={reset}>
        Restart
    </button>
        </span>
    </div>
    <div className='board-row'>
          <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className='board-row'>
              <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
              <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
              <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className='board-row'>
              <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
              <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
              <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>


    <div className='Owner'>

    <p>Designed and Developed by Zubair Zahid</p>
    <a href="https://github.com/zubairzahid94" target="_blank" rel="noopener noreferrer">
        <MarkGithubIcon size={24} style={{ color: '#0366d6', marginRight: '8px' }} />
      </a>
    </div>


    </div>
     </>
    
  )
}
