# MASTERM1ND
LinkedIn Coding Challenge

## Setup
### Run Direct In Browser

Open [http://jiblu.github.io/masterm1nd-game/](http://jiblu.github.io/masterm1nd-game/) to view the game directly in the browser without any additional setup.

### Run On Local Computer In Development Mode

Open your terminal to the directory you wish to save the repository.<br />
In the project directory, you can run:<br />
`git clone https://github.com/jiblu/masterm1nd-game.git`<br />
This will clone down the repo to your local machine.<br />
`npm install`<br />
This will install all dependencies required to successful run the app.<br />
 `npm start`<br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

## About my implementation of the Mastermind Game

I used the React front end framework to build the game.
When you run the game in the browser or your local machine, you will see a single page application.
This application tries to make use of the components nature of React by breaking up reusable pieces that are customized using the styled-components library.

### Extensions
- Rules / How to play (modal)
- Difficulty customization: increases range of viable numbers up to 3 tiers
- Score tracking: keeps score based on number of guesses before winning or reaching 0
- Hint feature: allows user to receive a one time first digit hint for 10 point deduction

### Masterm1nd 2.0
- Implement a database so scores can persist and be loaded to the leaderboard (currently empty)
