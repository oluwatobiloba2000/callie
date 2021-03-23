import React from 'react';
import  Home from './pages/Home/Home';
import Meeting from './pages/Meeting/Meeting';
import 'rsuite/dist/styles/rsuite-default.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meeting/:id" component={Meeting}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
