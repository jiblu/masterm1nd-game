import styled, { css } from 'styled-components'
import { Colors, Metrics } from '../Themes/index'

const Text = styled.div`
  margin: ${props => props.margin ? props.margin : '0px'};
  ${props => props.align && css`
    text-align: ${props.align}
  `};
  ${props => props.size && css`
    font-size: ${Metrics.fontSize[props.size]}px
  `};
  ${props => props.color && css`
    color: ${Colors[props.color]}
  `};
`

export default Text