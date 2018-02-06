import React from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const users = ["Vince", "Bruce", "Sam", "Joe"]
const todos = ["Users and Todos", "Ghibli App", "Dojo Dossier", "Voting App II"]

const NmTab = ({exact, to, tabName}) => {
  return (
    <Route exact={exact} path={to} children={({match}) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} ><Link to={to}>{tabName}</Link></li>
      )}
    } />
  )
}

const ButtonGroup = props => (
  <nav>
    <ul className="tabs">
      <NmTab exact={true} to={"/"} tabName="Home" />
      <NmTab to={"/users"} tabName="Users" />
      <NmTab to={"/todos"} tabName="Todos" />
    </ul>
  </nav>
)

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

const App = props => (
  <BrowserRouter>
    <div className="App">
      <ButtonGroup />
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/todos" component={Todos} />
    </div>
  </BrowserRouter>
);

export default App;
