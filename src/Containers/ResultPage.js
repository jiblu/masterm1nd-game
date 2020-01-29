import React from 'react'
import styled from 'styled-components'
import Text from '../Components/Text'
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
        <Button onClick={() => props.exitGame()}>Play Again</Button>
      </Stack>
    </Result>
  )
}

export default ResultPage