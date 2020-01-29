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
  width: ${Metrics.buttonWidth + 14}px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;

`

const Dropdown = props => {
  return (
    <div>
      <Label text={props.text} />
      <Select onChange={(e) => props.onChangeHandler(props.id, e)}>
        {props.list.map((item, i) => {
          return (
            <option key={i}>{item}</option>
          )
        })}
      </Select>
    </div>
  )
}

export default Dropdown