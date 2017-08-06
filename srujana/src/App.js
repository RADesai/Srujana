import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/events' component={ Events } />
          <Route path='/team ' component={ Team } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </div>
    );
  }
}

export default App;
