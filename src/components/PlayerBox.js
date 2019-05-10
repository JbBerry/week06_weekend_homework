import React from 'react';
import './PlayerBox.css'

const PlayerBox = (props) => {

  let text = ''
  switch (props.winner) {
    case 'draw':
      text = `It's a draw`
      break;
    case 'X':
    case 'Y':
      text =`Player ${props.winner} has won`
      break
    default:
      text = `Player ${props.currentPlayer} turn`
    }

  return(
    <div className = 'PlayerBox'>
      <div >{text}</div>
      <form>
        <input
          className = "button"
          type = "submit"
          value = "Start Again"
        />
      </form>
    </div>
  )
}

export default PlayerBox;
