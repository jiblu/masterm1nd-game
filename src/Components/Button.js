import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'

const Button = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.primaryAccent};
  border-radius: ${Metrics.radiusSmall}px;
  font-size: ${Metrics.fontSize.medium}px;
  width: ${Metrics.buttonWidth}px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    font-size: calc(${Metrics.fontSize.medium}px + 2px)
  } 

`

export default Button