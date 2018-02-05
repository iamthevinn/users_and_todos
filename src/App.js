import React, { Component } from 'react';
import './App.css';
//import './ui-toolkit/css/nm-cx/main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const users = ["User 1", "User 2", "User 3", "User 4"]
const todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"]

const Home = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Users<br />and<br />Todos
    </div>
  </div>
)

const User = props => {
  return (
    <div className="itemDescriptionContainer">
      <div className="itemName">
        {props.match.params.name}
      </div>
      <div className="itemDescription">
        {DESCRIPTION}
      </div>
    </div>
  )
}

const Users = props => {
  return (
    <div className="userDisplay">
      <div className="listOfItems">
        <ul>
          {users.map((user,index) => (<li key={index + user} className="lineStyle"><Link className={props.location.pathname.includes(user) ? "listItem selectedListItem" : "listItem"} to={"/users/" + user}>{user}</Link></li>))}
        </ul>
      </div>
      <Route path='/users/:name' component={User} />
    </div>
  )
}

const Todo = props => {
  return (
    <div className="itemDescriptionContainer">
      <div className="itemName">
        {props.match.params.todoItem}
      </div>
      <div className="itemDescription">
        {DESCRIPTION}
      </div>
    </div>
  )
}

const Todos = props => {
  return (
    <div className="userDisplay">
      <div className="listOfItems">
        <ul>
          {todos.map((todo,index) => (<li key={index + todo} className="lineStyle"><Link className={props.location.pathname.includes(todo) ? "listItem selectedListItem" : "listItem"} to={"/todos/" + todo}>{todo}</Link></li>))}
        </ul>
      </div>
      <Route path='/todos/:todoItem' component={Todo} />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabName) {
    this.setState({ selectedTab: tabName })
  }

  render() {

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
