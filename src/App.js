import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/Home'
import DashboardContainer from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/dashboard/" component={DashboardContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App