import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Label from './Label'

const Select = styled.select`
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

const Dropdown = props => {
  return (
    <div>
      <Label>
        {props.text}
      </Label>
      <Select name={props.name}>
        {props.listItems.map(item => {
          return <option value={item}>{item}</option>
        })}
      </Select>
    </div>
  )
}

export default Dropdown