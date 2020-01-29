import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import SettingsIcon from '@material-ui/icons/Settings'
import Stack from '../Components/Stack'
import Input from '../Components/Input'
import Text from '../Components/Text'
import Button from '../Components/Button'

const Settings = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px ${Colors.light} solid;
  border-radius: ${Metrics.radiusSmall}px;
`

class GameInfo extends Component {
  state = {
    guesses: [],
    currentGuess: ''
  }

  guessValidator(guess) {

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
            <Input
              text='Current Guess'
              id='currentGuess'
              placeholder='please enter four digit number'
              onChangeHandler={this.onChangeHandler.bind(this)}
            />
          </div>
          <Button
            id='submitGuess'
          >
            Submit Guess
          </Button>
        </Stack>
      </Settings>
    )
  }
}

export default GameInfo