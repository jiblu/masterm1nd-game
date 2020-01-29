import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './Components/Header'
import Game from './Containers/Game'
import Rules from './Containers/Rules'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path='/'
            render={() => <Game />}
          />
          <Route
            path='/rules'
            render={() => <Rules />}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
