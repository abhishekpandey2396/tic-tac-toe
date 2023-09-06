import React, { useState } from 'react'
import "./ScoreBoard.css"

export const ScoreBoard = ({score,xplaying}) => {
    const {xScore,oScore}=score; 
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xplaying && "inactive"}`}>X - {xScore}</span>
      <span  className={`score o-score ${xplaying && "inactive"}`}>O - {oScore}</span>

    </div>
  )
}
