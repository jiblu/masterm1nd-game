import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Label from './Label'

const InputField = styled.input`
  border-color: ${Colors.secondaryAccent};
  background-color: ${Colors.light};
  color: ${Colors.secondary};
  border-radius: calc(${Metrics.radiusSmall}px - 2px);
  font-size: ${Metrics.fontSize.small}px;
  width: ${Metrics.buttonWidth}px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`

const Input = props => {
  return (
    <div>
      <Label text={props.text}/>
      <InputField
        placeholder={props.placeholder}
        onChange={(e) => props.onChangeHandler(props.id, e)}
      />
    </div>
  )
}

export default Input