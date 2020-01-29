import React, { Component } from 'react'
import axios from 'axios'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import PageDiv from '../Components/PageDiv'
import Button from '../Components/Button'
import Text from '../Components/Text'
import Stack from '../Components/Stack'
import Rules from '../Containers/Rules'
import Leaderboard from '../Containers/Leaderboard'
import GameSettings from '../Containers/GameSettings'
import Gameboard from '../Containers/Gameboard'


class Game extends Component {
  state = {
    showrules: false,
    showleaderboard: false,
    currentModal: '',
    live: false,
    username: '',
    level: '',
    secretCode: null,
    max: 7
  }

  showModal(e) {
    let modal = `show${e.target.id}`
    this.setState({
      [modal]: true,
      currentModal: modal
    })
  }

  hideModal() {
    this.setState({
      [this.state.currentModal]: false
    })
  }

  createNewGame(gameSettings) {
    let { username, level } = gameSettings
    let max = level === 'normal' ? 7 : level === 'nightmare' ? 8 : 9
    let url = `https://www.random.org/integers/?num=4&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`
    axios.get(url)
      .then((response) => {
        return response.data.split('\n').slice(0, 4).join('')
      })
      .then(code => {
        this.setState({
          ...this.state,
          secretCode: code,
          username: username,
          level: level,
          live: true,
          max: max
        })
      })
      .catch(error => console.log(`error getting code: ${error}`))
  }

  exitGame() {
    this.setState({
      live: false
    })
  }

  render () {
    let metaData = !this.state.live ?
    <GameSettings onCreateNewGame={this.createNewGame.bind(this)} /> :
    <Gameboard
      username={this.state.username}
      level={this.state.level}
      onExitGame={this.exitGame.bind(this)}
      secretCode={this.state.secretCode}
      max={this.state.max}
    />

    return (
      <PageDiv>
        <Text align='center' size='large'>Mastermind</Text>
        <Stack justify='center'>
          <Button id='rules' onClick={this.showModal.bind(this)}>How To Play</Button>
          <Button id='leaderboard' onClick={this.showModal.bind(this)}>Leaderboard</Button>
        </Stack>
        {metaData}
        <Rodal
          height='300'
          visible={this.state.showrules}
          onClose={this.hideModal.bind(this)}
        >
          <Rules />
        </Rodal>
        <Rodal
          visible={this.state.showleaderboard}
          onClose={this.hideModal.bind(this)}
        >
          <Leaderboard />
        </Rodal>
        <Rodal
          visible={this.state.showconfirmexit}
          onClose={this.hideModal.bind(this)}
        >
          <Leaderboard />
        </Rodal>
      </PageDiv>
    )
  }
}

export default Game