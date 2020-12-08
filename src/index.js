import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/Search';
import Detail from './pages/Detail';

const root = document.getElementById('root');
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={SearchResults} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
};
ReactDOM.render(<App />, root);
