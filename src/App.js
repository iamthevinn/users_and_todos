import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="filter-nav">
          <li className="filter-nav-entry">
            <button>Home</button>
          </li>
          <li className="filter-nav-entry">
            <button>Users</button>
          </li>
          <li className="filter-nav-entry">
            <button>Todos</button>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default App;
