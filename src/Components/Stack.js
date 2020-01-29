import styled, { css } from 'styled-components'

// default stack is horizontal
const Stack = styled.div`
  display: flex;
  ${props => props.vertical && css`
    flex-direction: column
  `};
  ${props => props.justify && css`
    justify-content: ${props.justify}
  `};
  ${props => props.align && css`
    align-items: ${props.align}
  `}
`

export default Stack