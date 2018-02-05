import React, { Component } from 'react';
import './App.css';
//import './ui-toolkit/css/nm-cx/main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Users<br />and<br />Todos
    </div>
  </div>
)

const Users = (props) => (
  <div className="">
    <ul>
      <li className="listItem selectedListItem">User 1</li>
      <li className="listItem">User 2</li>
      <li className="listItem">User 3</li>
      <li className="listItem">User 4</li>
    </ul>
  </div>
)

const Todos = (props) => (
  <div className="">
    <ul>
      <li className="listItem selectedListItem">Todo 1</li>
      <li className="listItem">Todo 2</li>
      <li className="listItem">Todo 3</li>
      <li className="listItem">Todo 4</li>
    </ul>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabName) {
    this.setState({selectedTab: tabName})
  }

  render() {

    let homeLink = <Link onClick={() => this.changeTab("home")} className="navItemContent" to="/">Home</Link>;
    let usersLink = <Link onClick={() => this.changeTab("users")} className="navItemContent" to="/users">Users</Link>;
    let todosLink = <Link onClick={() => this.changeTab("todos")} className="navItemContent" to="/todos">Todos</Link>

    let homeStyle = "navItemContent";
    let usersStyle = "navItemContent";
    let todosStyle = "navItemContent";
    
    if (this.state.selectedTab === "home") {
      homeStyle = "navItemContent clickedNav"
    } else if (this.state.selectedTab === "users") {
      usersStyle = "navItemContent clickedNav"
    } else if (this.state.selectedTab === "todos") {
      todosStyle = "navItemContent clickedNav"
    }

    return (
      <BrowserRouter>
        <div className="App">
          <div className="navigation">
            <li className="navItem">
              <Link onClick={() => this.changeTab("home")} className={homeStyle} to="/">Home</Link>
            </li>
            <li className="navItem">
              <Link onClick={() => this.changeTab("users")} className={usersStyle} to="/users">Users</Link>
            </li>
            <li className="navItem">
              <Link onClick={() => this.changeTab("todos")} className={todosStyle} to="/todos">Todos</Link>
            </li>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/todos" component={Todos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
