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
        <Route exact path='/' component={Home} />
        <Route exact path='/writings/' component={Writings} />
        <Route exact path='/contact/' component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default Application
