import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Dashboard from 'routes/Dashboard'
import CreateBook from 'routes/CreateBook'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    {/* <Route path='/dashboard' component={Dashboard} /> */}
    <Route path='/create-book' component={CreateBook} />
    <Route path='/create-book/:id' component={CreateBook} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
