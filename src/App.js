import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Copyright from './components/layout/Copyright'
import Dashboard from './components/dashboard/Dashboard'
import Result from './components/dashboard/Result'
import Profile from './components/auth/Profile'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Notifications from './components/dashboard/Notifications'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/result' component={Result} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/stats' component={Notifications} />
          </Switch>
          <Copyright/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
