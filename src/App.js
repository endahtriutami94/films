import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import routes from './routes';
import Films from './components/Films';
import Planets from './components/Planets';
import './App.css';

class App extends Component {
  render() {
    const routes = <routes />;
    console.log('routes: ', routes);
    return (
      <HashRouter>
        <div className="App">
          <div className="container">
            <ul>
              <li><NavLink to="/films">Films</NavLink></li>
              <li><NavLink to="/planets">Planets</NavLink></li>
            </ul>

            <div className="content">
              <Route path="/films" component={Films} />
              <Route path="/planets" component={Planets} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
