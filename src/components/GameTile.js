import React, {Component} from 'react';
import './GameTile.css'

class GameTile extends Component {
  constructor(props){
    super(props);
    this.state ={
      clickedBy: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  render(){
    return(
      <div className={`Tile${this.props.value} Tile`}>
        <input
          className = "Button"
          type = "button"
          value = {this.state.clickedBy}
          onClick  = {this.handleClick}
        />
      </div>
    )
  }

  handleClick(){
    if (this.state.clickedBy === ''){
      this.props.updateGameArray(this.props.value)
      this.setState({clickedBy:this.props.currentPlayer})
    }
  }

}



export default  GameTile
