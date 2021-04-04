import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar'
import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
