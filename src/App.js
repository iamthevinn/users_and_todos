import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Users<br />and<br />Todos
    </div>
  </div>
)

const Users = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Users
    </div>
  </div>
)

const Todos = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Todos
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul className="filter-nav">
            <li className="filter-nav-entry">
            <button><Link to="/">Home</Link></button>
            </li>
            <li className="filter-nav-entry">
              <button><Link to="/users">Users</Link></button>
            </li>
            <li className="filter-nav-entry">
            <button><Link to="/todos">Todos</Link></button>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/todos" component={Todos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
