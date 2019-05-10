import React, {Component} from 'react';
import GameBox from '../components/GameBox';
import PlayerBox from '../components/PlayerBox';
import './MasterBox.css'

class MasterBox extends Component {
  constructor(props){
    super(props);
    this.state ={
      gameArray: ['', '', '', '', '', '', '', '', ''],
      winner: '',
      currentPlayer: 'X'
    }
    this.nextPlayer={'X':'O','O':'X'}

    this.updateGameArray = this.updateGameArray.bind(this);
    this.hasSomeoneWon = this.hasSomeoneWon.bind(this)
  }

  render(){
    return(
      <div className='page'>
        <h1 className='Title'> Mega Tic-Tac-Toe Fun Time </h1>
        <GameBox currentPlayer={this.state.currentPlayer} gameArray={this.state.gameArray} updateGameArray={this.updateGameArray}/>
        <PlayerBox currentPlayer={this.state.currentPlayer} winner={this.state.winner}/>
      </div>
    )
  }

  updateGameArray(element){
    const array = this.state.gameArray;
    array[element] = this.state.currentPlayer;
    const player = this.nextPlayer[this.state.currentPlayer]
    this.setState({gameArray: array, currentPlayer: player});
    this.hasSomeoneWon()
    this.isItADraw()
  }

  hasSomeoneWon(){
    const array = this.state.gameArray;
    for (let i = 0; i < 3; i++) {
      if(array[i] && array[i]===array[i+3] && array[i]===array[i+6]){
        this.setState({winner:array[i]});
        return
      }
    }
    for (let i = 0; i <7; i+=3) {
      if(array[i] && array[i]===array[i+1] && array[i]===array[i+2]){
        this.setState({winner:array[i]})
        return
      }
    }
    if(array[0] && array[0]===array[4] && array[0]===array[8]){
      this.setState({winner:array[0]})
      return
    }
    if(array[2] && array[2]===array[4] && array[2]===array[6]){
      this.setState({winner:array[2]})
      return
    }
  }

  isItADraw(){
    const array = this.state.gameArray;
      if(array[0] && array[1] && array[2] && array[3] && array[4] && array[5] && array[6] && array[7] && array[8]){
        this.setState({winner:'draw'})
      }
  }
}



export default  MasterBox
