import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home'


function App() {
  return (
    <Router>
      <div className="MainContainer">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
