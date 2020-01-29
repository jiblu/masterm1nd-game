import React, { Component } from 'react'
import GameSettings from '../Containers/GameSettings'
import Game from '../Containers/Game'

class Gameboard extends Component {
  state = {
    boardActive: false
  }
  render () {
    let board = this.state.boardActive ? <Game /> : <GameSettings />
    return (
      <div>
        Gameboard
        <div>You are the {this.state.codebreaker ? 'codebreaker': 'codemaster'}</div>
        <GameSettings />
      </div>
    )
  }
}

export default Gameboard