import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'

const GuessesTable = styled.table`
  border-collapse: collapse;
  border-radius: ${Metrics.radiusSmall}px;
  overflow: hidden;
`
const GuessesRow = styled.tr`

`

const GuessesHeader = styled.th`
  padding: 1em;
  background: ${Colors.light};
  border-bottom: 2px solid ${Colors.white};
`
const GuessesData = styled.td`
  padding: 1em;
  background: ${Colors.light};
  border-bottom: 2px solid ${Colors.white};
  text-align: center
`

const Guesses = props => {
  return (
    <GuessesTable>
      <GuessesRow>
        <GuessesHeader>Your Guess</GuessesHeader>
        <GuessesHeader>Correct Numbers</GuessesHeader>
        <GuessesHeader>Correct Numbers AND Places</GuessesHeader>
      </GuessesRow>
      {props.guesses.map((guess, i) => {
        return (
          <GuessesRow key={i}>
            <GuessesData>{guess.guess}</GuessesData>
            <GuessesData>{guess.feedback.nums}</GuessesData>
            <GuessesData>{guess.feedback.numPlaces}</GuessesData>
          </GuessesRow>
        )
      })}
    </GuessesTable>
  )
}

export default Guesses