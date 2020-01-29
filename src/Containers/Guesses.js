import React from 'react'

const Guesses = props => {
  return (
    <table>
      <tr>
        <th>Your Guess</th>
        <th>Correct Numbers</th>
        <th>Correct Numbers AND Places</th>
      </tr>
      {props.guesses.map((guess, i) => {
        return (
          <tr key={i}>
            <td>{guess.guess}</td>
            <td>{guess.feedback.nums}</td>
            <td>{guess.feedback.numPlaces}</td>
          </tr>
        )
      })}
    </table>
  )
}

export default Guesses