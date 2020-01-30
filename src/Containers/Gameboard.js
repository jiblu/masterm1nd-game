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
import TextDisplay from '../Components/TextDisplay'

const Settings = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px ${Colors.light} solid;
  border-radius: ${Metrics.radiusSmall}px;
`

class Gameboard extends Component {
  state = {
    guesses: [],
    currentGuess: '',
    notification: '',
    secretCode: this.props.secretCode,
    guessesLeft: 10,
    score: 100,
    showHint: false
  }

  onSubmitGuess() {
    let guessString = this.state.currentGuess
    if (this.validateGuess(guessString)) {
      this.setState({
        notification: ''
      }, () => {
        let guessesLeft = 10 - this.state.guesses.length
        if (guessesLeft === 0) {
          this.setState({
            guessesLeft: 10 - this.state.guesses.length,
            status: 'lose'
          })
        } else {
          this.setState({
            guessesLeft: 10 - this.state.guesses.length,
            currentGuess: ''
          })
        }
      } )
    } else {
      this.setState({
        notification: `guess must be a four digit number between 0 and ${this.props.max}`
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
      if (Number(digit) > this.props.max) {
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
      let newScore = this.state.score - 10
      this.setState({
        guesses: newGuesses,
        score: newScore
      })
      if (newScore === 0) {
        this.setState({
          status: 'lose',
          score: 0
        })
      }
    }
    return isValid
  }

  onChangeHandler(id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  buyHint() {
    let oldScore = this.state.score - 10
    this.setState({
      showHint: true,
      score: oldScore
    })
  }

  render ()  {
    switch(this.state.status) {
      case 'win':
        return (
          <ResultPage
            result='You Win!'
            exitGame={this.props.onExitGame}
            secretCode={this.state.secretCode}
            guessesLeft={this.state.guessesLeft}
            username={this.props.username}
            score={this.state.score}
          >
            <Guesses guesses={this.state.guesses} />
          </ResultPage>
        )
      case 'lose':
        return (
          <ResultPage
            result='You Lose!'
            exitGame={this.props.onExitGame}
            secretCode={this.state.secretCode}
            guessesLeft={this.state.guessesLeft}
            username={this.props.username}
            score={this.state.score}
          >
            <Guesses guesses={this.state.guesses} />
          </ResultPage>
        )
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
              {this.state.showHint ? null : <Button onClick={this.buyHint.bind(this)}>Buy Hint</Button>}
              <div style={{margin: '10px 20px'}}>
                <TextDisplay text='Username' value={this.props.username} />
                <TextDisplay text='Guesses Left' value={this.state.guessesLeft} />
                <TextDisplay text='Level' value={this.props.level} />
                <TextDisplay text='Viable Range' value={`0 - ${this.props.max}`} />
                <TextDisplay text='Your Score' value={this.state.score} />
                {this.state.showHint && this.state.score > 10 ? <TextDisplay text='Hint' value={`${this.state.secretCode.slice(0, 1)}_ _ _`} /> : null }
                {/* <TextDisplay text='Secret Code' value={this.props.secretCode} /> */}
                <Input
                  text='Current Guess'
                  id='currentGuess'
                  placeholder='please enter four digit number'
                  onChangeHandler={this.onChangeHandler.bind(this)}
                  value={this.state.currentGuess}
                />
                <Text
                  margin='10px 0'
                  color='primary'
                  size='medium'
                >
                  {this.state.notification}
                </Text>
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

export default Gameboard