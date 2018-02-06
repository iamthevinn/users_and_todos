import React from 'react';
import './App.css';
//import './ui-toolkit/css/nm-cx/main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const users = ["Vince", "Bruce", "Sam", "Joe"]
const todos = ["Users and Todos", "Ghibli App", "Dojo Dossier", "Voting App II"]

const Home = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Users<br />and<br />Todos
    </div>
  </div>
)

const User = props => {
  const returnUser = users.includes(props.match.params.name) ? (<div className="itemDescriptionContainer">
    <div className="itemName">
      {props.match.params.name}
    </div>
    <div className="itemDescription">
      {DESCRIPTION}
    </div>
  </div>
  ) : (<div className="itemDescriptionContainer">
    <div className="itemName">
      {`No Such User. ${props.match.params.name} not found.`}
    </div>
  </div>)

  return returnUser
}

const Users = props => (
  <div className="userDisplay">
    <div className="listOfItems">
      <ul>
        {users.map((user, index) => (<li key={index + user} className="lineStyle"><Link className={props.location.pathname === "/users/" + user ? "listItem selectedListItem" : "listItem"} to={"/users/" + user}>{user}</Link></li>))}
      </ul>
    </div>
    <Route path='/users/:name' component={User} />
  </div>
)

const Todo = props => {
  const returnTodo = todos.includes(props.match.params.todoItem) ? (<div className="itemDescriptionContainer">
    <div className="itemName">
      {props.match.params.todoItem}
    </div>
    <div className="itemDescription">
      {DESCRIPTION}
    </div>
  </div>
  ) : (<div className="itemDescriptionContainer">
    <div className="itemName">
      {`No Such Todo. ${props.match.params.todoItem} not found.`}
    </div>
  </div>)

  return returnTodo
}

const Todos = props => (
  <div className="userDisplay">
    <div className="listOfItems">
      <ul>
        {todos.map((todo, index) => (<li key={index + todo} className="lineStyle"><Link className={props.location.pathname === "/todos/" + todo ? "listItem selectedListItem" : "listItem"} to={"/todos/" + todo}>{todo}</Link></li>))}
      </ul>
    </div>
    <Route path='/todos/:todoItem' component={Todo} />
  </div>
)

const NavBar = props => (
  <div>
    <div className="navigation">
      <li className="navItem">
        <Link className={props.location.pathname === "/" ? "navItemContent clickedNav" : "navItemContent"} to="/">Home</Link>
      </li>
      <li className="navItem">
        <Link className={props.location.pathname.startsWith("/users") ? "navItemContent clickedNav" : "navItemContent"} to="/users">Users</Link>
      </li>
      <li className="navItem">
        <Link className={props.location.pathname.startsWith("/todos") ? "navItemContent clickedNav" : "navItemContent"} to="/todos">Todos</Link>
      </li>
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/todos" component={Todos} />
  </div>
)


const App = props => (
  <BrowserRouter>
    <div className="App">
      <Route path='/' component={NavBar} />
    </div>
  </BrowserRouter>
);

export default App;
