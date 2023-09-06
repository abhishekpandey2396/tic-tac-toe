import React, { useState } from 'react';
import './App.css';
import { Board } from './component/Board';
import { ScoreBoard } from './component/ScoreBoard';
import { ResetButton } from './component/ResetButton';

function App() {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const[board,setBoard] = useState(Array(9).fill(null));
  const [xplaying,setXplaying] = useState(true);
  const [score,setScore] = useState({xScore:0,oScore:0});
  const [gameOver ,setGameOver] = useState(false);
  
  const handleBoxClick = (boxIndex)=>{
    const updatedboard = board.map((value,index)=>{
      if(index === boxIndex)
      {
        return xplaying === true ? "X" : "O";
      }else
      {
        return value;
      }
    })
    const winner = checkWinner(updatedboard);
    if(winner){
      if(winner==="O")
      {
        let {oScore} = score;
        oScore++;
        setScore({...score,oScore})
      }else{
        let {xScore} = score;
        xScore++;
        setScore({...score,xScore})
      }
    }
    setBoard(updatedboard);
    setXplaying(!xplaying);
  }

  const checkWinner  = (board) =>{
    for(let i = 0; i<winCondition.length; i++)
    {
      const [x,y,z] = winCondition[i];

      if(board[x] && board[x]===board[y] && board[y]===board[z])
      {
        setGameOver(true);
        return board[x];
      }
    }
  }
  
  const resetBoard = ()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className='App'>
      <ScoreBoard score={score} xplaying={xplaying }/>
      <Board board = {board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard ={resetBoard}/>
    </div>
  )
}
export default App;

