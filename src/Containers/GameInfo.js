import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import SettingsIcon from '@material-ui/icons/Settings'
import Stack from '../Components/Stack'
import Input from '../Components/Input'
import Text from '../Components/Text'
import Button from '../Components/Button'
import Guesses from './Guesses'

const Settings = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px ${Colors.light} solid;
  border-radius: ${Metrics.radiusSmall}px;
`

class GameInfo extends Component {
  state = {
    guesses: [],
    currentGuess: '',
    notification: '',
    secretCode: this.props.secretCode
  }

  onSubmitGuess() {
    let guessString = this.state.currentGuess
    if (this.validateGuess(guessString)) {
      this.setState({
        notification: ''
      })
    } else {
      this.setState({
        notification: 'guess must be a four digit number'
      })
    }
  }

  createGuessObject(guess) {
    let { secretCode } = this.props
    let guessObject = {
      guess: guess,
      guessFeeback: {
        numPlace: 0,
        place: 0
      }
    }
    
  }

  validateGuess(guess) {
    let isValid = true
    if (guess.length !== 4 || isNaN(guess)) {
      return false
    }
    for (let i = 0; i < guess.length; i ++ ) {
      let digit = guess[i]
      if (Number(digit) === 8 || Number(digit) === 9) {
        isValid = false
      }
    }
    console.log(`is valid: ${isValid}`)
    return isValid
  }

  onChangeHandler(id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  render ()  {
    return (
      <Settings>
        <Stack vertical align='center'>
          <Stack align='center'>
            <SettingsIcon color='action' />
            <Text size='medium' color='secondary'>Game Settings</Text>
            <SettingsIcon color='action' />
          </Stack>
          <Button
            id='confirmexit'
            onClick={(e) => this.props.onExitGame(e)}
          >
            I give up!
          </Button>
          <div style={{margin: '10px 20px'}}>
            <div>Guesses Left: {this.props.guessesLeft}</div>
            <div>Username: {this.props.username}</div>
            <div>SecretCode: {JSON.stringify(this.props.secretCode)}</div>
            <Input
              text='Current Guess'
              id='currentGuess'
              placeholder='please enter four digit number'
              onChangeHandler={this.onChangeHandler.bind(this)}
            />
            {this.state.notification}
          </div>
          <Button
            id='submitGuess'
            onClick={this.onSubmitGuess.bind(this)}
          >
            Submit Guess
          </Button>
          <Guesses guesses={this.state.guesses} />
        </Stack>
      </Settings>
    )
  }
}

export default GameInfo