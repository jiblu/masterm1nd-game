import React, { Component } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import PageDiv from '../Components/PageDiv'
import Button from '../Components/Button'
import Text from '../Components/Text'
import Stack from '../Components/Stack'
import Rules from '../Containers/Rules'
import Leaderboard from '../Containers/Leaderboard'
import GameSettings from '../Containers/GameSettings'
import GameInfo from '../Containers/GameInfo'


class Welcome extends Component {
  state = {
    showrules: false,
    showleaderboard: false,
    currentModal: '',
    live: false,
    username: '',
    level: '',
    guessesLeft: 10
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
    for (let setting in gameSettings) {
      this.setState({
        [setting]: gameSettings[setting]
      })
    }
    this.setState({
      live: true
    })
  }

  exitGame() {
    this.setState({
      live: false
    })
  }

  render () {
    let metaData = !this.state.live ?
    <GameSettings onCreateNewGame={this.createNewGame.bind(this)} /> :
    <GameInfo
      username={this.state.username}
      guessesLeft={this.state.guessesLeft}
      onExitGame={this.exitGame.bind(this)}
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

export default Welcome