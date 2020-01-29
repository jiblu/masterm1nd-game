import React from 'react'
import Stack from '../Components/Stack'
import Text from '../Components/Text'

const Rules = props => (
  <Stack vertical>
    <Text size='medium' color='secondary'>Game Rules</Text>
    <Stack align='flex-start'>
      <ul>
        <li><Text size='small'>You get 10 chances to crack the 4 digit code</Text></li>
        <li><Text size='small'>After each guess, you will get two feedback values:</Text></li>
        <li><Text size='small'> 1) Numbers and Places - # of correct digits in the right place </Text></li>
        <li><Text size='small'> 2) Number - # of correct digits in the wrong place </Text></li>
        <li><Text size='small'>Can you crack the code?</Text></li>
      </ul>
    </Stack>
    <Text size='smaller' color='secondary'>*Increase level to increase viable number range</Text>
    <Text size='smaller' color='secondary'>Normal: 0 - 7</Text>
    <Text size='smaller' color='secondary'>Nightmare: 0 - 8</Text>
    <Text size='smaller' color='secondary'>Hell: 0 - 9</Text>
  </Stack>
)

export default Rules