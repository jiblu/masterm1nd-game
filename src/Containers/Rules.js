import React from 'react'
import Stack from '../Components/Stack'
import Text from '../Components/Text'

const Rules = props => (
  <Stack vertical>
    <Text size='small' color='secondary'>Game Rules</Text>
    <Stack align='flex-start'>
      <ul>
        <li><Text size='smaller'>You get 10 chances to crack the 4 digit code</Text></li>
        <li><Text size='smaller'>After each guess, you will get two feedback values:</Text></li>
        <li><Text size='smaller'> 1) Numbers and Places - # of correct digits in the right place </Text></li>
        <li><Text size='smaller'> 2) Numbers - # of correct digits in the wrong place </Text></li>
      </ul>
    </Stack>

    <Text size='small' color='secondary'>Scoring</Text>
    <Stack align='flex-start'>
      <ul>
        <li><Text size='smaller'>You start with 100 points</Text></li>
        <li><Text size='smaller'>10 points deducted for each round of incorrect guesses</Text></li>
        <li><Text size='smaller'>Hints cost 10 points for first digit revealed</Text></li>
        <li><Text size='smaller'>You lose if you have 0 points or use up all your guesses - whichever comes first</Text></li>
      </ul>
    </Stack>
    <Text size='smaller' color='secondary'>*Increase level to increase viable number range</Text>
    <Text size='smaller' color='secondary'>Normal: 0 - 7 / Nightmare: 0 - 8 / Hell: 0 - 9</Text>
  </Stack>
)

export default Rules