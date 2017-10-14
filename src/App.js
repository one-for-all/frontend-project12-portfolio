import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Writings from './Writings'
import Contact from './Contact'

// Main application component
function Application() {
  return (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/frontend-project12-portfolio/' component={Home} />
        <Route exact path='/frontend-project12-portfolio/writings/' component={Writings} />
        <Route exact path='/frontend-project12-portfolio/contact/' component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default Application
