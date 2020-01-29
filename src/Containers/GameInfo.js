import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import SettingsIcon from '@material-ui/icons/Settings'
import Stack from '../Components/Stack'
import Input from '../Components/Input'
import Text from '../Components/Text'
import Button from '../Components/Button'
import Guesses from './Guesses'
import ResultPage from './ResultPage'

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
    status: 'playing',
    secretCode: this.props.secretCode,
    guessesLeft: 10
  }

  onSubmitGuess() {
    let guessString = this.state.currentGuess
    if (this.validateGuess(guessString)) {
      this.setState({
        notification: ''
      }, () => {
        this.setState({
          guessesLeft: 10 - this.state.guesses.length,
          currentGuess: ''
        })
      } )
    } else {
      this.setState({
        notification: 'guess must be a four digit number between 0 and 7'
      })
    }
  }

  validateGuess(guess) {
    let isValid = true
    let guessObject = {}
    let secretCodeObject = {}
    let correctNums = 0
    let correctNumPlaces = 0
    let { secretCode } = this.state
    if (guess.length !== 4 || isNaN(guess)) {
      return false
    }
    for (let i = 0; i < guess.length; i ++ ) {
      let digit = guess[i]
      if (Number(digit) === 8 || Number(digit) === 9) {
        isValid = false
      } else {
        if (!guessObject.hasOwnProperty(digit)) {
          guessObject[digit] = {}
          guessObject[digit].indices = {[i]:i}
          guessObject[digit].count = 1
        } else {
          guessObject[digit].indices[i] = i
          guessObject[digit].count++
        }
      }
    }
    if (isValid) {
      for (let i = 0; i < secretCode.length; i ++) {
        let digit = secretCode[i]
        if (!secretCodeObject.hasOwnProperty(digit)){
          secretCodeObject[digit] = {}
          secretCodeObject[digit].indices = {[i]:i}
          secretCodeObject[digit].count = 1
        } else {
          secretCodeObject[digit].indices[i] = i
          secretCodeObject[digit].count++
        }
      }
      for (let digit in secretCodeObject) {
        if (guessObject.hasOwnProperty(digit)) {
          correctNums+= Math.min(secretCodeObject[digit].count,guessObject[digit].count)
          for (let index in secretCodeObject[digit].indices){
            if (guessObject[digit].indices.hasOwnProperty(index)) {
              correctNumPlaces++
              correctNums--
            }
            if (correctNumPlaces === 4) {
              console.log(`You win! Secret code was ${secretCode}`)
              this.setState({
                status: 'win'
              })
            }
          }
        }
      }
      let newGuesses = this.state.guesses.slice(0)
      let newGuess = {
        guess: guess,
        feedback: {
          nums: correctNums,
          numPlaces: correctNumPlaces
        }
      }
      newGuesses.push(newGuess)
      this.setState({
        guesses: newGuesses
      })
    }
    return isValid
  }

  onChangeHandler(id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  render ()  {
    switch(this.state.status) {
      case 'win':
        return <ResultPage result='You Win!' />
      case 'lose':
        return <ResultPage result='You Lose!' />
      default:
        return (
          <Settings>
            <Stack vertical align='center'>
              <Stack align='center'>
                <SettingsIcon color='action' />
                <Text size='medium' color='secondary'>Game</Text>
                <SettingsIcon color='action' />
              </Stack>
              <Button
                id='confirmexit'
                onClick={(e) => this.props.onExitGame(e)}
              >
                I give up!
              </Button>
              <div style={{margin: '10px 20px'}}>
                <div>Guesses Left: {this.state.guessesLeft}</div>
                <div>Username: {this.props.username}</div>
                <div>SecretCode: {JSON.stringify(this.props.secretCode)}</div>
                <Input
                  text='Current Guess'
                  id='currentGuess'
                  placeholder='please enter four digit number'
                  onChangeHandler={this.onChangeHandler.bind(this)}
                  value={this.state.currentGuess}
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
}

export default GameInfo