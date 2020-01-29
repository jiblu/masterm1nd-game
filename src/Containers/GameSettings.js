import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import SettingsIcon from '@material-ui/icons/Settings'
import Stack from '../Components/Stack'
import Input from '../Components/Input'
import Text from '../Components/Text'
import Button from '../Components/Button'
import Dropdown from '../Components/Dropdown'

const Settings = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px ${Colors.light} solid;
  border-radius: ${Metrics.radiusSmall}px;
`

class GameSettings extends Component {
  state = {
    username: 'guest',
    level: 'normal'
  }

  onChangeHandler(id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  render () {
    const levels = ['normal', 'nightmare', 'hell']
    return (
      <Settings>
        <Stack vertical align='center'>
          <Stack align='center'>
            <SettingsIcon color='action' />
            <Text size='medium' color='secondary'>Game Settings</Text>
            <SettingsIcon color='action' />
          </Stack>
          <div style={{margin: '10px 20px'}}>
            <Input
              text='username'
              id='username'
              placeholder='leave blank for guest'
              onChangeHandler={this.onChangeHandler.bind(this)}
            />
            <Dropdown
              text='level'
              id='level'
              onChangeHandler={this.onChangeHandler.bind(this)}
              list={levels}
            />
          </div>
          <Button
            onClick={() => this.props.onCreateNewGame(this.state)}
          >
            New Game
          </Button>
        </Stack>
      </Settings>
    )
  }
}

export default GameSettings