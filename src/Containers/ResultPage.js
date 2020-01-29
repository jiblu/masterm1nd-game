import React from 'react'
import styled from 'styled-components'
import Text from '../Components/Text'
import TextDisplay from '../Components/TextDisplay'
import Stack from '../Components/Stack'
import Button from '../Components/Button'

const Result = styled.div`
`

const ResultPage = props => {
  return (
    <Result>
      <Stack vertical align='center'>
        <Text size='medium'>
          {props.result}
        </Text>
        <TextDisplay text='Your Score' value={props.score} />
        <TextDisplay text='Username' value={props.username} />
        <TextDisplay text='Guesses Used' value={`${(10 - props.guessesLeft)} / 10`} />
        <TextDisplay text='Secret Code' value={props.secretCode} />
        {props.children}
        <Button onClick={() => props.exitGame()}>Play Again</Button>
      </Stack>
    </Result>
  )
}

export default ResultPage