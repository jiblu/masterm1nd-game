import React from 'react'
import styled from 'styled-components'
import Text from '../Components/Text'

const Result = styled.div`
`

const ResultPage = props => {
  return (
    <Result>
      <Text size='medium'>
        {props.result}
      </Text>
    </Result>
  )
}

export default ResultPage