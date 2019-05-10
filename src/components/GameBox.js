import React from 'react';
import GameTile from './GameTile'
import './GameBox.css'

const GameBox = (props) => {
  const gameGrid = props.gameArray.map((tile,i)=>{
    return(
      <GameTile key={i} value={i} currentPlayer={props.currentPlayer} updateGameArray={props.updateGameArray}/>
    )
  });
    return(
      <div className = 'GameBox'>
        {gameGrid}
      </div>
  )
}

export default GameBox;
