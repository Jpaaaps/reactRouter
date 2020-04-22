import React from 'react';
import Home from './Home';
import History from './History';

import './App.css';

import {Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/notre-histoire">History</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notre-histoire" component={History} />
      </Switch>
    </div>
  );
}

export default App;
