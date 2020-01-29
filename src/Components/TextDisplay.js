import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Label from './Label'
import Stack from './Stack'

const Text = styled.div`
  border-color: ${Colors.secondaryAccent};
  background-color: ${Colors.light};
  color: ${Colors.secondary};
  border-radius: calc(${Metrics.radiusSmall}px - 2px);
  font-size: ${Metrics.fontSize.small}px;
  width: ${Metrics.buttonWidth}px;
  margin: 5px;
  padding: 5px;
`

const TextDisplay = props => {
  return (
    <Stack horizontal align='center'>
      <Label text={props.text} />
      <Text>
        {props.value}
      </Text>
    </Stack>
  )
}

export default TextDisplay